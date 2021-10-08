import { useState, useEffect } from 'react';

import useBreedList from './useBreedList';
import Results from './Results';

const ANIMALS = ['Bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
   const [location, setLocation] = useState('Seattle, WA');
   const [animal, setAnimal] = useState('');
   const [breed, setBreed] = useState('');
   const [pets, setPets] = useState([]);
   const [breeds] = useBreedList(animal);

   useEffect(() => {
      requestPets();
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   const requestPets = async () => {
      const res = await fetch(
         `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
      const json = await res.json();

      setPets(json.pets);
   };

   return (
      <div className="search-params">
         <form
            onSubmit={(e) => {
               e.preventDefault();
               requestPets();
            }}
         >
            <label htmlFor="location">
               Location
               <input
                  id="location"
                  onChange={(event) => setLocation(event.target.value)}
                  value={location}
                  placeholder="location"
               />
            </label>
            <label htmlFor="animal">
               Animal
               <select
                  id="animal"
                  value={animal}
                  onChange={(e) => setAnimal(e.target.value)}
                  onBlur={(e) => setAnimal(e.target.value)}
               >
                  <option />
                  {ANIMALS.map((animal) => (
                     <option key={animal} value={animal}>
                        {animal}
                     </option>
                  ))}
               </select>
            </label>
            <label htmlFor="breed">
               Breed
               <select
                  id="breed"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  onBlur={(e) => setBreed(e.target.value)}
               >
                  <option />
                  {breeds.map((breed) => (
                     <option key={breed} value={breed}>
                        {breed}
                     </option>
                  ))}
               </select>
            </label>
            <button>Submit</button>
         </form>
         <Results pets={pets} />
      </div>
   );
};

export default SearchParams;
