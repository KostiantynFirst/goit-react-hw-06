import { PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Contact.styled";

const Contact = ({ name, number, id, handleDeleteContact }) => {
  return (
    <PhonebookContactsListItem>
      <PhonebookContactsListItemName>{name}: {number}</PhonebookContactsListItemName>
      <DeleteBtn onClick={() => handleDeleteContact(id)}>Delete</DeleteBtn>
    </PhonebookContactsListItem>
  );
};

export default Contact;