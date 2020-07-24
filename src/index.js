import React from "react"
import ReactDOM from "react-dom"
import { StateProvider } from './store'

import App from './App'

import './styles/styles.scss'
import 'react-markdown-editor-lite/lib/index.css'

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
)
