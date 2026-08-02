"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

const projects = [
  {
    id: "san-pellegrino",
    brand: "San Pellegrino",
    title: "Ciao! Paris Social Films",
    discipline: "AI Hybrid / Motion",
    logo: "/projects/san-pellegrino/san-pellegrino-logo.png",
    railLogo: "/projects/san-pellegrino/san-pellegrino-logo.png",
    preview: "/projects/san-pellegrino/pool-still.jpg",
  },
  {
    id: "house-of-errors",
    brand: "House of Errors",
    title: "Embroidered Moss Denim + SS25",
    discipline: "AI / 3D / VFX",
    logo: "/projects/house-of-errors/logo.svg",
    railLogo: "/projects/house-of-errors/logo.svg",
    preview: "/projects/house-of-errors/ss25-poster.jpg",
  },
  {
    id: "heineken",
    brand: "Heineken",
    title: "Fans Have More Friends",
    discipline: "AI / 3D / VFX / LED",
    logo: "/projects/heineken/heineken-logo.png",
    railLogo: "/projects/heineken/heineken-logo.png",
    preview: "/projects/heineken/heineken-blue.jpg",
  },
  {
    id: "kaufland",
    brand: "Kaufland Romania",
    title: "90-second AI Film",
    discipline: "Full AI / Film",
    logo: "/projects/kaufland/kaufland-logo.png",
    railLogo: "/projects/kaufland/kaufland-logo-white.png",
    preview: "/projects/kaufland/kaufland-poster.jpg",
  },
] as const;

function scrollToProject(event: ReactMouseEvent<HTMLAnchorElement>, id: string, close?: () => void) {
  event.preventDefault();
  close?.();
  window.setTimeout(() => {
    const alignProject = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
    alignProject();
    window.setTimeout(alignProject, 900);
  }, 0);
}

export function ProjectLogoRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const setRailPaused = (paused: boolean) => {
    const animation = railRef.current
      ?.querySelector(".projectLogoRailTrack")
      ?.getAnimations()[0];

    if (!animation) return;
    if (paused) animation.pause();
    else animation.play();
  };

  return (
    <div
      ref={railRef}
      className="projectLogoRail"
      aria-label="Jump to a selected project"
      onPointerEnter={() => setRailPaused(true)}
      onPointerLeave={() => setRailPaused(false)}
    >
      <div className="projectLogoRailTrack">
        {[0, 1].map((copy) => (
          <div className="projectLogoRailGroup" aria-hidden={copy === 1} key={copy}>
            {projects.map((project) => (
              <a
                href={`#${project.id}`}
                onClick={(event) => scrollToProject(event, project.id)}
                tabIndex={copy === 1 ? -1 : undefined}
                title={`View ${project.brand}`}
                key={`${copy}-${project.id}`}
              >
                <img src={project.railLogo} alt={copy === 0 ? project.brand : ""} />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkIndex() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <button
        className="headerWorkButton"
        type="button"
        aria-expanded={open}
        aria-controls="work-index"
        onClick={() => setOpen(true)}
      >
        Work
      </button>

      {open && (
        <div className="workIndexLayer" onMouseDown={() => setOpen(false)}>
          <section
            className="workIndexPanel"
            id="work-index"
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-index-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="workIndexHeader">
              <div>
                <p>Selected work / {String(projects.length).padStart(2, "0")} projects</p>
                <h2 id="work-index-title">Project index.</h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close work index">Close ×</button>
            </header>

            <div className="workIndexGrid">
              {projects.map((project, index) => (
                <a
                  className="workIndexCard"
                  data-project={project.id}
                  href={`#${project.id}`}
                  onClick={(event) => scrollToProject(event, project.id, () => setOpen(false))}
                  key={project.id}
                >
                  <img className="workIndexPreview" src={project.preview} alt="" />
                  <span className="workIndexReveal">
                    <span className="workIndexLogoBox"><img src={project.logo} alt="" /></span>
                    <span className="workIndexCopy">
                      <span>{String(index + 1).padStart(2, "0")} / {project.discipline}</span>
                      <strong>{project.title}</strong>
                      <small>{project.brand} <span aria-hidden="true">↘</span></small>
                    </span>
                  </span>
                  <span className="srOnly">Open {project.brand}: {project.title}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

