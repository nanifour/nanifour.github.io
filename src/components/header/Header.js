import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  educationInfo,
  bigProjects,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  contactInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewEducation = educationInfo.display;
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewProjects = bigProjects.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills"> &#62;&#95; Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience"> &#62;&#95; Work Experiences</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">&#62;&#95; Education</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects"> &#62;&#95; Projects</a>
            </li>
          )}
          {/*
          {viewOpenSource && (
            <li>
              <a href="#opensource">Projects</a>
            </li>
          )}
          */}
          {viewAchievement && (
            <li>
              <a href="#achievements"> &#62;&#95; Certifications</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs"> &#62;&#95; Blogs </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks"> &#62;&#95; Talks</a>
            </li>
          )}
          {contactInfo && (
            <li>
              <a href="#contact"> &#62;&#95; Contact Me</a>
            </li>
           )}
           <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

            {/*
            <a>
              <ToggleSwitch />
            </a>
            */}
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
