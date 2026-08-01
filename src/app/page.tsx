import { githubURL } from "@/config";

const signalBars = [
  34, 52, 47, 71, 64, 88, 58, 93, 69, 80, 54, 74, 97, 62, 84, 48, 76, 90,
  67, 82, 56, 72, 42, 61,
];

const capabilities = [
  {
    index: "01",
    title: "Distributed AI",
    detail: "Inference runtimes, model serving, GPU orchestration, and practical performance work.",
    stack: "llama.cpp / ROCm / CUDA / containers",
  },
  {
    index: "02",
    title: "Edge systems",
    detail: "Compute that stays useful when bandwidth, power, hardware, and latency become constraints.",
    stack: "Linux / embedded / networking / observability",
  },
  {
    index: "03",
    title: "Data infrastructure",
    detail: "Industrial telemetry and event pipelines designed to remain legible under real load.",
    stack: "streaming / time series / APIs / storage",
  },
  {
    index: "04",
    title: "Product engineering",
    detail: "Technical products that turn complex systems into understandable, dependable tools.",
    stack: "TypeScript / Python / Next.js / cloud",
  },
];

function HeroSystemMap() {
  return (
    <figure className="system-map" aria-label="Abstract edge compute topology">
      <figcaption className="panel-head">
        <span>Edge topology / 001</span>
        <span className="live-label"><i /> Live system</span>
      </figcaption>

      <div className="spectrum" aria-hidden="true">
        <div className="spectrum-glow" />
        <div className="signal-bars">
          {signalBars.map((height, index) => (
            <span key={index} style={{ height: `${height}%`, animationDelay: `${index * -90}ms` }} />
          ))}
        </div>
        <div className="sweep-line" />
      </div>

      <div className="topology" aria-hidden="true">
        <div className="topology-node node-source">
          <small>01 / INPUT</small>
          <strong>FIELD DATA</strong>
          <span>multi-stream</span>
        </div>
        <div className="topology-node node-core">
          <small>02 / RUNTIME</small>
          <strong>EDGE INFER</strong>
          <span>local-first</span>
        </div>
        <div className="topology-node node-output">
          <small>03 / OUTPUT</small>
          <strong>DECISION</strong>
          <span>latency-aware</span>
        </div>
      </div>

      <div className="panel-foot">
        <span>Kingston / CA</span>
        <span>System nominal</span>
      </div>
    </figure>
  );
}

const projects = [
  {
    number: "001",
    eyebrow: "Open source / AI infrastructure",
    title: "AMD Strix Halo\nLlama.cpp Toolboxes",
    description:
      "Containerized llama.cpp environments built for AMD Strix Halo systems. The project turns a specialized hardware and runtime setup into a repeatable path from clean machine to local inference.",
    tags: ["ROCm", "llama.cpp", "Podman", "GPU inference"],
    href: "https://github.com/CryptoCanuck/amd-strix-halo-toolboxes",
    linkLabel: "Inspect repository",
  },
  {
    number: "002",
    eyebrow: "Product / technical education",
    title: "CoinCoach",
    description:
      "A learning product that makes cryptocurrency concepts easier to reason about through guided explanations and practical feedback loops—without flattening the underlying complexity.",
    tags: ["Product systems", "Education", "TypeScript", "Web"],
    href: "https://github.com/CryptoCanuck/coincoach.ca",
    linkLabel: "View source",
  },
  {
    number: "003",
    eyebrow: "Architecture / industrial edge",
    title: "Industrial Edge\nData Pipeline",
    description:
      "A resilient reference architecture for moving machine telemetry through constrained sites. Local normalization, buffering, and routing keep the system useful through intermittent connectivity.",
    tags: ["Edge compute", "Telemetry", "Store + forward", "Observability"],
    href: "#systems",
    linkLabel: "Read system notes",
  },
  {
    number: "004",
    eyebrow: "Ongoing / engineering lab",
    title: "Systems Field Notes",
    description:
      "Working notes from experiments in local AI, hardware-aware inference, developer tooling, and the small operational details that decide whether a system is actually dependable.",
    tags: ["Benchmarks", "Experiments", "Notes", "Open source"],
    href: githubURL,
    linkLabel: "Follow the work",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">CryptoCanuck / Systems engineering</p>
          <h1 className="hero-title reveal reveal-delay-1">
            Intelligence built for the <em>real world.</em>
          </h1>
          <p className="hero-summary reveal reveal-delay-2">
            I build AI infrastructure and edge systems that survive contact
            with hardware, networks, and operational reality.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-primary" href="#work">Explore selected work <span>↓</span></a>
            <a className="button button-secondary" href={githubURL} target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
          </div>
          <dl className="hero-facts reveal reveal-delay-3">
            <div><dt>Focus</dt><dd>AI / Edge / Data</dd></div>
            <div><dt>Base</dt><dd>Kingston, Canada</dd></div>
            <div><dt>Status</dt><dd><span className="status-dot" /> Building in public</dd></div>
          </dl>
        </div>
        <div className="hero-visual reveal reveal-delay-2">
          <HeroSystemMap />
        </div>
      </section>

      <section className="manifesto shell" aria-labelledby="manifesto-title">
        <p className="section-index">00 / Operating principle</p>
        <div>
          <h2 id="manifesto-title">
            The interesting work starts where the diagram meets the machine.
          </h2>
          <p>
            My work sits between model runtimes, distributed compute, industrial
            networks, and the humans who need to operate them. I care about
            architecture that is observable, understandable, and useful beyond
            the demo.
          </p>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="shell section-heading">
          <div>
            <p className="section-index">01 / Selected work</p>
            <h2 id="work-title">Systems in the field.</h2>
          </div>
          <p>Open-source infrastructure, product experiments, and reference architectures.</p>
        </div>

        <div className="projects shell">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.eyebrow}</span>
                </div>
                <h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label="Technologies and disciplines">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a className="text-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined}>
                  {project.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="systems-section shell" id="systems" aria-labelledby="systems-title">
        <div className="section-heading compact-heading">
          <div>
            <p className="section-index">02 / Systems map</p>
            <h2 id="systems-title">What I build across.</h2>
          </div>
          <p>From low-level runtime constraints to the product surface.</p>
        </div>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability-row" key={capability.index}>
              <span className="capability-index">{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.detail}</p>
              <code>{capability.stack}</code>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="shell about-grid">
          <div>
            <p className="section-index">03 / About</p>
            <h2 id="about-title">Engineer, operator, persistent systems tinkerer.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a Canadian engineer focused on the seam
              between intelligent software and physical infrastructure. I like
              ambitious systems, but I&apos;m even more interested in making them
              legible and dependable.
            </p>
            <p>
              Right now I&apos;m exploring local inference on unified-memory
              hardware, distributed AI tooling, and better ways to present
              deeply technical work without sanding off the details.
            </p>
            <a className="text-link" href={githubURL} target="_blank" rel="noreferrer">
              View the working archive <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
