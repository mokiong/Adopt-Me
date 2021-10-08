import { useState } from 'react';

const SearchParams = () => {
   const [location, setLocation] = useState('Seattle, WA');

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
            <button>Submit</button>
         </form>
      </div>
   );
};

export default SearchParams;
