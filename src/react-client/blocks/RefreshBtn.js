import React from "react";

const RefreshBtn = ({refresh}) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <button onClick={refreshPage}>R E F R E S H </button>
    </div>
  );
};

export default RefreshBtn;
