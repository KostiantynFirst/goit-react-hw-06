import { FilterContainer, FilterLabel, FilterInput } from "./Searchbox.styled";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const Searchbox = () => {

  const dispatch = useDispatch(); 
  const value = useSelector(selectNameFilter);
  const searchboxId = useId();

    return (
      <FilterContainer>
        <FilterLabel>Find contacts by name:</FilterLabel>
        <FilterInput
          type="text"
          value={value}
          name="search"
          id={searchboxId}
          onChange={e => dispatch(changeFilter(e.target.value))}
          placeholder="Enter name"
        />
      </FilterContainer>
    );
};
  
export default Searchbox;