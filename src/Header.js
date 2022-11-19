import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <form className="form">
        <input
          type="text"
          className="todo"
          value={value}
          onChange={inputHandler}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Header;
