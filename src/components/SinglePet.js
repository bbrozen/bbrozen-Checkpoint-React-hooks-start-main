import React from 'react';

function SinglePet(props) {
  
  const [adopted, setAdopted] =React.useState(true);
  

  return (
    

    <div className={adopted ? "single-pet": "single-pet" +" adopted"}>
        <h1>{props.pet.name} the {props.pet.species} </h1>
        <p>{props.pet.description}</p>
      
          <p>{adopted ? "Available!":"Adopted!"}</p>  
        
        <button onClick = {()=>setAdopted(!adopted)}>Toggle Status</button>

    </div>
  );


}

export default SinglePet;
