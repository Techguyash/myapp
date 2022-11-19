import React from "react";
import styles from "./Footer.module.css";
import List from "./List";

const Footer = () => {
  return (
    <div className={styles.container}>
      <List />
    </div>
  );
};

export default Footer;
