import { db as prisma } from "@repo/db";
import { BulkAdd } from "redis-stream/client";

async function main(){
    const websites  = await prisma.website.findMany({
        select: {
            url: true,
            id: true
        }
    })

    await BulkAdd(websites.map((w: { url: string; id: string }) => ({
        url: w.url,
        id: w.id
    })));
}

setInterval(() => {
    main();
}, 3 * 1000)

main();