// styles
import styles from "./Story.module.css";

// imgs
import imgOne from "../../images/imgOne.JPG";
import imgThree from "../../images/imgThree.JPG";
import imgFour from "../../images/imgFour.JPG";
import imgFive from "../../images/imgFive.JPG";
import imgSix from "../../images/imgSix.JPG";
import imgSeven from "../../images/imgSeven.JPG";
import imgEight from "../../images/imgEight.JPG";
import imgNine from "../../images/imgNine.JPG";
import imgTen from "../../images/imgTen.JPG";
import imgTwelve from "../../images/imgTwelve.JPG";
import imgFourteen from "../../images/imgFourteen.JPG";
import imgFifteen from "../../images/imgFifteen.JPG";
import imgSixteen from "../../images/imgSixteen.JPG";
import imgNineteen from "../../images/imgNineteen.JPG";
import imgTwenty from "../../images/imgTwenty.JPG";
import imgTwentyone from "../../images/imgTwentyone.JPG";
import imgTwentytwo from "../../images/imgTwentytwo.jpeg";
import imgTwentythree from "../../images/imgTwentythree.jpeg";
import imgTwentyfour from "../../images/imgTwentyfour.jpeg";
import imgTwentyfive from "../../images/imgTwentyfive.JPG";
import imgTwentysix from "../../images/imgTwentysix.jpeg";
import imgTwentyseven from "../../images/imgTwentyseven.JPG";
import imgTwentyeight from "../../images/imgTwentyeight.JPG";
import imgTwentynine from "../../images/imgTwentynine.JPG";
import imgThirtyone from "../../images/imgThirtyone.jpeg";
import imgThirtytwo from "../../images/imgThirtytwo.jpeg";
import imgThirtythree from "../../images/imgThirtythree.jpeg";
import imgThirtyfour from "../../images/imgThirtyfour.jpeg";
import imgThirtyfive from "../../images/imgThirtyfive.jpeg";
import imgThirtysix from "../../images/imgThirtysix.jpeg";
import imgThirtyeight from "../../images/imgThirtyeight.JPG";
import imgThirtynine from "../../images/imgThirtynine.jpeg";
import imgFortytwo from "../../images/imgFortytwo.jpeg";
import imgFortyfour from "../../images/imgFortyfour.jpeg";
import imgFortysix from "../../images/imgFortysix.JPG";
import imgFortyseven from "../../images/imgFortyseven.jpeg";
import imgFortyeight from "../../images/imgFortyeight.jpeg";
import imgFortynine from "../../images/imgForty.jpeg";
import imgFiftyone from "../../images/imgFiftyone.jpeg";
import imgFiftytwo from "../../images/imgFiftytwo.jpeg";
import imgFiftythree from "../../images/imgFiftythree.jpeg";
import imgFiftyfour from "../../images/imgFiftyfour.jpeg";
import imgFiftyfive from "../../images/imgFiftyfive.jpeg";
import imgFiftysix from "../../images/imgFiftysix.jpeg";
import imgFiftyseven from "../../images/imgFiftyseven.jpeg";
import imgFiftyeight from "../../images/imgFiftyeight.jpeg";
import imgFiftynine from "../../images/imgFiftynine.jpeg";
import imgSixtyone from "../../images/imgSixtyone.jpeg";
import imgSixtytwo from "../../images/imgSixtytwo.jpeg";
import imgSixtythree from "../../images/imgSixtythree.jpeg";
import imgSixtyfour from "../../images/imgSixtyfour.jpeg";
import imgSixtyfive from "../../images/imgSixtyfive.jpeg";
import imgSixtysix from "../../images/imgSixtysix.jpeg";
import imgSixtyseven from "../../images/imgSixtyseven.jpeg";
import imgSixtyeight from "../../images/imgSixtyeight.jpeg";
import imgSixtynine from "../../images/imgSixtynine.jpeg";

const images = [
  { photo: imgOne },
  { photo: imgThree },
  { photo: imgFour },
  { photo: imgFive },
  { photo: imgSix },
  { photo: imgSeven },
  { photo: imgEight },
  { photo: imgNine },
  { photo: imgTen },
  { photo: imgTwelve },
  { photo: imgFourteen },
  { photo: imgFifteen },
  { photo: imgSixteen },
  { photo: imgNineteen },
  { photo: imgTwenty },
  { photo: imgTwentyone },
  { photo: imgTwentytwo },
  { photo: imgTwentythree },
  { photo: imgTwentyfour },
  { photo: imgTwentyfive },
  { photo: imgTwentysix },
  { photo: imgTwentyseven },
  { photo: imgTwentyeight },
  { photo: imgTwentynine },
  { photo: imgThirtyone },
  { photo: imgThirtytwo },
  { photo: imgThirtythree },
  { photo: imgThirtyfour },
  { photo: imgThirtyfive },
  { photo: imgThirtysix },
  { photo: imgThirtyeight },
  { photo: imgThirtynine },
  { photo: imgFortytwo },
  { photo: imgFortyfour },
  { photo: imgFortysix },
  { photo: imgFortyseven },
  { photo: imgFortyeight },
  { photo: imgFortynine },
  { photo: imgFiftyone },
  { photo: imgFiftytwo },
  { photo: imgFiftythree },
  { photo: imgFiftyfour },
  { photo: imgFiftyfive },
  { photo: imgFiftysix },
  { photo: imgFiftyseven },
  { photo: imgFiftyeight },
  { photo: imgFiftynine },
  { photo: imgSixtyone },
  { photo: imgSixtytwo },
  { photo: imgSixtythree },
  { photo: imgSixtyfour },
  { photo: imgSixtyfive },
  { photo: imgSixtysix },
  { photo: imgSixtyseven },
  { photo: imgSixtyeight },
  { photo: imgSixtynine },
];

export default function Story() {
  return (
    <main>
      <div className={styles.container}>
        <h5 className={styles.top}>Origin Story</h5>
        <h4 className={styles.story}>
          The story started on a hot summer day when Curt was walking through
          the grocery store... Just kidding. It was April and Lola had no idea
          they were going on a date. When she entered the resturant she soon
          figured out that Curt infact felt the same way as her. He was wearing
          a tie and aegerly waiting to show her the world of eating sushi. Fast
          forward 7 years later and Curt purposes on their favorite hike by the
          Tonto Natural Bridge waterfall. The end.
          <br></br>
          <br></br>
          Okay, there is a lot more to that story than just that. So, here are
          some of our favorite pictures of adventures we've taken together along
          the way (somewhat in chronological order).
        </h4>
      </div>
      <div className={styles.pictures}>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={".." + image.photo}
              alt={`Image ${index}`}
              className={styles.lots}
            />
          );
        })}
      </div>
    </main>
  );
}
