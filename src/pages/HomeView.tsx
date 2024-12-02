import React, { useRef } from "react";
import HomeHeader from "../header/HomeHeader";
import HomeFooter from "../footer/HomeFooter";
import HomeBody from "../body/HomeBody";

const HomeView: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

 const scrollToHeader = () =>{
  window.scrollTo({ top: 0, behavior: 'smooth' });;
  }
  const scrollToBody = () =>{
    bodyRef.current?.scrollIntoView({behavior: 'smooth'});
}
const scrollToFooter = () =>{
  footerRef.current?.scrollIntoView({behavior: 'smooth'});
}

  return (
    <>
    <HomeHeader headerRef={headerRef} scrollToHeader={scrollToHeader} scrollToBody={scrollToBody} scrollToFooter={scrollToFooter}/>

        <HomeBody   bodyRef={bodyRef}/>
        <HomeFooter footerRef={footerRef}/>
    </>
  );
};

export default HomeView;
