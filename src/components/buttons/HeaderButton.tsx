import './HeaderButton.css'
interface HeaderButtonProps {
    text: string;
    targetRef: ()=>void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({text, targetRef}) => {
  

    return (
        <button className="headerButton" onClick={targetRef}>{text}</button>
    );
};

export default HeaderButton;