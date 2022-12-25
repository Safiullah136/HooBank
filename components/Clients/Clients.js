import Image from "next/image";
import styles from "./Clients.module.css";
import ClientsList from "./ClientsList";

const Clients = () => {
  return (
    <div className={`${styles.clients} section-padding`}>
      <div className={styles["blue-shadow"]} />

      <div className={styles.desc}>
        <h1>What people are saying about us</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <ClientsList />

      <div className={styles["company-logos"]}>
        <Image
          src={"/Images/airbnb.png"}
          width={192.25}
          height={60}
          alt="airbnb"
        />
        <Image
          src={"/Images/binance.png"}
          width={192.25}
          height={60}
          alt="binance"
        />
        <Image
          src={"/Images/coinbase.png"}
          width={192.25}
          height={60}
          alt="coinbase"
        />
        <Image
          src={"/Images/dropbox.png"}
          width={192.25}
          height={60}
          alt="dropbox"
        />
      </div>

      <div className={styles["get-started"]}>
        <div className={styles["get-started__desc"]}>
          <h1>Let’s try our service now!</h1>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Clients;
