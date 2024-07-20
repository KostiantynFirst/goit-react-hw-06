import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList"
import Searchbox from "./components/Searchbox/Searchbox";
import { PhonebookContainer, PhonebookHeadings, PhonebookContacts, PhonebookContactsHeading } from "./App.styled";


function App() {

  return (
    <PhonebookContainer>
      <PhonebookHeadings>Phonebook</PhonebookHeadings>
      <ContactForm />
      <PhonebookContacts>
        <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
        <Searchbox />
        <ContactList />
        <ToastContainer />
      </PhonebookContacts>
    </PhonebookContainer>
  );
}

export default App;