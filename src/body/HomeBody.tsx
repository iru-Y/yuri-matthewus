import styles from  "./HomeBody.module.css";
import ProfileSection from "../sections/ProfileSection";
import WorkSection from "../sections/WorkSection";
import LookingFor from "../sections/LookingFor";

interface HomeBodyProps {
  bodyRef: React.RefObject<HTMLDivElement>;
}

const HomeBody: React.FC<HomeBodyProps> = ({ bodyRef }) => {
  return (
      <div className={styles.homeBody}>
        <div className ={styles.container} >
        <ProfileSection />

        <WorkSection bodyRef={bodyRef} />
        <LookingFor/>
           </div > 
         </div>
  );
};

export default HomeBody;
