import React, { Component } from 'react';
import './App.css';
import { Editor } from 'react-draft-wysiwyg'
import { convertFromRaw } from 'draft-js'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import { createAnnouncement } from './api/announcements'

// Output from sending email:

// {
//   subject: 'some string';
//   created_at: new Date(); is this necessary with mongodb / embedded timestamp?
//   content: contentState
// }

class App extends Component {
  state = {
    contentState: null,
    announcements: null
  }

  onContentStateChange = (contentState) => {
    this.setState({ contentState })
  }

  onCreateAnnouncement = (announcementData) => {
    createAnnouncement(announcementData)
      .then((newAnnouncement) => {
        this.setState((prevState) => {
          const updatedAnnouncements = prevState.announcements.concat(newAnnouncement)
          return {
            announcements: updatedAnnouncements
          }
        })
      })
  }

  render() {
    const { contentState, announcements } = this.state
    console.log(contentState)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Drafter</h1>
        </header>
        <form
          onSubmit={ (event) => {
            event.preventDefault()
 
            const elements = event.target.elements
            const subject = elements.subject.value
            const content = convertFromRaw(contentState)

            const announcement = {
              subject: subject,
              content: contentState
            }
          }}
        >
        <div className="subject">
          <label className='mb-2'>
            {'Subject: '}
            <input
              type='subject'
              name='subject'
            />
          </label>
        </div>
        <div className="editor">
            <Editor
              onContentStateChange={this.onContentStateChange}
            />
          </div>
          <button>SEND</button>
        </form>
        <textarea
          disabled
          value={contentState}/>

        <div>
          <h3>Announcements</h3>
          {
            announcements ? (1) : (0)
          }
        </div>
      </div>
    );
  }
}

export default App;
