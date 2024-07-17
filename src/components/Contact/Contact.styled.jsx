import styled from "styled-components";

export const PhonebookContactsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PhonebookContactsListItemName = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;
