import React, { useContext, useEffect } from 'react'
import { ContactsContext } from '../../context/ContactsProvider'
import ContactCard from './ContactCard'
import { getContactList } from '../../context/DataActions'

export default function ContactList(){
  const {state, actions} = useContext(ContactsContext)

  return (
    <div className="contact-list-container">
      <h2>Your Contacts</h2>
      <div className="contact-list">
        {state.contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  )
}