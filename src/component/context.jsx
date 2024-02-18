// context.js
import { createContext, useState, useContext } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkContext = createContext();

const Darkmode = ({ children }) => {
  const [isTrue, setTrue] = useState(false);

  const handleClick = () => {
    setTrue(!isTrue);
    console.log(Body)
  };



  const icon = isTrue ? faMoon : faSun;
  const containerClassName = `switch ${isTrue ? 'switch2 roll' : 'roll'}`;
const btnn= `btn ${isTrue ? 'btn-dark' : ''}`
const topp=`top ${isTrue ? 'top-dark' : ''}`
const Body=  `body ${isTrue ? 'body-dark' : ''}`

  return (
    <DarkContext.Provider value={{ handleClick, containerClassName,btnn, icon,topp,Body }}>
      {children}
    </DarkContext.Provider>
  );
};

const useDarkmode = () => {
  const context = useContext(DarkContext);
  return context;
};

export { Darkmode, useDarkmode };