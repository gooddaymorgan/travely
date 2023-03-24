import React, { useState } from 'react';


const Builder = () => {

    const [value, setValue] = React.useState('Choose A Contient');
   
    const handleChange = (event) => {
   
      setValue(event.target.value);
   
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

            
            {/* {showResults ? <p class="errorMessage">You can not enter a blank task!</p> : null} */}

            <h2>Choose Your Cities</h2>
            <p>{value}</p>
        </div>
    </form>                             
    </div>
);
}


export default Builder;