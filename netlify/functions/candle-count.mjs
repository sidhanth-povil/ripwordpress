import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("candles", { consistency: "strong" });

  if (req.method === "POST") {
    // Increment candle count
    const currentCountStr = await store.get("count") || "5";
    let currentCount = parseInt(currentCountStr, 10);
    currentCount += 1;
    await store.set("count", currentCount.toString());

    return new Response(JSON.stringify({ count: currentCount }), {
      headers: { "Content-Type": "application/json" }
    });
  } else if (req.method === "GET") {
    // Return candle count
    const currentCountStr = await store.get("count") || "5";
    let currentCount = parseInt(currentCountStr, 10);

    return new Response(JSON.stringify({ count: currentCount }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = {
  path: "/api/candles"
};
