import React, { useContext } from 'react'
import { store } from '../../store'

const Home = () => {
  const { 
    state: { 
      notes 
    }, 
    dispatch 
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
        </div>
      </div>
    </div>
  )
}

export default Home