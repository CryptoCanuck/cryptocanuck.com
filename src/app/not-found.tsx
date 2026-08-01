import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Signal lost / 404</p>
      <h1>That route is outside the map.</h1>
      <Link className="button button-primary" href="/">
        Return to control room
      </Link>
    </main>
  );
}
