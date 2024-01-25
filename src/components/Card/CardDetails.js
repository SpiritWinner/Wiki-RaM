import React, { useState, useEffect } from "react";

const CardDetails = ({id}) => {

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <div>
        <h1>{name}</h1>

        <img src={image} alt="" />
        
        <div>
            <span>Status : </span>
            {status}
        </div>
         
        <div>
          <div>
            <span>Gender : </span>
            {gender}
          </div>
          <div>
            <span>Location: </span>
            {location?.name}
          </div>
          <div>
            <span>Origin: </span>
            {origin?.name}
          </div>
          <div>
            <span>Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;