import React from 'react';
import ContactsList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Forms/Form';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="formsContainer">
        <Form />
      </div>

      <div className="contactsContainer">
        <div className="contacts">
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </div>
  );
}

export default App;
