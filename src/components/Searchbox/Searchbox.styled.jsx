import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 5px;
  }
`;

export const FilterLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FilterInput = styled.input`
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const FilterBtn = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #006b8f;
  }
`;