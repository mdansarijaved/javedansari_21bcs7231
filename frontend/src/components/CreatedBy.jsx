import Image from "next/image";
import styles from './blogcontent.module.css';
import BlogMenu from "./BlogMenu";

const CreatedBy = ({ blog }) => {
  const { create_by: uid, create_time: time } = blog;

  const date = new Date(time);

  let day = date.getUTCDate();
  let month = date.getUTCMonth();
  let year = date.getUTCFullYear();
  return (
    <div className={styles.profile}>

      <div className={styles.profilelist}>
      <div className={styles.imagediv}>
        <div style={{ backgroundColor: `#${stringToSixDigitNumber(uid)}`, width: '100%', height: '100%' }}>

        </div>
      </div>

      <span className={styles.uid}>{uid} </span>
      <span className={styles.dot}></span>
      <span className={styles.date}>{day}/{month}/{year}</span>
      </div>
      <div>
        <BlogMenu/>
      </div>
    </div>
  );
}

function stringToSixDigitNumber(inputString) {
  // Calculate the hash code of the input string
  let hashCode = 0;
  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    hashCode = (hashCode << 5) - hashCode + charCode;
  }
  
  // Make sure the result is positive
  hashCode = Math.abs(hashCode);

  // Convert the hash code to a 6-digit number
  const sixDigitNumber = hashCode % 1000000;
  
  // Pad the number with leading zeros if necessary
  const sixDigitString = sixDigitNumber.toString().padStart(6, '0');

  return sixDigitString;
}

export default CreatedBy;