import { NextRequest, NextResponse } from "next/server";

const MARKDOWN_CONTENT = `# Shashwat Jain – Portfolio

**URL:** https://sshwt.me  
**Type:** Personal portfolio and blog  
**Author:** Shashwat Jain (shashwatjain558@gmail.com)

## About

Full-stack developer focused on building AI-powered web applications.
Currently building with Next.js, TypeScript, Python, Redis, and PostgreSQL.

## Sections

- **Hero / About** – Introduction and personal overview
- **Experience** – Work history (DremaAI, Full Stack Developer, Apr–Jul 2025)
- **Projects** – Selected open-source and product projects
- **Open Source** – GitHub contributions
- **Skills** – Technical stack
- **Blog** – Writing on software, AI, and building

## Projects

| Name | Description | Tech |
|------|-------------|------|
| RejectionGPT | AI resume rejection analysis using LangChain + OpenAI | Next.js, LangChain, OpenAI, Supabase |
| Chatterly | Real-time chat with E2E encryption and video calling | Next.js, Redis |
| Lejob AI | RAG-powered job-role matching from resume | Next.js, Gemini, LangChain, Supabase |
| Proddy | AI-summarized Myntra product reviews | Next.js, Gemini, Puppeteer, LangChain |
| builderOS | Directory for student builders: grants, hackathons, tools | Next.js, Supabase |
| Buildtogether | Project showcase and collaboration platform | Next.js, WebSockets, Redis, Prisma |

## Machine-readable files

- /llms.txt – LLM-focused site summary and agent instructions
- /sitemap.xml – Full URL sitemap
- /robots.txt – Crawl policy
`;

export async function GET(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  if (accept.includes("text/markdown") || accept.includes("text/plain")) {
    return new NextResponse(MARKDOWN_CONTENT, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  // Default: redirect to homepage for HTML clients
  return NextResponse.redirect(new URL("/", request.url), { status: 302 });
}
