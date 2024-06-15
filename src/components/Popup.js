import React from "react";
import styled from 'styled-components';

const PopupBox = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`;

const Box = styled.div`
    position: relative;
    width: fit-content;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
`;

const CloseIcon = styled.span`
    content: 'x';
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: auto;
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
`;

const Popup = ({handleClose, children}) => {
  return (
    <PopupBox>
      <Box>
        <CloseIcon onClick={handleClose}>x</CloseIcon>
        {children}
      </Box>
    </PopupBox>
  );
};

export default Popup;