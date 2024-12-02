import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <>
      <div className="container">

        <div className="wrapper">
          <div className="my-name">
            <img src="/profile-arrow.svg" alt="Seta de perfil" />
            <p>Olá! Eu sou </p>
            <p style={{ color: "#7127BA" }}>Yuri Matthewus</p>
          </div>

          <div className="profile">
            <img
              src="/eu.png"
              alt="Foto de Yuri"
              style={{ width: "268px", height: "268px" }}
            />

            <div className="professional">
              <p className="profession-title">
                Programadores e artistas
              </p>
              <span className="profession-text">
                São os únicos profissionais que têm como{" "}
                <span
                  className="hobby-circle"
                  style={{
                    backgroundImage: `url(${'/circula.svg'})`,
                    width: "1000px",
                    height: "1000px",
                  }}
                >
                  HOBBY
                </span>
              </span>

              <p className="profession-subtitle">a própria profissão.</p>
            </div>
          </div>

          <div className="who">
            <span>
              Full Stack developer e mobile.<span className="blink">|</span>{" "}
            </span>
            <p>Atualmente trabalhando como freelancer.</p>
          </div>

          <div className="about-me">
            <p>
              Resolvendo problemas da área da tecnologia. Sites bonitos,
              aplicativos perfomáticos e servidores de alta escalabilidade.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;

