import React, { createContext, useReducer } from 'react'

const initialState = {
  notes: [
    {
      id: 0,
      body: '# Hello'
    }
  ]
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{ children }</Provider>
}

export { store, StateProvider }