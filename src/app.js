import ReactDOM from 'react-dom';

import Pet from './Pet';

// const App = () => {
//    return React.createElement('div', {}, [
//       React.createElement('h1', {}, 'Adopt Me!'),
//       React.createElement(Pet, {
//          name: 'Luna',
//          animal: 'dog',
//          breed: 'havanese',
//       }),
//    ]);
// };
const App = () => {
   return (
      <div>
         <h1>Adopt Me!</h1>
         <Pet name="Luna" animal="Dog" breed="Havanse" />
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById('root'));
