export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Hello World 👋</h1>
      <p>Welcome to my simple Next.js blog running on Flux Orbit.</p>

      <a
        href="/posts/first-post"
        style={{ color: "#0070f3", display: "block", marginTop: "20px" }}
      >
        First Post →
      </a>

      <a
        href="/posts/second-post"
        style={{ color: "#0070f3", display: "block", marginTop: "10px" }}
      >
        2nd Test Post →
      </a>

      <a
        href="/posts/third-post"
        style={{ color: "#0070f3", display: "block", marginTop: "10px" }}
      >
        3rd Test Post →
      </a>
    </main>
  );
}
