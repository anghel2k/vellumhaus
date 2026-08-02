import BouncingMark from "./BouncingMark";

const motionFilms = [
  { id: "01", title: "L'Opéra", file: "opera.mp4", poster: "opera-poster.jpg" },
  { id: "02", title: "Le Jardin", file: "jardin.mp4", poster: "jardin-poster.jpg" },
  { id: "03", title: "Arc de Triomphe", file: "arc-de-triomphe.mp4", poster: "arc-de-triomphe-poster.jpg" },
];

const stills = [
  { title: "Ciao! Pool", file: "pool-still.jpg" },
  { title: "Ciao! Cherry", file: "cherry-still.jpg" },
  { title: "Ciao! Lemon", file: "lemon-still.jpg" },
];

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main">Skip to content</a>

      <header className="siteHeader">
        <a className="brandLink" href="#top" aria-label="Vellumhaus home">
          <img src="/brand/vh_mark_ink.svg" alt="" width={36} height={36} />
          <strong>vellumhaus©</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a className="contactNav" href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" id="top">
          <BouncingMark />
          <h1>
            <span>Human eye.</span>
            <span className="heroIndent">Machine nerve.</span>
            <span>Final image.</span>
          </h1>
          <div className="heroFooter">
            <p className="heroPositioning">
              <strong>Post-Production House</strong>
              <span>Focused on AI-driven pipelines and hybrid workflows.</span>
            </p>
            <a href="#work">View selected work <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>HUMAN JUDGEMENT · MACHINE ASSISTANCE · CONTROLLED FINISH · HUMAN JUDGEMENT · MACHINE ASSISTANCE · CONTROLLED FINISH ·</div>
        </div>

        <section className="workSection" id="work" aria-labelledby="work-title">
          <article className="featuredProject">
            <header className="featureHeader">
              <div className="projectIdentity">
                <p className="eyebrow">Featured project / 2026</p>
                <img className="projectLogo" src="/projects/san-pellegrino/san-pellegrino-logo.png" alt="San Pellegrino" />
                <h2 className="srOnly" id="work-title">San Pellegrino</h2>
              </div>
              <div className="featureSummary">
                <p>Three six-second social films turning Paris landmarks into oversized Italian gifts. The workflow combined AI image-making with deliberate keyframing, retouch, compositing and final-film craft.</p>
                <dl className="creditGrid">
                  <div><dt>Client</dt><dd>San Pellegrino</dd></div>
                  <div><dt>Agency</dt><dd>Everything is Computer</dd></div>
                  <div><dt>Role</dt><dd>AI Hybrid Post-Production</dd></div>
                  <div><dt>Workflow</dt><dd>Keyframes / Retouch / Final Film</dd></div>
                </dl>
              </div>
            </header>

            <div className="motionDeck" aria-label="San Pellegrino motion films">
              {motionFilms.map((film) => (
                <figure className="cassette" key={film.id}>
                  <div className="cassetteTop"><span>Motion / {film.id}</span><span>06 SEC</span></div>
                  <video autoPlay loop muted playsInline preload="metadata" poster={`/projects/san-pellegrino/${film.poster}`} aria-label={`${film.title}, San Pellegrino social film`}>
                    <source src={`/projects/san-pellegrino/${film.file}`} type="video/mp4" />
                  </video>
                  <figcaption><strong>{film.title}</strong><span>AI Hybrid Film</span></figcaption>
                </figure>
              ))}
            </div>

            <div className="stillSection">
              <div className="stillHeading"><span>Campaign stills</span><span>Social / Print</span></div>
              <div className="stillGrid">
                {stills.map((still) => (
                  <figure key={still.file}>
                    <img src={`/projects/san-pellegrino/${still.file}`} alt={`${still.title} campaign still for San Pellegrino`} />
                    <figcaption>{still.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>

          <article className="featuredProject kauflandProject" aria-labelledby="kaufland-title">
            <header className="featureHeader">
              <div className="projectIdentity">
                <p className="eyebrow">Project 02 / Full AI / 2026</p>
                <img className="projectLogo kauflandLogo" src="/projects/kaufland/kaufland-logo.png" alt="Kaufland" />
                <h2 className="srOnly" id="kaufland-title">Kaufland Romania</h2>
              </div>
              <div className="featureSummary">
                <p>A 90-second film made entirely with AI, built scene by scene from designed keyframes. Every shot was video-generated, composited and synchronised into a continuous edit, then colour-graded for one cohesive final look.</p>
                <dl className="creditGrid">
                  <div><dt>Client</dt><dd>Kaufland Romania</dd></div>
                  <div><dt>Agency</dt><dd>Saga Film</dd></div>
                  <div><dt>Role</dt><dd>Full AI Film Production</dd></div>
                  <div><dt>Workflow</dt><dd>Keyframes / Generation / Composite / Grade</dd></div>
                </dl>
              </div>
            </header>

            <div className="kauflandFilm">
              <figure className="featureReel">
                <div className="reelTop"><span>Master Film / 01</span><span>01:30 / Sound on</span></div>
                <video controls playsInline preload="metadata" poster="/projects/kaufland/kaufland-poster.jpg" aria-label="Kaufland Romania full AI film">
                  <source src="/projects/kaufland/kaufland-film.mp4" type="video/mp4" />
                </video>
                <figcaption><strong>Generated shot by shot.</strong><span>Kaufland Romania / 2026</span></figcaption>
              </figure>
            </div>
          </article>
        </section>

        <section className="contactSection" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">02 / Contact</p>
          <h2 id="contact-title">Bring the<br />next frame.</h2>
          <p className="contactLead">For films, campaigns and image systems that need craft at machine speed.</p>
          <a className="contactEmail" href="mailto:hello@veliumin.com"><span>hello@veliumin.com</span><span aria-hidden="true">↗</span></a>
          <div className="contactGrid">
            <div className="contactPerson"><span>Name / Role</span><strong>Anghel Robert</strong><small>Producer / Founder</small></div>
            <div><span>Based</span><strong>Bucharest, Romania</strong></div>
            <div><span>Phone</span><a href="tel:+40722905095">+40 722 905 095</a></div>
            <div><span>Availability</span><strong>Projects / Collaborations</strong></div>
          </div>
          <div className="contactMark" aria-hidden="true"><img src="/brand/vh_mark_paper.svg" alt="" /></div>
        </section>
      </main>

      <footer><span>Vellumhaus© 2026</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
