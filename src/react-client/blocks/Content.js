import React from "react";
import styles from "./styles/Content.css";
import RawBlockDetails from "./RawBlockDetails";
import Instructions from "./Instructions";

const Content = ({ selected }) => {
  return (
    <div className={"content"}>
      {!selected ? (
        <Instructions />
      ) : (
        <RawBlockDetails selectedBlockNum={selected} />
      )}
    </div>
  );
};

export default Content;
