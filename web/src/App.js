import React, { Component } from 'react';
import './App.css';
import { Editor } from 'react-draft-wysiwyg'
import { convertFromRaw } from 'draft-js'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// Output from sending email:

// {
//   subject: 'some string';
//   created_at: new Date(); is this necessary with mongodb / embedded timestamp?
//   content: contentState
// }

class App extends Component {
  state = {
    contentState: null
  }

  onContentStateChange = (contentState) => {
    this.setState({ contentState })
  }

  render() {
    const { contentState } = this.state
    console.log(contentState)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Drafter</h1>
        </header>
        <form
          onSubmit={ (event) => {
            event.preventDefault()
          }}
        >
          <div className="editor">
            <Editor
              onContentStateChange={this.onContentStateChange}
            />
          </div>
        </form>
        <textarea
          disabled
          value={contentState}/>
      </div>
    );
  }
}

export default App;
