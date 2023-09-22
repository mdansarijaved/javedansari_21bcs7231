import Image from "next/image";
import styles from './blogcontent.module.css';

const CreatedBy = ({ uid }) => {

  let day = new Date().getUTCDate();
  let month = new Date().getUTCMonth();
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
      <span className={styles.uid}>{uid} </span>
      <span className={styles.dot}></span>
      <span className={styles.date}>{day}/{month}/{year}</span>
    </div>
  );
}

export default CreatedBy;