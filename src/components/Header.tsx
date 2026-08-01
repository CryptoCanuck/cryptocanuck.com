import Link from "next/link";
import { githubURL } from "@/config";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Systems", href: "/#systems" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav shell" aria-label="Primary navigation">
        <Link href="/" className="wordmark" aria-label="CryptoCanuck home">
          <span className="wordmark-mark">CC</span>
          <span className="wordmark-copy">
            CryptoCanuck
            <small>Systems / AI / Edge</small>
          </span>
        </Link>

        <div className="nav-links">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <a
          className="nav-status"
          href={githubURL}
          target="_blank"
          rel="noreferrer"
        >
          <span className="status-dot" aria-hidden="true" />
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
