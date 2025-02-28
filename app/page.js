import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals">Meals</Link>
        <Link href="meals/share">Share</Link>
        <Link href="/community">Community</Link>
      </h1>
    </main>
  );
}
