import React from "react";
import "./WorkExperience.css";
import WorkExperienceButton from "../buttons/WorkExperienceButton";
interface WorkExperienceProps {
  img: string;
  ptext: string;
  stext: string;
}

const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  console.log(event)
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  img,
  ptext,
  stext,
}) => {
  return (
    <div className="work-experience">
      <img src={img} alt=""/>
      <div className="pp">
        <div className="ts">
        <p style={{ fontSize: 26 , fontFamily:  "Poppins", fontWeight: "bolder"}}>{ptext}</p>
        <p style={{ fontSize: 11,  fontFamily:  "Poppins", fontWeight: "bolder" }}>{stext}</p>

        </div>
        <WorkExperienceButton  onPress={onClick}/>
      </div>
    </div>
  );
};

export default WorkExperience;
