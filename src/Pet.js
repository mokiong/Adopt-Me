import { Link } from 'react-router-dom';

const Pet = ({ name, animal, breed, images, location, id }) => {
   let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

   if (images.length) {
      hero = images[0];
   }

   return (
      <Link to={`/details/${id}`} className="pet relative block">
         <div>
            <img src={hero} alt={name} style={{ width: '100%' }} />
         </div>
         <div
            className="
            absolute bottom-0 left-0 bg-gradient-to-tr 
            from-white to-transparent pr-2 pt-2"
         >
            <h1>{name}</h1>
            <h2>{`${animal} - ${breed} - ${location}`}</h2>
         </div>
      </Link>
   );
};

export default Pet;
