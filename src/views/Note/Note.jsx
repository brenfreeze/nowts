import React, { useContext, useState, useEffect } from 'react'
import { store } from '../../store'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'

const md = new MarkdownIt()

const Note = ({ match, history }) => {
  const { state: { notes }, dispatch } = useContext(store)

  const [title, setTitle] = useState('')
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    const viewNote = notes.find(note => note.id.toString() === match.params.param)
  
    if (viewNote) {
      setTitle(viewNote.title)
      setMarkdown(viewNote.body)
    }
  }, [match.params.param, notes])

  const saveNowt = () => {
    dispatch({
      type: 'ADD_NOTE',
      payload: {
        id: Math.random(),
        title,
        body: markdown,
      }
    })

    history.push('/')
  }

  const updateNowt = () => {
    dispatch({
      type: 'UPDATE_NOTE',
      payload: {
        id: parseInt(match.params.param),
        title,
        body: markdown,
      }
    })

    history.push('/')
  }

  return (
    <>
      <div className="note-container">
        <div className="title">
          <input 
            type="text" 
            className="title-input" 
            placeholder="new nowt" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="editor">
          <MdEditor 
            value={markdown}
            style={{ height: "500px" }}
            renderHTML={(text) => md.render(text)}
            onChange={({html, text}) => {
              setMarkdown(text)
            }}
          />
        </div>
        <div className="footer">
          <div className="button-nowt" onClick={match.params.param === 'new' ? saveNowt : updateNowt}>
            save
          </div>
        </div>
      </div>
      <button className="close-btn" onClick={() => history.push('/')}>
        &times;
      </button>
    </>
  )
}

export default Note