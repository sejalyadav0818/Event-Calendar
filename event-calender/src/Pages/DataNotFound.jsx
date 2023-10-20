import React from "react";
import datanotFound from "../assets/images/errr.png"
const DataNotFound = () => {
  return (
    <div>
      {" "}
      <img
        src={datanotFound}
        className="h-auto max-w-lg mx-auto"
        alt="Data Not Found"
      />
    </div>
  );
};

export default DataNotFound;
