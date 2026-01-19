import path from "node:path";

const rootDir = path.resolve(import.meta.dir, "..");
const distDir = path.join(rootDir, "dist");
const port = Number(process.env.PORT ?? 3124);

function toFilePath(urlPath: string) {
    const normalized = decodeURIComponent(urlPath);
    const suffix = normalized === "/" ? "/index.html" : normalized;
    const resolved = path.resolve(distDir, `.${suffix}`);

    if (!resolved.startsWith(distDir)) {
        return null;
    }

    return resolved;
}

const server = Bun.serve({
    port,
    async fetch(request) {
        const url = new URL(request.url);
        const filePath = toFilePath(url.pathname);

        if (!filePath) {
            return new Response("Not found", { status: 404 });
        }

        const file = Bun.file(filePath);
        if (await file.exists()) {
            return new Response(file);
        }

        return new Response("Not found", { status: 404 });
    }
});

console.log(`Dev server running at http://localhost:${server.port}`);
