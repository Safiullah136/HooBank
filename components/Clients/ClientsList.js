import ClientItem from "./ClientItem";
import styles from "./ClientsList.module.css";

const ClientsList = () => {
  return (
    <div className={styles["clients-list"]}>
      <ClientItem
        isBg={true}
        client="Herman Jensen"
        post="Founder & Leader"
        text="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
      />
      <ClientItem
        isBg={false}
        client="Steve Mark"
        post="Founder & Leader"
        text="Money makes your life easier. If you're lucky to have it, you're lucky."
      />
      <ClientItem
        isBg={false}
        client="Kenn Gallagher"
        post="Founder & Leader"
        text="It is usually people in the money business, finance, and international trade that are really rich."
      />
    </div>
  );
};

export default ClientsList;
