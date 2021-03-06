import React from "react";

import ComponentWrapper from "../hoc/ComponentWrapper";
import classes from "../../css/Layout.module.css";

const Layout = props => (
  <ComponentWrapper>
    <main className={classes.Content}>{props.children}</main>
  </ComponentWrapper>
);

export default Layout;
