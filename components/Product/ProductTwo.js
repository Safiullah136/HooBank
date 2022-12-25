import Image from "next/image";
import styles from "./ProductTwo.module.css";

function ProductTwo() {
  return (
    <div className={`${styles.product} section-padding`}>
      <div className={styles["product-desc"]}>
        <h1>Find a better card deal in few easy steps.</h1>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button>Get Started</button>
      </div>

      <div className={styles["product-image"]}>
        <Image
          src={"/Images/product2-image.png"}
          alt="Product Image"
          width={513}
          height={449}
        />
      </div>
    </div>
  );
}

export default ProductTwo;
