import React from "react";
import styled from 'styled-components';

import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const FiltersContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 0;
  margin-bottom: 20px;
  width: 100%;
  max-width: 650px;`
;

const FilterTitle = styled.h3`
  color: #333;
  margin: 0;
  text-align: center;
  `
;

const ClearButton = styled.button`
  border: none;
  background: none;
  color: #007bff;
  cursor: pointer;
  padding: 5px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  font-size: 0.9em;

  &:hover {
    text-decoration: underline;
  }`
;


const Filter = ({
    pageNumber, updatePageNumber,
    updateStatus, updateGender,
    updateSpecies,
  }) => {
   
    let clear = () => {
        updateStatus("");
        updateGender("");
        updateSpecies("");
        updatePageNumber(1);
        window.location.reload(false);
        };

    return (
    <>
      <FilterTitle>Filters</FilterTitle>
      <ClearButton onClick={clear}>Clear Filters</ClearButton>
        <FiltersContainer>
          <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
          />
          <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
          />
          <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
          />
        </FiltersContainer>
    </>
    );
  };


  export default Filter;
  
  