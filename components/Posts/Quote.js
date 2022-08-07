import React from "react";

const Quote = ({ quote, by }) => {
  return (
    <div className="text-white">
      <p>{quote}</p>
      <p>{by}</p>
    </div>
  );
};

export default Quote;
