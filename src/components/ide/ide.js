import React, { Component } from 'react'
import '../../css/ide.css'
import Select from 'react-select'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/theme-terminal'
import { ButtonToolbar, Button, Spinner, Table } from 'react-bootstrap'

const request = require('request')

class IDE extends Component{
  modes = [{value: "c_cpp", label: "C/C++", language: "cpp17", versionIndex: 0}, {value: "java", language: "java", label: "Java", versionIndex: 3}, {value: "python", label: "Python3", language: "python3", versionIndex: 3}]
  selected = 0
  constructor(props){
    super(props)
    this.state = {
      script : ``,
      theme : "monokai",
      mode : this.modes[this.selected].value,
      stdin : ``,
      stdout : ``,
      executing : false,
    }
  }

  onModeChange = selectedOption => {
    this.selected = this.modes.indexOf(selectedOption)
    this.setState({mode: selectedOption.value})
  }

  onScriptChange = newScript => this.setState({script: newScript})
  onStdInChange = event => this.setState({stdin: event.target.value})
  onClear = () => this.setState({script: ``})
  onRun = () => {
    this.setState({executing: true, stdout: `Compiling and Executing your program...`})
    //console.log(this.state)
    request({
      url: 'https://codered-web-server.herokuapp.com/api/execute',
      method: "POST",
      json: {
        script: this.state.script,
        language: this.modes[this.selected].language,
        versionIndex: this.modes[this.selected].versionIndex,
        stdin: this.state.stdin
      }
    }, (error, response, body) => {
      if(response)
        this.setState({stdout: response.body.output || ``, executing: false})
    })
  }

  render() {
    return(
      <div className = "ide bottomPadding" id = "ide">
        <div className = "center bottomPadding">
          <span style = {{color: "#ffffff"}}>Select Language:</span> <Select
            className = "inline langSelect"
            name = "mode"
            placeholder = {this.modes[this.selected].label}
            value = {this.state.mode}
            onChange = {this.onModeChange}
            options = {this.modes}
            isSearchable = {false}
            />
          <AceEditor
            className = "editor"
            mode = {this.state.mode}
            theme = {this.state.theme}
            fontSize = {14}
            height = '300px'
            width = '50%'
            tabSize = {2}
            setOptions = {{
              enableBasicAutocompletion : true,
              enableLiveAutocompletion : true
            }}
            value = {this.state.script}
            onChange = {this.onScriptChange}
          />
          <ButtonToolbar className = "btnBar">
            {this.state.executing ? <Spinner animation = "grow" variant = "danger"/>:
              <Button className = "actions" id = {this.state.executing?"running":"run"} type = "button" disabled = {this.state.executing} onClick = {this.onRun}>{this.state.executing?"Running...":"Run"}</Button>}
            <Button className = "actions" id = "clear" type = "button" onClick = {this.onClear}>Clear</Button>
          </ButtonToolbar>
        </div>
        <Table className="center wd65" borderless>
          <thead><tr>
            <th>StdIn</th>
            <th>StdOut</th>
          </tr></thead>
        </Table>
        <div className = "IO center wd65">
          <div className = "center inline wd50">
            <textarea className = "inp noLeftBorder" placeholder = " Enter custom input" value = {this.state.stdin} onChange = {this.onStdInChange} />
          </div>
          <div className = "center inline wd50">
            <textarea className = "out noRightBorder" placeholder = " Run to generate output" value = {this.state.stdout} readOnly = {true} />
          </div>
        </div>
      </div>
    )
  }
}

export default IDE