import React, { Component, Fragment } from "react";
import Sidebar from "../src/Layout/Sidebar";
import Layout from "../src/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <p>Test</p>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
