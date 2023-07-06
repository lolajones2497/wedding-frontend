import { Link } from "react-router-dom";

// Styles
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <a href="/" className={styles.logo}>
          Curt & Lola
        </a>
        <ul>
          <li>
            <Link to="/story" className={styles.other}>
              Origin Story
            </Link>
          </li>
          <li>
            <Link to="/details" className={styles.other}>
              Details
            </Link>
          </li>
          <li>
            <Link to="/registry" className={styles.other}>
              Registry
            </Link>
          </li>
          <li>
            <Link to="/rsvp" className={styles.rsvp}>
              RSVP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
