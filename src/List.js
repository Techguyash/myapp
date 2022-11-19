import React from "react";
import styles from "./List.module.css";

const List = (props) => {
  return (
    <div className={styles.list}>
      <div className={styles["content"]}>{props.txt}</div>
      <div className={styles["delete"]}>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default List;
