import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList"
import Searchbox from "./components/Searchbox/Searchbox";

import useLocalStorage from "./hooks/userLocalStorage.";
import { PhonebookContainer, PhonebookHeadings, PhonebookContacts, PhonebookContactsHeading } from "./App.styled";


function App() {

  const INITIAL_CONTACTS = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contacts', INITIAL_CONTACTS);
  const [filter, setFilter] = useState('');

  const handleSubmit = ({ name, number }) => {
    const isNameExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    const isNumberExist = contacts.some(contact => contact.number === number);

    if (isNameExist) {
      toast.error('Contact with such name already exists!', { autoClose: 3000 });
      return;
    }

    if (isNumberExist) {
      toast.error('Contact with such number already exists!', { autoClose: 3000 });
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <PhonebookContainer>
      <PhonebookHeadings>Phonebook</PhonebookHeadings>

      <ContactForm handleSubmit={handleSubmit} />

      <PhonebookContacts>
        <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>

        <Searchbox filterValue={filter} onChange={changeFilter} />

        <ContactList filteredContacts={filteredContacts} handleDeleteContact={handleDeleteContact} />

        <ToastContainer />
      </PhonebookContacts>
    </PhonebookContainer>
  );
}

export default App;