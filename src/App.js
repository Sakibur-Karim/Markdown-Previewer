import React from "react";
import Badge from "react-bootstrap/Badge";

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          
          <div className="row mt-4 pb-4">
            <div className="col text-center">
              <h1>Markdown Previewer</h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h1>
                  <Badge>Markdown Input</Badge>
                </h1>
                <div className="mark-input">
                  <textarea className="input"></textarea>
                </div>
              </div>
              <h2>Lorem Ipsum</h2>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h1>
                  <Badge>Preview</Badge>
                </h1>
              </div>
              <h2>Lorem Ipsum</h2>
            </div>

          </div>
        </div>
      </div>
    )
  }
}