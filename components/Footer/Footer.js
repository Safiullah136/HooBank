import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${styles.footer} section-padding`}>
      <div className={styles["footer-desc__links"]}>
        <div className={styles["footer-desc"]}>
          <Image
            src={"/Images/footer-logo.svg"}
            alt="HooBank"
            width={266}
            height={72.14}
          />
          <p>
            A new way to make the payments
            <br /> easy, reliable and secure.
          </p>
        </div>

        <div className={styles["footer-links__wrapper"]}>
          <div className={styles["footer-links"]}>
            <h4>Usefull Links</h4>
            <p>Content</p>
            <p>How it Works</p>
            <p>Create</p>
            <p>Explore</p>
            <p>Terms & Services</p>
          </div>

          <div className={styles["footer-links"]}>
            <h4>Community</h4>
            <p>Help Center</p>
            <p>Partners</p>
            <p>Suggestions</p>
            <p>Blog</p>
            <p>Newsletters</p>
          </div>

          <div className={styles["footer-links"]}>
            <h4>Partner</h4>
            <p>Our Partner</p>
            <p>Become a Partner</p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles["copyright-text"]}>
          <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        </div>

        <div className={styles["social-media"]}>
          <Image
            src={"/Images/instagram.svg"}
            alt="instagram"
            width={21}
            height={21}
          />
          <Image
            src={"/Images/facebook.png"}
            alt="facebook"
            width={21}
            height={21}
          />
          <Image
            src={"/Images/twitter.png"}
            alt="twitter"
            width={21}
            height={21}
          />
          <Image
            src={"/Images/linkedin.png"}
            alt="linkedin"
            width={21}
            height={21}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
