import { Link } from "react-router-dom";

// styles
import styles from "./Registry.module.css";
import logo from "../../images/logo.png";
import theknot from "../../images/theknot.png";
import target from "../../images/targetlogo.png";

export default function Registry() {
  return (
    <main>
      <div className={styles.contain}>
        <h5 className={styles.top}>Registry</h5>
        <h4 className={styles.story}>
          We're looking forward to celebrating with you on our big day! Having
          you attend our wedding is already a great gift. However, if you're
          looking for wedding gift ideas, we've registered at target and with
          the Knot for a honeymoon fund.
        </h4>
        <h4 className={styles.story}>
          We've lived together for a while now and did things a little out of
          the traditional order, so we put together a few things that we still
          need to complete our home.
        </h4>
      </div>
      <div className={styles.registry}>
        <a href="https://www.target.com/gift-registry/gift-giver?registryId=efa11810-0169-11ee-b578-19ac8d8b9913&type=WEDDING&clkid=dd6eb267N8df011eda4ea8f74d8940f0e&cpng=PTID1&lnm=81938&afid=The%20Knot%2C%20Inc%20and%20Subsidiaries&ref=tgt_adv_xasd0002">
          <img className={styles.target} src={target}></img>
        </a>
        <a href="https://registry.theknot.com/lola-jones-april-2024-az/58354733">
          <img className={styles.knot} src={theknot}></img>
        </a>
      </div>
    </main>
  );
}
