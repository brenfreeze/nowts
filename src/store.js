import React, { createContext, useReducer, useEffect } from 'react'

const initialState = {
  notes: [
    {
      id: 0,
      title: 'Hello',
      body: '# Hello \n --- \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt suscipit molestiae? Sunt iure omnis fugiat voluptates atque nostrum illo.'
    }
  ]
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { notes } = state

    switch(action.type) {
      case 'ADD_NOTE':
        notes.push(action.payload)
        
        return state
      case 'UPDATE_NOTE':
        const toUpdate = notes.find(note => note.id === action.payload.id)
        notes.splice(notes.indexOf(toUpdate), 1, action.payload)

        return state
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{ children }</Provider>
}

export { store, StateProvider }