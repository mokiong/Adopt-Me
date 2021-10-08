import { useState } from 'react';

const ANIMALS = ['Bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
   const [location, setLocation] = useState('Seattle, WA');
   const [animal, setAnimal] = useState('');
   const [breed, setBreed] = useState('');

   const breeds = [];

   return (
      <div className="search-params">
         <form>
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
                        {animal}asdasd
                     </option>
                  ))}
               </select>
            </label>
            <label htmlFor="breed">
               Breed
               <select
                  id="breed"
                  value={animal}
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
      </div>
   );
};

export default SearchParams;
