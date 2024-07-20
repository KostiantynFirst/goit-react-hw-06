import { PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, ErrMessageStyled } from "./ContactForm.styled";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch  } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import { useId } from "react";
import { useSelector } from "react-redux";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  const initialValues = { name: '', number: '' };
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

const contacts = useSelector(selectContacts);


  const handleSubmit = (values, actions) => {

    const { name, number } = values;

    if (typeof name !== 'string' || typeof number !== 'string') {
      toast.error('Invalid input values!');
      return;
    }

    const isNameExist = contacts.some(contact => contact.name?.toLowerCase() === name.toLowerCase());
    const isNumberExist = contacts.some(contact => contact.number === number);

    if (isNameExist) {
      toast.error('Contact with such name already exists!', { autoClose: 3000 });
      actions.resetForm();
      return;
      
    }

    if (isNumberExist) {
      toast.error('Contact with such number already exists!', { autoClose: 3000 });
      actions.resetForm();
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    actions.resetForm();
  }


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)+$/,
      'Name must consist of two or more words separated by a space, where each word starts with a capital letter'
    )
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name must be at most 30 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Phone number must be at least 3 characters')
    .max(30, 'Phone number must be at most 30 characters')
    .required('Phone number is required')
    .matches(
      /^[\d\s\(\)\-\+]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <PhonebookForm onSubmit={handleSubmit}>
          <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="name">Name:</PhonebookFormLabel>
            <PhonebookFormInput
              type="text"
              name="name"
              placeholder="Enter first and last name"
              id={nameId}
            />
            <ErrMessageStyled name="name" component="div" />
          </PhonebookFormContainer>

          <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="number">Number:</PhonebookFormLabel>
            <PhonebookFormInput
              type="tel"
              name="number"
              placeholder="Enter number"
              id={numberId}
            />
            <ErrMessageStyled name="number" component="div" />
          </PhonebookFormContainer>

          <PhonebookBtn type="submit">Add Contact</PhonebookBtn>
        </PhonebookForm>
      )}
    </Formik>
  );
};

export default ContactForm;


