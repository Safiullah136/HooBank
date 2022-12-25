import Image from "next/image";
import styles from "./ProductOne.module.css";

function ProductOne() {
  return (
    <div className={`${styles.product} section-padding`}>
      <div className={styles["product-image"]}>
        <Image
          src="/Images/product1-image.png"
          width={530}
          height={455}
          alt="Product Image"
        />
        <div className={styles["white-shadow"]} />
        <div className={styles["pink-shadow"]} />
      </div>

      <div className={styles["product-desc"]}>
        <h1>Easily control your billing & invoicing.</h1>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={styles["product-desc__buttons"]}>
          <Image
            src={"/Images/app-store.svg"}
            width={129}
            height={42}
            alt="Download on the App Store"
          />
          <Image
            src={"/Images/google-play.svg"}
            width={144}
            height={43}
            alt="Get it on Google Play"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductOne;
