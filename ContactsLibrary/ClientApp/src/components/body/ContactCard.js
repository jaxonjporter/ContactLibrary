import React, { useContext } from 'react'
import { ContactsContext } from '../../context/ContactsProvider'
import EditContact from './EditContact'
import DisplayContact from './DisplayContact'

export default function ContactCard(props){
  const {state} = useContext(ContactsContext)

  return (
    <div className="contact-card">
      {
        state.selected_contact === props.contact.id 
        ? <EditContact contact={props.contact} />
        : <DisplayContact contact={props.contact} />
      }
    </div> 
  )
}
