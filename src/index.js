import React from "react"
import ReactDOM from "react-dom"
import { StateProvider } from './store'

import App from './App'

import './styles/styles.scss'

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
)
