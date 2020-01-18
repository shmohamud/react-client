import React from "react";
import styles from "./styles.css";
const Checkbox = ({ checked, toggle, labelText }) => {
  return (
    <label>
      {labelText}
      <input type="checkbox" onChange={toggle}/>
      <span className="checkmark" />
    </label>
  );
};

export default Checkbox;
