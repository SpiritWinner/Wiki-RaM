import React, {useState} from "react";
import styled from 'styled-components';
import Popup from "../Popup";
import CardDetails from "./CardDetails";

const CardStyle = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  position: relative;
  height: fit-content;
`;

const StatusIndicator = styled.span`
  position: absolute;
  color: white;
  background-color: ${({ status }) => (status === 'Alive' ? 'green' : 'red')};
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  top: 20px; 
  right: 20px;
`;


const CardImage = styled.img`
  width: 100%;
  height: auto;`
;

const CardBody = styled.div`
  padding: 10px;`
;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.1em;
  color: #333;`
;

const CardText = styled.p`
  margin: 5px 0 0;
  font-size: 0.9em;
  color: #666;`
;

const Button = styled.input`
border: none;
background: none;
color: #007bff;
cursor: pointer;
padding: 5px;
margin: 10px auto;
font-size: 0.9em;

&:hover {
  text-decoration: underline;
}
`;


const Card = ({ page, results }) => {
  let display;
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function r() {
    var ids = document.activeElement;
    let n = ids.getAttribute('name');
    return n;
  }


  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location} = x;
      return (
        <CardStyle>  
            <CardImage src={image} alt=""/>
            <StatusIndicator status={status}>{status}</StatusIndicator>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>Last Location</CardText>
                <CardText>{location.name}</CardText>
              <Button
              type="button"
              value="Datails"
              name={id}
              onClick={togglePopup}
              />
              {isOpen && <Popup    
                handleClose={togglePopup}
              >
                <CardDetails id = {r()}/>
                </Popup>
              }
            </CardBody>
        </CardStyle>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;