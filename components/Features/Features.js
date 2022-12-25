import Image from "next/image";
import styles from "./Features.module.css";

function Features() {
  return (
    <div className={`${styles.features} section-padding`} id="features">
      <div className={styles["features-desc"]}>
        <h1>You do the business, we’ll handle the money.</h1>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button>Get Started</button>
      </div>

      <div className={styles["features-list"]}>
        <div className={styles["feature-item"]}>
          <div className={styles["feature-item__image"]}>
            <Image
              src={"/Images/Star.png"}
              alt="Rewards"
              width={38.4}
              height={38.4}
            />
          </div>
          <div>
            <h3>Rewards</h3>
            <p>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>

        <div
          className={`${styles["feature-item"]} ${styles["feature-item__background"]}`}
        >
          <div className={styles["feature-item__image"]}>
            <Image
              src={"/Images/Shield Done.png"}
              alt="100% Secured"
              width={38.4}
              height={38.4}
            />
          </div>
          <div>
            <h3>100% Secured</h3>
            <p>
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>

        <div className={styles["feature-item"]}>
          <div className={styles["feature-item__image"]}>
            <Image
              src={"/Images/Send.png"}
              alt="Balance Transfer"
              width={38.4}
              height={38.4}
            />
          </div>
          <div>
            <h3>Balance Transfer</h3>
            <p>
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
