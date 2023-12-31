import React from "react"
import Badge from "react-bootstrap/Badge"
import { marked } from 'marked';

export default class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      markdown: "",
    }
  }

  updateMarkdown(markdown) {
    this.setState({markdown})
  }

  render() {
    
    let inputStyle = {
      width: "600px",
      height: "auto",
      minHeight: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
      border: "2px solid blue"
    }

    let outputStyle = {
      width: "auto",
      height: "auto",
      minHeight: "50vh",
      backgroundColor: '#87b5b5',
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
    }

    return (
      <div className='App'>
        <div className='container'>
          
          <div className="row mt-4 pb-4">
            <div className="col text-center">
              <h1>Markdown Previewer</h1>
            </div>
          </div>

          <div className="row mt-4">

            <div className="col">
              <div className="col text-center">
                <h1><Badge>Input</Badge></h1>
                  <textarea 
                  style={inputStyle} 
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value)
                  }}>  
                  </textarea>
              </div>
            </div>

            <div className="col">
              <div className="col text-center">
                <h1><Badge>Output</Badge></h1>
                  <div style={outputStyle} dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}