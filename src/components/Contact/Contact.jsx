import { PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Contact.styled";

import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { name, number, id } }) => {

  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));
  
  return (
    <PhonebookContactsListItem>
      <PhonebookContactsListItemName>{name}: {number}</PhonebookContactsListItemName>
      <DeleteBtn onClick={handleDeleteContact}>Delete</DeleteBtn>
    </PhonebookContactsListItem>
  );
};

export default Contact;