import React, { useState } from 'react';
// import hero from '../assests/hero.jpg';

const Africa = (props) => {

  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }

    setCounter(count => count - 1);
  };
 

  return (
      <div>
        <h1>Africa</h1>

        <ol>
          <li>Cairo,Egypt</li>
          <li>Marrakesh, Morocco</li>
          <li>Cape Town, South Africa</li>
          <li>Johannesburg, South Africa</li>
          <li>Stone Town, Zanzibar</li>
        </ol>
        <span className="counter__output">{counter}</span>
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
      </div>
);
}

export default Africa;