import React from "react";
import Metadata from '../Metadata'
import styles from "./styles.css";

function Header({ chainMetadata }) {
  return (
      <div className={"header-grid-container"}>
        <h1>Block Explorer</h1>
        <Metadata metadata={chainMetadata}/>
      </div>
  );
}

export default Header;
