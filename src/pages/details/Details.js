import { Link } from "react-router-dom";
import { useState } from "react";
import DetailsDropdown from "./DetailsDropdown";

// styles
import styles from "./Details.module.css";
import logo from "../../images/logo.png";

export const QnA = [
  {
    question: "When?",
    answer:
      "The wedding will take place on March 8, 2024, at 5:00 PM. We kindly request that you arrive at 4:30 PM to allow ample time for parking and walking into the venue. For a detailed itinerary of the day's events, please refer to the home page. ",
  },
  {
    question: "Where?",
    answer:
      "The ceremony and reception will take place outdoors at the Meadows at Schnepf Farms, a venue nestled among the serene pine trees, located at 22601 E Cloud Rd, Queen Creek, AZ 85142.",
  },
  {
    question: "What Should I Wear?",
    answer: "Wear something dressy but casual!",
  },
  {
    question: "Will there be food?",
    answer:
      "Yes! We offer a choice between a grilled Italian herb chicken entree and a roasted pork tenderloin entree. When you RSVP, please let us know which entree you prefer!",
  },
  {
    question: "Kids?",
    answer:
      "Yes, children are welcome to attend. Please remember to include them in your RSVP submission. ",
  },
  {
    question: "Can I make a speech?",
    answer:
      "If you'd like to make a special speech, please reach out to Lola or Curt directly before the wedding. ",
  },
  {
    question: "Coming from out of the state? ",
    answer:
      "We truly appreciate you traveling to join us! The Hampton Inn in Queen Creek is the closest hotel to the venue, located approximately a 15-minute drive away. If you need any assistance with reservations, please feel free to reach out to Curt or Lola! ",
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
