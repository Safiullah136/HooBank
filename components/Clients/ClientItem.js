import Image from "next/image";
import styles from "./ClientItem.module.css";

const ClientItem = (props) => {
  const { isBg } = props;
  return (
    <div
      className={`${styles["client"]} ${
        isBg ? styles["client-background"] : ""
      }`}
    >
      <Image src={"/Images/“.svg"} width={42.6} height={27.6} />
      <p>{props.text}</p>
      <div className={styles["client-info"]}>
        <Image
          src={`/Images/${props.client}.png`}
          width={48}
          height={48}
          alt={props.client}
        />
        <div className={styles["client-name"]}>
          <h3>{props.client}</h3>
          <p>{props.post}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientItem;
