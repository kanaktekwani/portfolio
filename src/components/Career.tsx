import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Build log <span>&</span>
          <br /> trajectory
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Builder</h4>
                <h5>Backend Systems, AI, Cloud</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and building practical software systems focused on AI
              workflows, automation, cloud infrastructure, and scalable backend
              services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Systems Lab</h4>
                <h5>LLMs, APIs, Automation</h5>
              </div>
              <h3>AI</h3>
            </div>
            <p>
              Building AI-powered tools, retrieval systems, workflow
              automations, and real-time applications that solve operational
              problems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & Platform Engineering</h4>
                <h5>AWS, Kubernetes, DevOps</h5>
              </div>
              <h3>CLOUD</h3>
            </div>
            <p>
              Exploring distributed systems, CI/CD pipelines, infrastructure
              automation, observability, and scalable cloud-native
              architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning Loop</h4>
                <h5>Build / Break / Improve</h5>
              </div>
              <h3>ALWAYS</h3>
            </div>
            <p>
              Continuously learning through projects, experimentation,
              debugging, and shipping systems that improve with each iteration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
