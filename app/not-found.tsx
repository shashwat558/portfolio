import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found | Shashwat Jain",
  description: "This page does not exist. Find what you need using the links below.",
};

export default function NotFound() {
  return (
    <main
      style={{ fontFamily: "monospace", maxWidth: 640, margin: "80px auto", padding: "0 24px", lineHeight: 1.7 }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>404 – Page Not Found</h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        The path you requested does not exist on this site.
      </p>

      {/* Markdown-style recovery block for agents */}
      <section aria-label="Site navigation help">
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Where to look next</h2>
        <ul style={{ paddingLeft: "1.25rem" }}>
          <li><Link href="/">Home – portfolio and projects</Link></li>
          <li><Link href="/blog">Blog – writing and notes</Link></li>
          <li><a href="/llms.txt">llms.txt – machine-readable site summary</a></li>
          <li><a href="/sitemap.xml">sitemap.xml – full URL index</a></li>
          <li><a href="/robots.txt">robots.txt – crawl policy</a></li>
        </ul>
      </section>

      <p style={{ marginTop: "2rem", fontSize: "0.875rem", color: "#888" }}>
        If you followed a link to get here, please{" "}
        <a href="mailto:shashwatjain558@gmail.com">let me know</a>.
      </p>
    </main>
  );
}
