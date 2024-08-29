import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom'; 
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} 
        />
        <Route 
          path="/add" 
          element={<AddContact addContactHandler={addContactHandler} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
