import React, { Component } from 'react';
import './App.css';
import { Editor } from 'react-draft-wysiwyg'
import { convertToRaw } from 'draft-js'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import { listAnnouncements, createAnnouncement } from './api/announcements'

class App extends Component {
  state = {
    contentState: null,
    announcements: []
  }

  onContentStateChange = (contentState) => {
    this.setState({ contentState })
  }

  onCreateAnnouncement = (announcementData) => {
    createAnnouncement(announcementData)
      .then((newAnnouncement) => {
        this.setState((prevState) => {
          const updatedAnnouncements = prevState.announcements.concat(newAnnouncement)
          // const updatedAnnouncements = [...announcements, newAnnouncement]
          return {
            announcements: updatedAnnouncements
          }
        })
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  render() {
    const { contentState, announcements, error } = this.state

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
            const contentData = draftToHtml(contentState)

            const announcement = {
              subject: subject,
              contentData: contentData
            }

            this.onCreateAnnouncement(announcement)
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
            announcements.length ? (announcements.map((announcement) => {
              <div>
                <h6>{ announcement.subject }</h6>
                <p>{ announcement.contentData }</p>
              </div>
            })
          ) : (
            <p>No current announcements</p>
          )
          }
        </div>
      </div>
    );
  }

  loadData() {
    listAnnouncements()
      .then((announcements) => {
        this.setState
      })
  }
  componentDidMount() {
    this.loadData()
  }
}

export default App;
