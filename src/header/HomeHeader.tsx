import './HomeHeader.css'
import '../components/buttons/HeaderButton.css'
import HeaderButton from '../components/buttons/HeaderButton';
import React, {useState} from 'react'
import ProfileSection from '../sections/ProfileSection';

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
    <>
      <div className="homeHeader" ref={headerRef}>
          
          
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="group-headerButton">

        <h1 style={{textAlign: "start"}}>Este site está em construção</h1>

         <HeaderButton  targetRef={scrollToHeader} text='Ínicio'  />
         <HeaderButton targetRef={scrollToBody} text='Sobre'/>
         <HeaderButton targetRef={scrollToFooter} text='Contato'/>
        </ul>
      </nav>
          
    </div>
    
      <ProfileSection />

    </>    
    );
};

export default HomeHeader;
