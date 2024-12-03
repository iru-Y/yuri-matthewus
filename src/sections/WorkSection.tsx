import React from 'react';
import WorkExperience from '../components/cards/WorkExperience';
import './WorkSection.css';
import workSectionStrings from  '../../texts/workSectionStrings.json'
interface WorkSectionProps {
  bodyRef: React.RefObject<HTMLDivElement>;
}

const WorkSection: React.FC<WorkSectionProps> = ({ bodyRef }) => {
  const { title, workExperiences } = workSectionStrings.workSection;

  return (
    <div className="work-section" ref={bodyRef}>
      <p>{title}</p>

      <div className="grid-word">
        {workExperiences.map((experience, index) => (
          <WorkExperience
            key={index}
            img={experience.img}
            ptext={experience.ptext}
            stext={experience.stext}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;

