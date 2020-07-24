import React, { useContext, useState } from 'react'
import { store } from '../../store'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'

const md = new MarkdownIt()

const Note = ({ match, history }) => {
  const { dispatch } = useContext(store)

  const [title, setTitle] = useState('')
  const [markdown, setMarkdown] = useState('')

  const saveNowt = () => {
    dispatch({
      type: 'ADD_NOTE',
      payload: {
        id: Math.random(),
        title,
        bodt: markdown
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
          {/* <div className="custom-html-style">
            <h1>Hello</h1>
            <blockquote>
              <p>Blockquotes test</p>
            </blockquote>
          </div> */}
        </div>
        <div className="footer">
          <div className="button-nowt" onClick={saveNowt}>
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