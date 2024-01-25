import React, { useState } from 'react';
import styled from 'styled-components';

import FilterBTN from "../FilterBTN";

const AccordionBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 10px;
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: #0d6efd;
  padding: 1rem 1.25rem;
  border: 0;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
  cursor: pointer;
`;

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
    <AccordionTitle onClick={() => setIsActive(!isActive)}>
      <div>Species</div>
      <div>{isActive ? '-' : '+'}</div>
    </AccordionTitle>
    {isActive && <AccordionBody>
          {species.map((item, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            );
          })}
        </AccordionBody> }
      </div>
  );
};

export default Species;