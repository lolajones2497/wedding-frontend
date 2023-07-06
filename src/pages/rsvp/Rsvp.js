import { useState } from "react";
import axios from "axios";

// styles
import styles from "./Rsvp.module.css";
import "./loadingSpinner.css";

export default function Rsvp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState(false);
  const [notAttending, setNotAttending] = useState(false);
  const [address, setAddress] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [notes, setNotes] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [secondNotification, setSecondNotification] = useState(false);
  const [thirdNotification, setThirdNotification] = useState(false);
  const [fifthNotification, setFifthNotification] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log({
        firstName,
        lastName,
        email,
        attending,
        address,
        guestCount,
        notes,
      });
      const axiosConfig = {
        method: "post",
        url: "https://dcimjk655c.execute-api.us-west-2.amazonaws.com/production/rsvp",
        data: {
          firstName,
          lastName,
          email,
          attending,
          address,
          guestCount,
          notes,
        },
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      };
      const response = await axios(axiosConfig);
      console.log(response.data, response.status);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowSuccessMessage(true);
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFirstBlur = () => {
    if (firstName === "") {
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  };

  const handleSecondBlur = () => {
    if (lastName === "") {
      setSecondNotification(true);
    } else {
      setSecondNotification(false);
    }
  };

  const handleThirdBlur = () => {
    if (email === "") {
      setThirdNotification(true);
    } else {
      setThirdNotification(false);
    }
  };

  const handleFifthBlur = () => {
    if (guestCount === "") {
      setFifthNotification(true);
    } else {
      setFifthNotification(false);
    }
  };

  const handleAttendingChange = (e) => {
    setAttending(e.target.checked);
    if (e.target.checked) {
      setNotAttending(false);
    }
  };

  const handleNotAttendingChange = (e) => {
    setNotAttending(e.target.checked);
    if (e.target.checked) {
      setAttending(false);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.top}>RSVP</h2>
        <p className={styles.story}>
          Please let us know if you can make it by February 2, 2024
        </p>
        <div className={styles.names}>
          <div className={styles.align}>
            <label>
              <span>First Name:</span>
              <input
                required
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                onBlur={handleFirstBlur}
                value={firstName}
              />
              {showNotification && (
                <p className={styles.notification}>First name required</p>
              )}
            </label>
          </div>
          <div className={styles.align}>
            <label>
              <span>Last Name:</span>
              <input
                required
                type="textarea"
                onChange={(e) => setLastName(e.target.value)}
                onBlur={handleSecondBlur}
                value={lastName}
              />
              {secondNotification && (
                <p className={styles.notification}>Last name required</p>
              )}
            </label>
          </div>
        </div>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleThirdBlur}
            value={email}
          />
          {thirdNotification && (
            <p className={styles.notification}>Email required</p>
          )}
        </label>
        <label>
          <span className={styles.small}> Address:</span>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </label>

        <div className={styles.format}>
          <label>
            <span>Will you be attending? </span>
            <h3>Yes or no</h3>
          </label>
          <div className={styles.attend}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                onChange={handleAttendingChange}
                value={attending}
                className={styles.box}
                name="Attending"
              />{" "}
              <div className={styles.yes}>Yes</div>
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                onChange={handleNotAttendingChange}
                value={notAttending}
                className={styles.box}
                name="Not Attending"
              />
              <div className={styles.no}>No</div>
            </label>
          </div>
        </div>
        <label>
          <span>How many will be joining you?</span>
          <h3 className="required">(Please provide a guest count)</h3>
          <input
            required
            type="text"
            onChange={(e) => setGuestCount(e.target.value)}
            onBlur={handleFifthBlur}
            value={guestCount}
          />
          {fifthNotification && (
            <p className={styles.notification}>Guest count required</p>
          )}
        </label>
        <label>
          <span className={styles.small}>Please list your entree choice:</span>
          <h3 className="required">
            Please chose between the italian herb chicken breast <b>or</b>{" "}
            roasted pork tenderloin. Each entree will be include a side salad
            and 3 sides.{" "}
          </h3>
          <textarea
            type="textarea"
            required
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            className={styles.textbox}
          />
        </label>

        <div className={styles.load}>
          {submitError ? (
            <button disabled className={styles.btnFail}>
              Failed to Submit
            </button>
          ) : isLoading || showSuccessMessage ? null : (
            <button
              className={`${styles.btn} ${isLoading ? styles.loading : null}`}
              type="submit"
              disabled={isLoading || showSuccessMessage}
            >
              <div className={styles.loaded}>Submit</div>
            </button>
          )}

          {isLoading ? (
            <div class="lds-heart">
              <div></div>
            </div>
          ) : null}
          {showSuccessMessage && (
            <p className={styles.successMessage}>
              Thank you, your submission was successful!
            </p>
          )}
        </div>
      </form>
    </main>
  );
}
