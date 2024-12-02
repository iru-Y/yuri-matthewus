import './HomeHeader.css'
import '../components/buttons/HeaderButton.css'
import HeaderButton from '../components/buttons/HeaderButton';
import React, {useState} from 'react'

interface HomeHeaderProps {
  scrollToHeader: ()=>void;
  scrollToBody: ()=>void;
  scrollToFooter: ()=>void;
  headerRef: React.RefObject<HTMLDivElement>
}

const HomeHeader: React.FC<HomeHeaderProps> = ({scrollToHeader, scrollToBody, scrollToFooter, headerRef}) =>{

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="homeHeader" ref={headerRef}>
          
          
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="group-headerButton">
         <HeaderButton  targetRef={scrollToHeader} text='Ínicio'  />
         <HeaderButton targetRef={scrollToBody} text='Sobre'/>
         <HeaderButton targetRef={scrollToFooter} text='Contato'/>
        </ul>
      </nav>
        </div>
          
    );
};

export default HomeHeader;
