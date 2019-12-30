import React from "react";
import ChainMetadata from './ChainMetadata'
import PropTypes from "prop-types";
import styles from "../styles/Header.css";

function Header({ chainMetadata }) {
  return (
      <div className={"header-grid-container"}>
        <h1>Block Explorer</h1>
        <ChainMetadata metadata={chainMetadata}/>
      </div>
  );
}

export default Header;
