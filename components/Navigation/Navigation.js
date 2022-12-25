import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.nav} section-padding`}>
      <nav>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src={"/Images/logo.png"}
              alt="HooBank Logo"
              width={32}
              height={32}
            />
            <h1>
              Hoo<span>Bank</span>
            </h1>
          </div>
        </Link>

        <div className={styles["nav-links"]}>
          <ul>
            <li>
              <a href={"#home"}>Home</a>
            </li>
            <li>
              <a href={"#features"}>Features</a>
            </li>
            <li>
              <a href={"#product"}>Product</a>
            </li>
            <li>
              <a href={"#clients"}>Clients</a>
            </li>
          </ul>
        </div>

        <div className={styles["mobile-nav"]}>
          <Image
            src={`/Images/${isOpen ? "close" : "menu"}.svg`}
            width={28}
            height={28}
            onClick={() => {
              setIsOpen((prevState) => !prevState);
            }}
          />
          <div
            className={`${styles["mobile-nav__links"]} ${
              isOpen ? styles["open"] : ""
            }`}
          >
            <ul>
              <li>
                <a href={"#home"}>Home</a>
              </li>
              <li>
                <a href={"#features"}>Features</a>
              </li>
              <li>
                <a href={"#product"}>Product</a>
              </li>
              <li>
                <a href={"#clients"}>Clients</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
