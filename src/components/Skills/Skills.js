import React from "react";
import "./Skills.css";
import UIDesign from "./ui-design.png";
import WebDesign from "./website-design.png";
import AppDesign from "./app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      {/* SkillDesc will contain all the skills */}
      <span className="skillDesc">
        I am a skilled and passionate web developer, app developer and ui
        designer with strong command in HTML,CSS,JAVASCRIPT , CANVA, REACT JS,
        REACT NATIVE, NODE JS, EXPRESS JS, MONGODB, MYSQL{" "}
      </span>
      <div className="skillBars">
        {/* UIDesign skill bar */}
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
             <h2>UI/UX Design</h2>
             <p> UX design is all about identifying and solving user problems; UI design is all about creating intuitive, aesthetically-pleasing, interactive interfaces </p>
          </div>
        </div>
        <div className="skillBar">
          {/* WebDeveloper Skill Bar */}
          <img src={WebDesign} alt="WebDeveloper" className="skillBarImg" />
          <div className="skillBarText">
             <h2>Web Developer</h2>
             <p>Web development is all about satisfying the user with the website interface and enhance his/her exprience with efficent backend.</p>
          </div>
        </div>
        <div className="skillBar">
          {/* App Developer Skill Bar */}
          <img src={AppDesign} alt="AppDeveloper" className="skillBarImg" />
          <div className="skillBarText">
             <h2>App Development</h2>
             <p>App development is all about giving the user all the functionality in his/her mobile screen. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
