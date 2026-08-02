import BouncingMark from "./BouncingMark";
import { ProjectLogoRail, WorkIndex } from "./ProjectNavigation";

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

const houseOfErrorsStills = [
  { id: "01", file: "ss25-01.jpg" },
  { id: "02", file: "ss25-02.jpg" },
  { id: "03", file: "ss25-03.jpg" },
  { id: "04", file: "ss25-04.jpg" },
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
          <WorkIndex />
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
            <ProjectLogoRail />
            <p className="heroPositioning">
              <strong>Post-Production House</strong>
              <span>Focused on AI-driven pipelines and hybrid workflows.</span>
            </p>
            <a className="heroWorkLink" href="#work">View selected work <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <div className="ticker" aria-hidden="true" />

        <section className="workSection" id="work" aria-labelledby="work-title">
          <article className="featuredProject" id="san-pellegrino">
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

          <article className="featuredProject hoeProject" id="house-of-errors" aria-labelledby="house-of-errors-title">
            <header className="hoeBrandHeader">
              <p className="eyebrow">House of Errors / Two campaigns</p>
              <img src="/projects/house-of-errors/logo.svg" alt="House of Errors" />
              <h2 className="srOnly" id="house-of-errors-title">House of Errors — selected work</h2>
            </header>

            <section className="hoeCampaign mossCampaign" aria-labelledby="moss-title">
              <figure className="campaignFilm mossFilm">
                <div className="assetBar"><span>Campaign 01 / Film</span><span>00:24 / Loop</span></div>
                <video autoPlay loop muted playsInline preload="metadata" poster="/projects/house-of-errors/moss-poster.jpg" aria-label="House of Errors Embroidered Moss Denim film">
                  <source src="/projects/house-of-errors/moss.mp4" type="video/mp4" />
                </video>
                <figcaption><strong>Embroidered Moss Denim</strong><span>AI Post-Production</span></figcaption>
              </figure>

              <div className="campaignDetails">
                <p className="campaignIndex">01 / AI Post-Production</p>
                <h3 id="moss-title">Embroidered<br />Moss Denim</h3>
                <p className="campaignDescription">Shot and directed by Tom Emmerson, the live-action material was extended through designed input and output keyframes. The generated motion was composited, graded and edited into a tactile film where embroidered moss grows through the denim.</p>
                <dl className="campaignCredits">
                  <div><dt>Client</dt><dd>House of Errors</dd></div>
                  <div><dt>Agency</dt><dd>Red Buoy</dd></div>
                  <div><dt>Director / Photographer</dt><dd>Tom Emmerson</dd></div>
                  <div><dt>Workflow</dt><dd>Keyframes / I2V / Composite / Grade / Edit</dd></div>
                </dl>
              </div>
            </section>

            <section className="hoeCampaign ss25Campaign" aria-labelledby="ss25-title">
              <div className="ss25Intro">
                <div>
                  <p className="campaignIndex">02 / 3D + VFX</p>
                  <h3 id="ss25-title">SS25</h3>
                </div>
                <div>
                  <p className="campaignDescription">The stacked paint cans beneath the talent were built and rendered in 3D, replaced into the photographed plates and given subtle animation. The result keeps the surreal intervention grounded in the original light, scale and shadows.</p>
                  <dl className="campaignCredits">
                    <div><dt>Client</dt><dd>House of Errors</dd></div>
                    <div><dt>Agency</dt><dd>Red Buoy</dd></div>
                    <div><dt>Director</dt><dd>Tom Emmerson</dd></div>
                    <div><dt>Workflow</dt><dd>3D / Render / Comp Replacement / Animation</dd></div>
                  </dl>
                </div>
              </div>

              <div className="ss25Showcase">
                <figure className="campaignFilm ss25Film">
                  <div className="assetBar"><span>Campaign 02 / Film</span><span>00:52 / Sound on</span></div>
                  <video controls playsInline preload="metadata" poster="/projects/house-of-errors/ss25-poster.jpg" aria-label="House of Errors SS25 film">
                    <source src="/projects/house-of-errors/ss25.mp4" type="video/mp4" />
                  </video>
                  <figcaption><strong>House of Errors SS25</strong><span>3D + VFX</span></figcaption>
                </figure>

                <div className="ss25StillGrid" aria-label="House of Errors SS25 campaign stills">
                  {houseOfErrorsStills.map((still) => (
                    <figure key={still.file}>
                      <img src={`/projects/house-of-errors/${still.file}`} alt={`House of Errors SS25 campaign still ${still.id}`} />
                      <figcaption>SS25 / {still.id}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          </article>

          <article className="featuredProject heinekenProject" id="heineken" aria-labelledby="heineken-title">
            <header className="featureHeader heinekenHeader">
              <div className="projectIdentity">
                <p className="eyebrow">Project 04 / Hybrid Production</p>
                <img className="projectLogo heinekenLogo" src="/projects/heineken/heineken-logo.png" alt="Heineken" />
                <h2 className="srOnly" id="heineken-title">Heineken — Fans Have More Friends</h2>
              </div>
              <div className="featureSummary">
                <p>For “Fans Have More Friends”, we built the campaign environments before the shoot—combining AI, 3D and VFX into LED-ready backgrounds matched to the talent, lighting and photographic setup. Technical 3D planning mapped every bottle position so the individual bottles resolve into one larger bottle at the centre of the image.</p>
                <dl className="creditGrid">
                  <div><dt>Client</dt><dd>Heineken</dd></div>
                  <div><dt>Agency</dt><dd>LePub</dd></div>
                  <div><dt>Photographer</dt><dd>Justin Bettman</dd></div>
                  <div><dt>Production</dt><dd>Breadthemakery</dd></div>
                  <div><dt>Role</dt><dd>Technical Image Production</dd></div>
                  <div><dt>Pipeline</dt><dd>AI / 3D / VFX / LED</dd></div>
                </dl>
              </div>
            </header>

            <div className="heinekenGallery" aria-label="Heineken Fans Have More Friends campaign images">
              <figure className="heinekenFrame">
                <img src="/projects/heineken/heineken-day.jpg" alt="Heineken Fans Have More Friends campaign image in a daylight bar environment" />
                <figcaption><strong>Daylight environment</strong><span>LED background / Final image</span></figcaption>
              </figure>
              <figure className="heinekenFrame">
                <img src="/projects/heineken/heineken-blue.jpg" alt="Heineken Fans Have More Friends campaign image in a blue-hour bar environment" />
                <figcaption><strong>Blue-hour environment</strong><span>LED background / Final image</span></figcaption>
              </figure>
            </div>
          </article>          <article className="featuredProject kauflandProject" id="kaufland" aria-labelledby="kaufland-title">
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

