import { FilterContainer, FilterLabel, FilterInput } from "./Searchbox.styled";

const Searchbox = ({ filterValue, onChange }) => {
    return (
      <FilterContainer>
        <FilterLabel>Find contacts by name:</FilterLabel>
        <FilterInput
          type="text"
          value={filterValue}
          onChange={onChange}
          placeholder="Enter name"
        />
      </FilterContainer>
    );
};
  
export default Searchbox;