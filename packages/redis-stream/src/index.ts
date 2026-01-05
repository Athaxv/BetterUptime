import { createClient } from "redis";

const client = createClient({
    url: "redis://localhost:6379"
});
client.on?.("error", (err: Error) => console.log("Redis Client Error", err));
await client.connect();
console.log("Redis Client Connected");

type websiteEvent = { url: string, id: string };
type MessageType = { id: string, message: { url: string, id: string }};

export async function xAdd({ url, id }: websiteEvent) {
    await client.xAdd('betteruptime:website', '*', {
        url,
        id
    })
}

export async function BulkAdd(websites: websiteEvent[]) {
    for (const website of websites) {
        await xAdd({
            url: website.url,
            id: website.id
        });
    }
}

export async function xReadGroup(consumerGrp: string, workerId: string): Promise<MessageType[]> {
    const res = await client.xReadGroup(consumerGrp, workerId, {
        key: 'betteruptime:website',
        id: '>',
    },{
        'COUNT': 5
    })
    // @ts-ignore
    let messages: MessageType[] = res[0]?.messages as MessageType[];
    // @ts-ignore
    console.log("XReadGroup Response", res[0].messages);
    return messages;
}

async function xAck(consumerGrp: string, streamId: string) {
    await client.xAck("betteruptime:website", consumerGrp, streamId);
}

export async function xAckBulk(consumerGrp: string, streamIds: string[]) {
    streamIds.map(streamId => xAck(consumerGrp, streamId));
}