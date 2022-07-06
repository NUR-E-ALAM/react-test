import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
// const contacts = [
//   {
//     id: "1",
//     name: "Tanzir",
//     email: "tanzir@gmail.com",
//   },
//     {
//     id: "2",
//     name: "Nur",
//     email: "nur@gmail.com",
//   },
//     {
//     id: "3",
//     name: "Tanzir Nur",
//     email: "tanzirnur@gmail.com",
//   },
// ];

const [contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
  console.log(contact);
  setContacts([...contacts,contact]);
}


  return (
 <div className='ui container'>
  <Header />
 <AddContact addContactHandler={addContactHandler} />
 <ContactList contacts={contacts} />
 </div>
  );
}

export default App;
