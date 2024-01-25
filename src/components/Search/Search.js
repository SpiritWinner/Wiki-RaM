import React from "react";
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;`
;

const SearchInput = styled.input`
  padding: 10px;
  width: 60%;
  max-width: 500px;
  border: 1px solid #0d6efd;
  border-radius: 5px;
  margin-right: 10px;
  box-sizing: border-box;`
;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }`
;

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
      e.preventDefault();
    };
    return (
        <SearchContainer>
          <SearchInput
            type = "text"
            placeholder="Search for characters"
            onChange={(e) => {
                updatePageNumber(1);
                setSearch(e.target.value);
              }}
            />
            <SearchButton
            onClick={searchBtn}
            > 
            Search
            </SearchButton>
        </SearchContainer>
    );
  };
  
  export default Search;