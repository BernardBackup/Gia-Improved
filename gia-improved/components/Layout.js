// components/Layout.js

import React from "react";
import DrawerDefault from "./Drawermob";

const Layout = ({ children, open, setOpen }) => {
  return (
    <div>
      <DrawerDefault open={open} setOpen={setOpen} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
