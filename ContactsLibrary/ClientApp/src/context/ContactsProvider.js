import React, { useReducer, useEffect } from 'react'
import { getContactList } from './DataActions.js'


export const ContactsContext = React.createContext();

const initialState = {
  contacts: [],
  active_tab: "home",
  selected_contact: null
}

const actions = {
  UPDATE_STATE: "UPDATE_STATE",
}

const reducer = (state, action) => {
  switch (action.type){
    case actions.UPDATE_STATE:
      return {...state, ...action.obj}
    default:
      return state
  }
}

function ContactsProvider(props){
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const value = {
    state,
    actions: {
      updateState: (obj) => {dispatch({type: actions.UPDATE_STATE, obj: obj})}
    }
  }

    useEffect(() => {
        getContactList(value.actions.updateState)
    }, [])


  return(
    <ContactsContext.Provider value={value}>
      {props.children}
    </ContactsContext.Provider>
  )
}

export default ContactsProvider