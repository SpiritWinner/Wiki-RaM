import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";


const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 5%;

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-basis: 15%;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 930px) {
    flex-basis: 75%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-basis: 75%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TextH1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

function App() {
  let [fetchedData, updateFetchedData] = useState([]);  
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  

  return (
    <div className="App">
      <TextH1>Characters</TextH1>
      <Search 
        setSearch={setSearch}
        updatePageNumber={updatePageNumber} 
        />
      <Container>
        <FilterGroup>
        <Filter
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
        </FilterGroup> 
        <CardContainer>
          <Card page="/" results={results}/>
        </CardContainer>
      </Container>
      <Pagination
        currentPage = {pageNumber}
        totalCount = {826}
        pageSize = {20}
        onPageChange = {page => updatePageNumber(page)}
      />
    </div>
  );
}

export default App;
