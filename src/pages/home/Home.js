import styles from "./Home.module.css";
import { Link } from "react-router-dom";

// imgs
import timeline from "../../images/timeline.png";
import schnepf from "../../images/schnepf.jpg";
import ceremony from "../../images/ceremony.webp";
import logo from "../../images/logo.png";

export default function Home() {
  return (
    <main>
      <div className={styles.intro}>
        <h2 className={styles.heading}>We're Getting Married!</h2>
        <h3 className={styles.subheading}>
          March 8th, 2024 in Queen Creek, AZ
        </h3>
        <p className={styles.under}>
          We're excited to have you celebrate with us on our big day! <br></br>
          Please submit your RSVP by February 2, 2024
          <div className={styles.link}>
            <Link to="/rsvp">
              <button className={styles.btn}>RSVP</button>
            </Link>
          </div>
        </p>
      </div>
      <div className={styles.timeline}>
        <img
          className={styles.time}
          src={timeline}
          alt="wedding day timeline"
        />
      </div>
      <div className={styles.schnepf}>
        <div className={styles.address}>
          <img className={styles.location} src={schnepf} alt="schenpf farms" />
          <br></br>
          <img
            className={styles.ceremony}
            src={ceremony}
            alt="schenpf farms ceremony"
          />
        </div>
        <h7>
          <b>
            Ceremony and reception will be held outdoors at the Meadows at
            Schnepf farms
          </b>
          <br></br>Located at 22601 E Cloud Rd, Queen Creek, AZ 85142
        </h7>
      </div>
    </main>
  );
}
