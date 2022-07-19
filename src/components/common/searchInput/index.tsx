import React, { useRef, useState, FC } from "react";
import { InputWrapper, StyledInput, SearchIconWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchInputProps } from "./types";

const SearchInput: FC<SearchInputProps> = ({
  value = "",
  onChange = () => {},
}) => {
  const [placeholder, setPlaceholder] = useState("Search");
  const inputRef = useRef(null);
  const handleIconClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };
  return (
    <InputWrapper onClick={handleIconClick}>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        ref={inputRef}
        onChange={onChange}
        onFocus={() => setPlaceholder("")}
        onBlur={() => !placeholder && setPlaceholder("Search")}
      />
      <SearchIconWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchIconWrapper>
    </InputWrapper>
  );
};

export default SearchInput;
