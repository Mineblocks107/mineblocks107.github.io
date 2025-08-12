// @ts-nocheck
// main.ts
Deno.serve(async (req) => {
  const url = new URL(req.url);

  // Allow CORS for all responses
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Extract target URL from ?url=...
  const target = url.searchParams.get("url");
  if (!target) {
    return new Response("Missing 'url' query parameter", {
      status: 400,
      headers: corsHeaders,
    });
  }

  try {
    // Forward the request
    const res = await fetch(target, {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" && req.method !== "HEAD" ? await req.text() : undefined,
    });

    // Relay the response with CORS headers
    const body = await res.text();
    return new Response(body, {
      status: res.status,
      headers: {
        ...corsHeaders,
        "Content-Type": res.headers.get("content-type") ?? "text/plain",
      },
    });
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500, headers: corsHeaders });
  }
});
