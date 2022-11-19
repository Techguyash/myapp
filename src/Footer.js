import React from "react";
import styles from "./Footer.module.css";
import List from "./List";

const Footer = (props) => {
  return (
    <div className={styles.container}>
      {props.todo.map((data) => {
        return <List txt={data.value} />;
      })}
    </div>
  );
};

export default Footer;
