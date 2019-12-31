import React from "react";
import styles from "./styles.css";
import Viewer from "../Viewer";
import Instructions from "../Instructions";

const Content = ({ selected }) => {
  return (
    <div className={"content"}>
      {!selected ? <Instructions /> : <Viewer selectedBlockNum={selected} />}
    </div>
  );
};

export default Content;
