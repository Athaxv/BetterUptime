import { xReadGroup, xAckBulk } from "redis-stream/client";
import axios from "axios";
import { db as prisma } from "@repo/db";

const REGION_ID = process.env.REGION_ID;
const WORKER_ID = process.env.WORKER_ID;

// if (!REGION_ID || !WORKER_ID) {
//     throw new Error("REGION_ID and WORKER_ID are required");
// }

async function main() {
    const res = await xReadGroup(REGION_ID as string, WORKER_ID as string);

    if (!res || res.length === 0) {
        console.log("No messages to process");
        return;
    }

    let promises = res.map(({ message}) => fetchWebsite(message.url, message.id))
    await Promise.all(promises);

    xAckBulk(REGION_ID as string, res.map(({id}) => id));
    console.log("Ack'd");
}

main();

async function fetchWebsite(url: string, websiteId: string) {
    return new Promise((resolve, reject) => {
        const StartTime = Date.now();
        axios.get(url)
            .then(async () => {
                const endTime = Date.now();
                await prisma.websiteTick.create({
                    data: {
                        response_time_ms: endTime - StartTime,
                        status: "Up",
                        region_id: REGION_ID as string,
                        website_id: websiteId as string,
                    }
                })
            })
            .catch(async () => {
                const endTime = Date.now();
                await prisma.websiteTick.create({
                    data: {
                        response_time_ms: endTime - StartTime,
                        status: "Down",
                        region_id: REGION_ID as string,
                        website_id: websiteId as string,
                    }
                })
            })
    })
}