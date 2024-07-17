import styled from "styled-components";

export const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PhonebookHeadings = styled.h2`
  font-family: Arial, sans-serif;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

export const PhonebookContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhonebookContactsHeading = styled.h3`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

