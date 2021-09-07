import React, {createRef, useContext, useState} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";
import ColorThief from "colorthief";

export default function EducationCard({school}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div
            style={{background: rgb(colorArrays)}}
            className="education-banner"
          >
            <div className="education-blurred_div"></div>
            <div className="education-div-school">
              <h3 className="education-text-school">{school.schoolName}</h3>
            </div>

            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
              onLoad={() => getColorArrays()}
            />
          </div>

          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode education-text-subHeader"
                  : "education-text-subHeader"
              }
            >
              {school.subHeader}
            </h5>
            <h5
              className={`${isDark ? "dark-mode" : ""} education-text-duration`}
            >
              {school.duration}
            </h5>
            <p className="education-text-desc">{school.desc}</p>

            {/* <div className="education-text-bullets"> */}
            <ul>
              <GetDescBullets descBullets={school.descBullets} />
            </ul>
          </div>
        </div>
      </Fade>

      {/*
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
      */}
    </div>
  );
}
