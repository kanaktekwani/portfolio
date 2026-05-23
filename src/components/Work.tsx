import { CSSProperties, useCallback, useState } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Realtime AI Voice Verification Platform",
    category: "AI-powered Zoom integration for live speaker authenticity detection",
    summary:
      "Real-time audio analysis platform combining AI inference, backend APIs, Zoom SDK integration, and cloud-native workflows for live meeting environments.",
    tools: ["Python", "FastAPI", "AWS", "Zoom SDK", "Docker", "Realtime Systems"],
    metric: "Hero Project",
    code: "VOICE-01",
    accent: "#5eead4",
    link: "#contact",
  },
  {
    title: "LLM Video Intelligence System",
    category: "Retrieval-augmented conversational search over long-form video content",
    summary:
      "Built semantic retrieval workflows using embeddings, transcript processing, FastAPI services, and conversational memory for grounded AI interactions.",
    tools: ["RAG", "LLMs", "FastAPI", "Vector Search", "Docker"],
    metric: "YouTube RAG",
    code: "RAG-02",
    accent: "#ff4ecd",
    link: "#contact",
  },
  {
    title: "Cloud Infrastructure Automation",
    category: "CI/CD and container orchestration for scalable backend systems",
    summary:
      "Built infrastructure automation workflows using Terraform, Docker, Kubernetes, GitHub Actions, and AWS cloud services.",
    tools: ["Terraform", "Kubernetes", "AWS", "CI/CD"],
    metric: "DevOps",
    code: "CLOUD-03",
    accent: "#ffd166",
    link: "#contact",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Builds</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={project.title}>
                  <div
                    className="carousel-content"
                    style={
                      {
                        "--project-accent": project.accent,
                      } as CSSProperties
                    }
                  >
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <p className="carousel-kicker">{project.metric}</p>
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-summary">{project.summary}</p>
                        <div className="carousel-tools">
                          {project.tools.map((tool) => (
                            <span key={tool}>{tool}</span>
                          ))}
                        </div>
                        <a
                          className="project-link"
                          href={project.link}
                          data-cursor="disable"
                        >
                          Start a build <MdArrowOutward />
                        </a>
                      </div>
                    </div>
                    <div className="project-visual" aria-hidden="true">
                      <div className="visual-shell">
                        <div className="visual-topbar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div className="visual-readout">{project.code}</div>
                        <div className="visual-grid">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div className="visual-beam"></div>
                        <div className="visual-scanline"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
