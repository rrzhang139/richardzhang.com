import React from "react";

const LandingContainer = ({ children, style, classnames = "" }) => {
  return (
    <div
      className={`max-w-xl p-4 mx-auto space-y-8 ${classnames}`}
      style={(style, { fontFamily: "Nanum Myeongjo, serif" })}
    >
      {children}
    </div>
  );
};

export default LandingContainer;
