import styles from "./Details.module.css";
import { useState } from "react";

export default function DetailsDropdown(props) {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.top}>
        <p onClick={handleOpen} className={styles.ques}>
          {question}
          <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
        </p>
      </div>
      <div>{isOpen && <p className={styles.ans}>{answer}</p>}</div>
    </div>
  );
}
