import React, { useContext, useState, useEffect } from 'react'
import { ContactsContext } from '../../context/ContactsProvider'

export default function EditContact(props){
  const {state, actions} = useContext(ContactsContext)
  const [contact, setContact] = useState({...props.contact})

  const cancelEdit = () => {
    actions.updateState({selected_contact: null})
  }

  const submitEditContact = (e) => {
    e.preventDefault()
    let filteredContacts = state.contacts.filter(con => con.id !==contact.id)
    actions.updateState({
      contacts: [...filteredContacts, {...contact, updated_at: Date.now()}],
      selected_contact: null
    })
  }

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }
  
  const handleCheckChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.checked
    })
  }

  return (
    <>
      <form onSubmit={submitEditContact}  >
        <div className="edit-form-flex">
          <div>
            <label><strong>Name: </strong></label><br />
            <input name="name" type="text" value={contact.name} onChange={handleChange} required />
            <br />
            <label><strong>Birthdate: </strong></label><br />
            <input name="birthdate" type="date" value={contact.birthdate} onChange={handleChange} required />
          </div>
          <div>
            <label><strong>Group: </strong></label><br />
            <input name="group" type="text" value={contact.group} onChange={handleChange} required />
            <br />
            <label><strong>Favorite: </strong></label>
            <input className="favorite-checkbox" name="favorite" type="checkbox" checked={contact.favorite} onChange={handleCheckChange} />
          </div>
        </div>
        <div className="action-button-group">
          <button className="action-button" type="submit">Save</button> | <button className="action-button" onClick={cancelEdit}>Cancel</button>
        </div>
      </form>
    </> 
  )
}
