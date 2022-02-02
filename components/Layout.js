import Navbar from "./Navbar";

import React from "react";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
