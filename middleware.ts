import { NextRequest, NextResponse } from "next/server";

const MARKDOWN_CONTENT = `# Shashwat Jain – Portfolio

**URL:** https://sshwt.me
**Type:** Personal portfolio and blog
**Author:** Shashwat Jain (shashwatjain558@gmail.com)

## About

Full-stack developer focused on building AI-powered web applications.
Currently building with Next.js, TypeScript, Python, Redis, and PostgreSQL.

## Sections

- Hero / About – Introduction and personal overview
- Experience – Work history (DremaAI, Full Stack Developer, Apr–Jul 2025)
- Projects – Selected open-source and product projects
- Open Source – GitHub contributions
- Skills – Technical stack
- Blog – Writing on software, AI, and building

## Projects

- RejectionGPT: AI resume rejection analysis – https://rejectiongpt.sshwt.me
- Chatterly: Real-time E2E encrypted chat – https://chatterly.sshwt.me
- Lejob AI: RAG-powered job-role matching – https://getjobai-three.vercel.app/
- Proddy: AI-summarized product reviews – https://github.com/shashwat558/know-your-product
- builderOS: Student builders directory – https://builder-os.vercel.app
- Buildtogether: Project showcase and collaboration – https://buildtogether.vercel.app

## Machine-readable files

- /llms.txt – LLM-focused site summary and agent instructions
- /sitemap.xml – Full URL sitemap
- /robots.txt – Crawl policy
- /api/content – This endpoint (Accept: text/markdown)
`;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Markdown content negotiation (acceptmarkdown.com spec) ---
  // Pages that make sense to serve as markdown when requested
  const markdownPaths = new Set(["/", "/blog"]);
  const accept = request.headers.get("accept") ?? "";

  if (
    markdownPaths.has(pathname) &&
    (accept.includes("text/markdown") || accept.includes("text/plain"))
  ) {
    return new NextResponse(MARKDOWN_CONTENT, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  const nonce = btoa(crypto.randomUUID());

  const isDev = process.env.NODE_ENV === "development";
  const scriptSrc = [`'nonce-${nonce}'`, "'strict-dynamic'"];
  if (isDev) scriptSrc.push("'unsafe-eval'");

  const cspHeader = [
    "default-src 'self'",
    `script-src ${scriptSrc.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://github.com https://avatars.githubusercontent.com",
    "media-src 'self'",
    "connect-src 'self' wss://*.firebaseio.com wss://*.firebasedatabase.app https://*.firebaseio.com https://*.firebasedatabase.app",
    "font-src 'self' data:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", cspHeader);
  // Add Vary: Accept so CDNs distinguish markdown vs HTML variants
  response.headers.set("Vary", "Accept, Accept-Encoding");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|ico|js)$).*)",
  ],
};
