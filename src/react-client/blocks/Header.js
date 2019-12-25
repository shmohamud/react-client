import React from "react";
import NetworkMetadata from './NetworkMetadata'
import PropTypes from "prop-types";
import styles from "./styles/Header.css";

function Header({ networkMetadata }) {
  return (
      <div className={"header-grid-container"}>
        <h1>Block Explorer</h1>
        <NetworkMetadata metadata={networkMetadata}/>
      </div>
  );
}

Header.propTypes = {
  networkMetadata: PropTypes.object.isRequired
};

export default Header;
