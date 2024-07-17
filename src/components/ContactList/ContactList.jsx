
// const ContactList = ({filteredContacts, handleDeleteContact}) => {
//         return (
//         <PhonebookContactsList>

//             {filteredContacts.map(({name, number, id}) => {

//             return (
//                     <PhonebookContactsListItem key={id}>
//                     <PhonebookContactsListItemName>{name}: {number}</PhonebookContactsListItemName>
//                     <DeleteBtn onClick={() => handleDeleteContact(id)}>Delete</DeleteBtn>
//                     </PhonebookContactsListItem>
//             )
//           })

//         }
//         </PhonebookContactsList>
//         );
// };

// export default ContactList;

import { PhonebookContactsList } from "./ContactList.styled";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredContacts, handleDeleteContact }) => {
  return (
    <PhonebookContactsList>
      {filteredContacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </PhonebookContactsList>
  );
};

export default ContactList;