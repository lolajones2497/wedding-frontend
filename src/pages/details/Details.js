import { Link } from "react-router-dom";
import { useState } from "react";
import DetailsDropdown from "./DetailsDropdown";

// styles
import styles from "./Details.module.css";
import logo from "../../images/logo.png";

export const QnA = [
  {
    question: "When & Where?",
    answer:
      "March 8, 2024 at 5pm. Please arrive at 4:30pm to leave time for parking and walking into the venue. The home page includes a detail itinerary for the day. The ceremony and reception will be held outdoors at the Meadows at Schnepf farms. Located at 22601 E Cloud Rd, Queen Creek, AZ 85142",
  },
  {
    question: "What Should I Wear?",
    answer: "Wear something dressy but casual!",
  },
  {
    question: "Will there be food?",
    answer:
      "Yes! There will be the option between a grilled italian herb chicken entree versus a roasted pork tenderloin entree. When you RSVP, please let us know which entree you prefer!",
  },
  {
    question: "Kids?",
    answer:
      "Yes, children are welcome to attend. Please add them to your RSVP submission. ",
  },
  {
    question: "Can I make a speech?",
    answer:
      "If you'd like to make a special speech, please contact Lola or Curt directly before the wedding. ",
  },
  {
    question: "Coming from out fo the state?",
    answer:
      "We really appreciate you traveling to join us! The closest hotel near the venue is the Hampton Inn in Queen Creek. It is roughly a 15 minute drive from the venue. If you need help with reservation contact Curt or Lola! ",
  },
];

export default function Details() {
  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className={styles.wrapper}>
        <h13 className={styles.intop}>Details</h13>
        <div className={styles.drop}>
          {QnA.map((item, index) => (
            <DetailsDropdown
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
