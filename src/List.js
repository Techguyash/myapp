import React from "react";
import styles from "./List.module.css";

const List = ({ singleData, deleteHandler }) => {
  return (
    <div className={styles.list}>
      <div className={styles["content"]}>{singleData.value}</div>
      <div className={styles["delete"]}>
        <span
          className="material-symbols-outlined"
          onClick={() => {
            deleteHandler(singleData.id);
          }}
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default List;
