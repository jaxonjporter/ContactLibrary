import React from 'react';
import ContactsProvider from "../context/ContactsProvider"
import { Switch, Route } from 'react-router-dom'
import Header from './header/Header';
import ContactList from './body/ContactList'
import Container from './contacts/Container';
import AddContact from './body/AddContact';
import "../ContactsApp.css"

function ContactsApp(){
  return (
    <ContactsProvider>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={ContactList} />
          <Route exact path='/add' component={AddContact} />
        </Switch>
      </Container>
    </ContactsProvider>
  )
}

export default ContactsApp;