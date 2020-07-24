import React, { createContext, useReducer } from 'react'

const initialState = {
  notes: [
    {
      id: 0,
      title: 'Hello',
      body: '# Hello \n --- \n * hi \n * hey'
    }
  ]
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const {
      notes
    } = state

    switch(action.type) {
      case 'ADD_NOTE':
        notes.push(action.payload)
        
        return state
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{ children }</Provider>
}

export { store, StateProvider }