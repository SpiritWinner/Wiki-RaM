import React from "react";
import styled from 'styled-components';

const ButtonContener = styled.div`
  margin: 10px;
`;

const FilterButton = styled.label`
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #0d6efd;
  background-color: ${({ active }) => (active ? '#007bff' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#0d6efd')};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }`
;

const FilterInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #0b5ed7;
    color: white;
  }
`;

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <ButtonContener>
      <FilterInput
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <FilterButton
        onClick={(x) => {
          task(input);
          updatePageNumber(1);
        }}
        for={`${name}-${index}`}
      >
        {input}
      </FilterButton>
    </ButtonContener>
  );
};

export default FilterBTN;