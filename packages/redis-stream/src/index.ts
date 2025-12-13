import { createClient } from "redis";

const client = createClient({
    url: "redis://localhost:6379"
});
client.on?.("error", (err: Error) => console.log("Redis Client Error", err));
await client.connect();
console.log("Redis Client Connected");

type websiteEvent = { url: string, id: string };

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