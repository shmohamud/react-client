import React from "react";
import styles from "./styles.css";

const Checkbox = ({
  handleCheck,
  labelText,
  item
}) => {
  return (
    <label>
      {labelText}
      <input type="checkbox" />
      <span className="checkmark" onClick={() => handleCheck(item)} />
    </label>
  );
};

export default Checkbox;
