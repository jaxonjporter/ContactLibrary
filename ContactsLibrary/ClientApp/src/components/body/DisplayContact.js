import React, { useContext } from 'react'
import { ContactsContext } from '../../context/ContactsProvider'

export default function DisplayContact(props){
  const {state, actions} = useContext(ContactsContext)
  const {name, birthdate, group, favorite} = props.contact

  const setSelectedContact = () => {
    actions.updateState({selected_contact: props.contact.id})
  }

  const deleteContact = () => {
    let updatedContactList = state.contacts.filter(contact => contact.id !== props.contact.id)
    actions.updateState({contacts: updatedContactList})
  }

  return (
    <div>
      <div className="edit-form-flex">
        <div >
          <div>
            <strong>Name: </strong>
            {name}
          </div>
          <div>
            <strong>Birthdate: </strong> 
            {birthdate}
          </div>
        </div>
        <div>
          <div>
            <strong>Group: </strong>
            {group}
          </div>
          <div>
            <strong>Favorite: </strong>
            {favorite ? "Yes": "No"}
          </div>
        </div>
      </div>
      <div className="action-button-group">
        <button className="action-button" onClick={setSelectedContact}>Edit</button> | <button className="action-button" onClick={deleteContact}>Delete</button>
      </div>
    </div>
  )
}