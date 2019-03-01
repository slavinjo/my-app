import React, { Component, Fragment } from "react";
import Sidebar from "../src/components/layout/Sidebar";
import Layout from "../src/components/layout/Layout";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    const divStyle = {
      margin: '100px',
      border: '5px solid pink',
      display:'inline',
      background: 'lightblue no-repeat fixed center', 
      position:'absolute'
    };

    return (
      <Fragment>
        <Layout>
          <Sidebar />
          <Header title="naslov" />
          
        </Layout>
      </Fragment>
    );
  }
}

export default App;
