import Image from "next/image";
import styles from './blogcontent.module.css';

const CreatedBy = ({ uid }) => {

 let time = new Date().getUTCDate();  
 let date = new Date().getUTCMonth();
    let year = new Date().getUTCFullYear();
    return (
      <div className={styles.profile}>
      <div className={styles.imagediv}>
        <Image
          src={"/images/hero.jpg"}
          width={200}
          height={200}
          alt="profile"
        />
      </div>
      <p className={styles.uid}>{uid} <span className={styles.dot}> . </span> <span className={styles.time}>{time}/{date}/{year}</span></p>
    </div>
    );
  }

export default CreatedBy;