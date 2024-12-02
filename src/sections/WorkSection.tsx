import React from 'react';
import WorkExperience from '../components/cards/WorkExperience';
import './WorkSection.css'

interface WorkSectionProps {
     bodyRef: React.RefObject<HTMLDivElement>;
}

const WorkSection: React.FC<WorkSectionProps> = ({bodyRef}) => {
  return (
    <div className="work-section" ref={bodyRef}> 
         <p >Experiência</p>

         <div className='grid-word'>

         <WorkExperience img={'/zoe-express.svg'}
        ptext={'Zoé Express'}
        stext={'Soluções personalizadas para entregas rápidas e confiáveis.'}
        />
   <WorkExperience img={'/agnusdei.png'}
        ptext={'Rede Agnus Dei'}
        stext={'Fundada em 2017, a Agnus Dei é uma empresa inovadora no setor da moda e utilidades, conhecida por seus produtos de alta qualidade e valor acessível. Começamos humildemente em uma pequena loja no Bravo e, após apenas dois meses, mudamos para Salvador devido ao rápido crescimento e à crescente demanda por nossos produtos inovadores. Hoje, com mais de 20 lojas estrategicamente localizadas na Bahia e no Espírito Santo, a Agnus Dei se destaca como uma marca de confiança e prestígio no mercado.'}
        />
   <WorkExperience img={'/draftmaster.jpg'}
        ptext={'Draft Master'}
        stext={'O aplicativo DraftMaster foi desenvolvido para ajudar coachs e jogadores a ter um melhor desempenho em suas partidas, pois ele oferece uma simulação em tempo real de uma partida antes mesmo dela acontecer, mostrando contra quem seu personagem é forte, fraco ou tem combo com seu time.'}
        />
   <WorkExperience img={'/alphaTv.png'}
        ptext={'Alpha Tv'}
        stext={'Aplicativo móvel para streaming de filmes e séries, com mais de 1000 canais, séries e filmes. Seu layout adaptável se ajusta tanto para celular quanto para tv box. Assista o que quiser e aonde quiser sem complicações.'}
        />
         </div>
    </div>
  );
};

export default WorkSection;
