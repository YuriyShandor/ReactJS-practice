import './scss/style.scss';

import React from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./js/helloWorld.jsx";
import HelloUser from "./js/helloUser.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <HelloWorld />
        <HelloUser />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
