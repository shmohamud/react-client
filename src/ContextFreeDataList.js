import React from 'react'

const ContextFreeDataList = ({ data }) => {
  return <div>{data.length ? data : "[]"}</div>;
};

export default ContextFreeDataList
