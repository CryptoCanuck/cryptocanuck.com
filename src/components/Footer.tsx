import { githubURL } from "@/config";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Open channel</p>
          <h2>Let&apos;s build the part that has to work.</h2>
        </div>

        <div className="footer-contact">
          <p>
            Interested in applied AI, edge systems, or infrastructure that
            crosses the boundary between software and hardware?
          </p>
          <a className="text-link" href={githubURL} target="_blank" rel="noreferrer">
            Start on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} CryptoCanuck</span>
        <span>Kingston, Ontario · 44.2312° N / 76.4860° W</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
