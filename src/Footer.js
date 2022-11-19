import React from "react";
import styles from "./Footer.module.css";
import List from "./List";

const Footer = (props) => {
  const deleteHandler = (id) => {
    let filteredValues = props.todo.filter((data) => {
      return data.id != id;
    });
    props.setTodo(filteredValues);
  };

  return (
    <div className={styles.container}>
      {props.todo.map((data) => {
        return <List singleData={data} deleteHandler={deleteHandler} />;
      })}
    </div>
  );
};

export default Footer;
