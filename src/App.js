import React, { Component, Fragment } from "react";
import Sidebar from "../src/Layout/Sidebar";
import Layout from "../src/components/layout/Layout";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Header />
          <p>Testic</p>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
