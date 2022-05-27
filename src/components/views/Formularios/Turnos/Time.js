import React from "react";

const Time = ({ hora }) => {
  return <option value={String(hora)}>{hora}</option>;
};

export default Time;
