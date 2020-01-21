import React from "react";
import styles from "./styles.css";

const Checkbox = ({
  handleCheck,
  isChecked,
  labelTextChecked,
  labelTextUnchecked,
  item
}) => {
  let labelText = "";
  isChecked ? (labelText = labelTextChecked) : (labelText = labelTextUnchecked);
  return (
    <label>
      {labelText}
      <input type="checkbox" />
      <span className="checkmark" onClick={(_i) => handleCheck(item)} />
    </label>
  );
};

export default Checkbox;
