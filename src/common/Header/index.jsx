import React, {useState} from "react";
import Metadata from '../../chain/Metadata';
import styles from "./styles.css";

function Header({ chainMetadata}) {
  const [isChecked, toggleChecked ] = useState(false)
  const toggle = () => {
    toggleChecked(!isChecked)
  }
  return (
      <div className={"header-grid-container"}>
        <h1> Block Explorer </h1>
        <Metadata checked={isChecked} toggle={()=>toggle()} metadata={chainMetadata}/>
      </div>
  );
}

export default Header;
