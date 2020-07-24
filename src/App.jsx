import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Home from './views/Home/Home'
import Note from './views/Note/Note'

const App = () => {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ top: 20, opacity: 0 }}
        atLeave={{ top: 0, opacity: 0 }}
        atActive={{ top: 0, opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />
        <Route path="/nowt/:param?" component={Note} />
      </AnimatedSwitch>
    </Router>
  )
}

export default App