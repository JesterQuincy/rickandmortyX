import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          background: "#e6e6e6",
        }}
      >
        <div></div>
        <div style={{ display: "flex", gap: "40px" }}>
          <Link href="/">Characters</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/epiisodes">Episodes</Link>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
