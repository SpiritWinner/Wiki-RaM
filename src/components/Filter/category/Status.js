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

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>Status</div>
        <div>{isActive ? '-' : '+'}</div>
      </AccordionTitle>
      {isActive &&    <AccordionBody>
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </AccordionBody>}
    </div>
  );
};

export default Status;