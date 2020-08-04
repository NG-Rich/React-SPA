import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => (
  <div className="text-center p-10 flex-auto">
    {props.children}
  </div>
)

export { Layout, Nav, Footer };