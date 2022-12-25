import Image from "next/image";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={`${styles.home}`} id="home">
      <div className={styles["home-content"]}>
        <div className={styles.text}>
          <div className={styles.discount}>
            <Image
              width={32}
              height={32}
              src={"/Images/discount.png"}
              alt="discount"
            />
            <p>
              <span>20%</span> DISCOUNT FOR
              <span> 1 MONTH </span>ACCOUNT
            </p>
          </div>

          <div className={styles.heading}>
            <h1>
              The Next <br className={styles["generation-line__break"]} />
              <span>Generation</span>
            </h1>
            <div className={styles["get-started"]}>
              <Image
                src={"/Images/get-started.png"}
                alt="Get Started"
                width={140}
                height={140}
              />
            </div>
          </div>

          <h1 className={styles["payment-method"]}>Payment Method.</h1>

          <p className={styles.content}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>

        <div className={styles.image}>
          <Image
            src={"/Images/robot.png"}
            alt="Robot Hand"
            width={669}
            height={674}
          />
          <div className={styles["pink-gradient"]}></div>
          <div className={styles["white-gradient"]}></div>
          <div className={styles["blue-gradient"]}></div>
        </div>
      </div>

      <div className={styles["get-started__bahir"]}>
        <Image
          src={"/Images/get-started.png"}
          alt="Get Started"
          width={140}
          height={140}
        />
      </div>

      <div className={styles.features}>
        <div>
          <h1>3800+</h1>
          <p>User Active</p>
          <div />
        </div>

        <div>
          <h1>230+</h1>
          <p>TRUSTED BY COMPANY</p>
          <div />
        </div>

        <div>
          <h1>$230M+</h1>
          <p>TRANSACTION</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
