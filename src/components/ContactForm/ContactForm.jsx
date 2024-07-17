import { PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, ErrMessageStyled } from "./ContactForm.styled";
import { Formik,  } from "formik";
import * as Yup from "yup";


const ContactForm = ({ handleSubmit }) => {

  const initialValues = { name: '', number: '' };

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
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <PhonebookForm onSubmit={handleSubmit}>
          <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="name">Name:</PhonebookFormLabel>
            <PhonebookFormInput
              type="text"
              name="name"
              placeholder="Enter first and last name"
            />
            <ErrMessageStyled name="name" component="div" />
          </PhonebookFormContainer>

          <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="number">Number:</PhonebookFormLabel>
            <PhonebookFormInput
              type="tel"
              name="number"
              placeholder="Enter number"
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


