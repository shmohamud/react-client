import React, { useState } from "react";
import Metadata from "../../chain/Metadata";
import styles from "./styles.css";

function Header({ chainMetadata }) {
  const [isChecked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(isChecked => !isChecked);
  };
  return (
    <div className={"header-grid-container"}>
      <h1> Block Explorer </h1>
      <Metadata
        isChecked={isChecked}
        handleCheck={() => handleCheck()}
        metadata={chainMetadata}
      />
    </div>
  );
}

export default Header;
