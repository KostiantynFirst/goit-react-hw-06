import styled from "styled-components";

import { Form, Field, ErrorMessage } from 'formik';

export const PhonebookForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const PhonebookFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
`;

export const PhonebookFormLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const PhonebookFormInput = styled(Field)`
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;

  @media (max-width: 768px) {
    width: 80%;
  }

  &.error {
    border-color: red;
  }
`;


export const ErrMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  width: 300px;

    @media (max-width: 768px) {
    width: 80%;
  }
  `
;

export const PhonebookBtn = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #006b8f;
  }
`;
