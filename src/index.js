import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./styles.css";
//window.$ = $;
//import  "jquery-ui-bundle"
//import 'jquery-ui-bundle/jquery-ui.css';

//window.$ = $;
//window.jQuery = $;
require("../react-gridstack/gs");

import { GridStack, GridStackItem } from "../react-gridstack";


class MyGrid extends React.Component {
  componentDidMount() {
    $(".newWidget").draggable({
      revert: "invalid",
      scroll: false,
      appendTo: "body",
      helper: "clone"
    });
  }

  render() {
    return (
      <GridStack 
        cellHeight={50} 
        verticalMargin={10} 
        acceptWidgets=".newWidget"/*
        removable={true}*/>
        <GridStackItem id="item_1" x={0} y={0} minHeight={2} minWidth={2}>
          <div>First Item</div>
        </GridStackItem>
        <GridStackItem id="item_2" x={2} y={2}>
          <div>Second Item</div>
        </GridStackItem>
      </GridStack>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyGrid />
      <div className="d-block" style={{ maxWidh: 200 }}>
        <div className="col-sm-2 d-none d-md-block">
          <div className="newWidget grid-stack-item">
            <div className="row0 text-center grid-stack-item-content">
              <div className="col0">
                <div className="counter">
                  <i className="fa fa-code fa-2x" />
                  <h2
                    className="timer count-title count-number"
                    data-to="100"
                    data-speed="1500"
                  >
                    2300
                  </h2>
                  <p className="count-text ">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
