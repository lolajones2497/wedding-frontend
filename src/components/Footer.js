import { Link } from "react-router-dom";

// styles
import styles from "./Footer.module.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img className={styles.logo} src={logo} alt="C and L logo" />
      </div>
      <div className={styles.right}>
        <p className={styles.questions}>Have any questions?</p>
        <p className={styles.answer}>
          Check the{" "}
          <Link to="/details" className={styles.faq}>
            details{" "}
          </Link>
          page!
        </p>
      </div>
    </footer>
  );
}
