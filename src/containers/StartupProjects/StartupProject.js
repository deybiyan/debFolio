import React, {useContext, useEffect, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [selectedProject, setSelectedProject] = useState(null);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    if (win) {
      win.focus();
    }
  }

  const openProjectModal = project => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const handleCardKeyDown = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectModal(project);
    }
  };

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleEscapeKey = event => {
      if (event.key === "Escape") {
        closeProjectModal();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedProject]);

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
            <br />
            <br />
            {bigProjects.subtext}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                  role="button"
                  tabIndex={0}
                  onClick={() => openProjectModal(project)}
                  onKeyDown={event => handleCardKeyDown(event, project)}
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="project-card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={event => {
                                event.stopPropagation();
                                openUrlInNewTab(link.url);
                              }}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedProject && (
            <div className="project-modal-overlay" onClick={closeProjectModal}>
              <div
                className={
                  isDark
                    ? "project-modal project-modal-dark"
                    : "project-modal project-modal-light"
                }
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedProject.projectName} details`}
                onClick={event => event.stopPropagation()}
              >
                <button
                  className="project-modal-close"
                  type="button"
                  aria-label="Close project details"
                  onClick={closeProjectModal}
                >
                  x
                </button>

                {selectedProject.image ? (
                  <div className="project-modal-image-wrap">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.projectName}
                      className="project-modal-image"
                    />
                  </div>
                ) : null}

                <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {selectedProject.projectName}
                </h3>

                <p
                  className={
                    isDark
                      ? "dark-mode project-modal-description"
                      : "project-modal-description"
                  }
                >
                  {selectedProject.projectDesc}
                </p>

                {selectedProject.footerLink ? (
                  <div className="project-modal-footer">
                    {selectedProject.footerLink.map((link, idx) => {
                      return (
                        <span
                          key={idx}
                          className={
                            isDark ? "dark-mode project-tag" : "project-tag"
                          }
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name}
                        </span>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
