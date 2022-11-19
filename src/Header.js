import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //

    if (value.length > 3) {
      console.log("Ok");
      setError(false);
      setError("");
    } else {
      console.log("not ok");
      setError(true);
    }
    const enteredValue = {
      value: value,
      id: Math.random().toString(),
    };
    props.setTodo((prev) => {
      return [...prev, enteredValue];
    });
  };

  return (
    <div className={styles["container"]}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          className={styles.todo}
          value={value}
          onChange={inputHandler}
        />
        {error && <p>Invalid Text</p>}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Header;
