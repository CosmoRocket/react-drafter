import React, { Component } from 'react';
import './App.css';
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class App extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {
    const { editorState } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Drafter</h1>
        </header>
        <div className="editor">
          <Editor
            editorState={ editorState }
            toolbarClassName="toolbar-editor"
            wrapperClassName="wrapper-editor"
            editorClassName="editor-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
