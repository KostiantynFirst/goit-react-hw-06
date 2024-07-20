import { PhonebookContactsList } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from '../Contact/Contact';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactList = () => {

const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  
  const filteredContacts = contacts.filter(contact => 
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PhonebookContactsList>
      {filteredContacts.map(contact => (
        <Contact contact={contact}
          key={contact.id}
        />
      ))}
    </PhonebookContactsList>
  );
};

export default ContactList;