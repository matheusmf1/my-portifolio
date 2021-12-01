import React, {createRef} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.css";

import maua_logo from '../../assets/img/logo_maua.png';

export default function EducationCard({school}) {

  const img_logo = {
    "../assets/img/logo_maua.png": maua_logo
  }

  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = "dark-mode";

  return (
    <>
      <Fade left duration={500}>

        <div className="education-card">
        
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-img"
              src={ img_logo[school.logo]}
              alt={school.schoolName}
            />
          </div>
          
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

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
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Slide left duration={700}>
        <div className="education-card-border"></div>
      </Slide>
    </>
  );
}
