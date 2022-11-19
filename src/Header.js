import React, { useState } from "react";
import "./Header.css";

const Header = () => {
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
    } else {
      console.log("not ok");
      setError(true);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          className="todo"
          value={value}
          onChange={inputHandler}
        />
        {error && <p style={{ color: "white" }}>Invalid Text</p>}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Header;
