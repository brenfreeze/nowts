import React, { useContext } from 'react'
import { store } from '../../store'
import MarkdownIt from 'markdown-it'

const Home = ({ history }) => {
  const { 
    state: { 
      notes 
    }
  } = useContext(store)

  return (
    <div className="container">
      <div className="header">
        <span>n.</span>
      </div>
      <div className="hero">
        <div className="hero-container">
          <div className="content">
            <h1 className="display-text">nowts.</h1>
            <p>notes, now.</p>
          </div>
          <div className="content">
            <button className="button-nowt" onClick={() => history.push('/nowt/new')}>
              new nowt
            </button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-content">
          {
            notes.map(note => {
              const md = new MarkdownIt()

              return (
                <div className="notes-mini" onClick={() => history.push(`/nowt/${note.id}`)}>
                  <h3>{note.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: md.render(note.body) }} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home