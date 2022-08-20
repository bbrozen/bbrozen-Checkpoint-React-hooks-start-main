import React from 'react';
import { useState, useEffect } from "react";
import { ReactDOM } from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root =  () => {
const [data, setData] = React.useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const url = `http://localhost:8080`;

  React.useEffect( () =>{
    fetch(`/api/pets`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Uh oh!: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => setData(data))
    .catch((error) => {
      setError(error.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
    }, [url]);


  return (
    <>
      <h1>Adoption Center</h1>
      
      {loading? <p>Loading!</p>: <p>Done Loading!</p> }
      {error? <p>Status code 500</p>:<p>No Error!</p>}
      <PetList key={data} pets={data} />
    </>
  )
}

export default Root;
