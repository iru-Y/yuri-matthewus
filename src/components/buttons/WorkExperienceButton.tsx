import React from "react";
import './WorkExperienceButton.css'
interface WorkExperienceProps {
    onPress: React.MouseEventHandler<HTMLButtonElement>;
}

const WorkExperienceButton: React.FC<WorkExperienceProps> = ({ onPress }) =>{
       return (
        <button onClick={()=> onPress} className="button">
            Veja mais
        </button>
       )
}

export default WorkExperienceButton;