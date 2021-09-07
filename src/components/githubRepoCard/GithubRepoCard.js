import React from "react";
import "./GithubRepoCard.scss";
import {Fade} from "react-reveal";

export default function GithubRepoCard({repo, isDark}) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
        key={repo.node.id}
        onClick={() => openRepoinNewTab(repo.node.url)}
      >
        <div className="repo-card" id="repo-card">
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" id="text-div">
              {repo.node.name}
            </p>
          </div>

          <p className="repo-description" id="text-div">
            {repo.node.description}
          </p>

          <div className="repo-stats">
            <div className="repo-left-stat">
              {repo.node.primaryLanguage !== null && (
                <span>
                  <div
                    className="language-color"
                    style={{backgroundColor: repo.node.primaryLanguage.color}}
                  ></div>
                  <p id="text-div">{repo.node.primaryLanguage.name}</p>
                </span>
              )}
            </div>
            <div className="repo-right-stat" id="text-div">
              <p>{repo.node.diskUsage} KB</p>
            </div>
          </div>

          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
