import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
   
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
                  >
                    {project.image ? (
                      <div className="project-image">
                      
                      <div class="overlay">
                             <div class="text">{project.imageCover}</div>
                      </div>

                        <span className="image-container">
                          <img
                            src={project.image}
                            alt={project.projectName}
                          ></img>
                          
                        </span>

                      </div>
                    ) : null}
                    <div className="project-detail">

                      <div className="title-container">
                        <h5
                          className={isDark ? "dark-mode card-title" : "card-title"}
                        >
                          {project.projectName}
                        </h5>
                      </div>

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
                                onClick={() => openProjectInNewWindow(link.url)}
                              >
                                {link.name}
                              </span>

                            );
                          })}
                        </div>
                      ) : null}


                      {project.languageTag ? (
                        <div className="project-card-tags">
                          {project.languageTag.map((tags, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark ? "dark-mode project-tag" : "project-tag"
                                }
                              >
                              {tags.tagname}
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
        </div>
      </div>

  );
}
