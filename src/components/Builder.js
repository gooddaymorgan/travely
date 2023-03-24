import React, { useState } from 'react';
import CityList from './CityList';


const Builder = () => {

    const [value, setValue] = React.useState('Choose A Contient');
    const [showResults, setShowResults] = useState(false);

   
    const handleChange = (event) => {
   
      setValue(event.target.value);
      setShowResults(true);
   
    };


return (
    <div>
    <form className="form-container">
    <h1>Build Your Itinerary</h1>
        <div className="builder">
            <h2>Choose Your Contient</h2>

            <select name="cars" id="cars" value={value} onChange={handleChange}>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Austrailia">Austrailia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>

            <h2>Choose Your Cities</h2>
            <p>{value}</p>
            {showResults ? <CityList /> : null} 
        </div>
    </form>                             
    </div>
);
}


export default Builder;