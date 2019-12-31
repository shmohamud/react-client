import React from "react";

const RefreshBtn = ({refresh}) => {
  return (
    <div>
      <button onClick={()=>refresh()}>R E F R E S H</button>
    </div>
  );
};

export default RefreshBtn;
