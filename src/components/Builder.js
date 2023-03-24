import React, { useState } from 'react';
import Africa from './Africa';
// import CityList from './CityList';


const Builder = () => {

    const [value, setValue] = React.useState('Choose A Contient');
    const [showResults, setShowResults] = useState(false);

   
    const handleChange = (event) => {
   
      setValue(event.target.value);

      //This is how I'm doing it we ANIT GOT TIME
      let elem = document.getElementById("cityList");
      if (elem.value === "Africa"){
        setShowResults(true);
      }
   
    };


return (
    <div>
    <form className="form-container">
    <h1>Build Your Itinerary</h1>
        <div className="builder">
            <h2>Choose Your Contient</h2>

            <select name="cars" id="cityList" value={value} onChange={handleChange}>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Austrailia">Austrailia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>

            <h2>Choose Your Cities</h2>
            <p>{value}</p>
            {showResults ? <Africa /> : null} 
        </div>
    </form>                             
    </div>
);
}


export default Builder;