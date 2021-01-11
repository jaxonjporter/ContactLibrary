import React, {useContext, useState} from 'react'
import { ContactsContext } from '../../context/ContactsProvider'
import { useHistory } from 'react-router-dom'

const initialContactState = {
  name: "", 
  group: "", 
  birthdate: "", 
  favorite: ""
}

export default function AddContact(){
  const {state, actions} = useContext(ContactsContext)
  const [contact, setContact] = useState(initialContactState)
  const history = useHistory()
  
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

  const submitAddContact = (e) => {
    e.preventDefault()
    let nextID = state.contacts.reduce((acc, contact) => (contact.id >= acc ? contact.id + 1 : acc), 1)
    actions.updateState({contacts: [...state.contacts, {...contact, id: nextID, created_at: Date.now()}]})
    history.push("/")
  }

  return (
    <div>
      <h2>Add New Contact</h2>
      <form id="add-form" onSubmit={submitAddContact}>
        <label>Contact Name </label>
        <input name="name" type="text" value={contact.name} onChange={handleChange} required />
        <label>Contact Group </label>
        <input name="group" type="text" value={contact.group} onChange={handleChange} required />
        <label>Contact Birthdate </label>
        <input name="birthdate" type="date" value={contact.birthdate} onChange={handleChange} required />
        <label>Favorite </label>
        <input className="favorite-checkbox" name="favorite" type="checkbox" checked={contact.favorite} onChange={handleCheckChange} />
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  )
}