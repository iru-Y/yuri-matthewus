import React from "react";
import "./HomeFooter.css";

interface HomeFooterProps {
  footerRef: React.RefObject<HTMLDivElement>
}

const HomeFooter: React.FC<HomeFooterProps> = ({footerRef}) => {
  return (
    <div className="home-footer" ref={footerRef}>
      <p style={{ paddingBottom: "73px", fontSize: "25px" }}>Contato: </p>
      <p style={{ paddingBottom: "30px" }}>
        É um recrutador ou um cliente com um projeto em mente? Entra em contato!
      </p>
      <p>yuri_matteus@hotmail.com</p>
      <div className="social">
        <a href="https://www.instagram.com/iruy1997/">
          <img
            src="instagram.png"
            alt=""
            style={{ width: "19px", height: "19px" }}
          />
        </a>

        <a href="https://wa.me/5599988064325?text=">
          <img
            src="whatsapp.png"
            alt=""
            style={{ width: "19px", height: "19px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/yuri-matthewus-147584224/">
          <img
            src="linkedin.png"
            alt=""
            style={{ width: "19px", height: "19px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default HomeFooter;
