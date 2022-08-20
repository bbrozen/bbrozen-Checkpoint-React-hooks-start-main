import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};



// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {

  const [list, setList] = React.useState(props.pets);
  const [species, setSpecies] = React.useState("all");

  return (
    <>
     <label for="pets">Choose a type of pet: </label>
      <select name="pets" id="pets" onChange={(event)=> 
        setSpecies(event.target.value)
      }>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="all">All</option>
      </select>

      <div className="pet-list">
      { list.filter(itm =>{
        if(species === "all"){
            return itm;
        }
        return itm.species === species})
            .map(itm =>  
            <SinglePet key={itm.id} pet={itm}  />
        )}
      </div>
    </>
  )
}

export default PetList;
