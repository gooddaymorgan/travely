import React, { useState } from 'react';
import Africa from './citylist/Africa';
import Asia from './citylist/Asia';
// import CityList from './CityList';


const Builder = () => {

    const [value, setValue] = React.useState('Choose A Contient');
    const [africanCity, showAfricanCities] = useState(null);
    const [asianCity, showAsianCities] = useState(null);
    const [aussieCity, showAussieCities] = useState(null);
    const [europeCity, showEuropeCities] = useState(null);
    const [naCity, showNACities] = useState(null);
    const [saCity, showSACities] = useState(null);

   
    const handleChange = (event) => {
   
      setValue(event.target.value);

      //This is how I'm doing it we ANIT GOT TIME to think of an "Optiminal Solution"
      //I think setting null over false saves on page loading time? IDK
        //This hurts my eyes to look at

      let elem = document.getElementById("cityList");

      if (elem.value === "None"){
        showAfricanCities(null);
        showAsianCities(null);
        showAussieCities(null);
        showEuropeCities(null);
        showNACities(null);
        showSACities(null);
      }
      if (elem.value === "Africa"){
        showAfricanCities(true);
        showAsianCities(false);
        showAussieCities(false);
        showEuropeCities(false);
        showNACities(false);
        showSACities(false);

      }
      if (elem.value === "Asia"){
        showAsianCities(true);
        showAfricanCities(null);
        showAussieCities(null);
        showEuropeCities(null);
        showNACities(null);
        showSACities(null);
      }

      if (elem.value === "Austrailia"){
        showAussieCities(true);
        showAfricanCities(null);
        showAsianCities(null);
        showEuropeCities(null);
        showNACities(null);
        showSACities(null);
      }

      if (elem.value === "Europe"){
        showEuropeCities(true);
        showAfricanCities(null);
        showAsianCities(null);
        showAussieCities(null);
        showNACities(null);
        showSACities(null);
      }

      if (elem.value === "North America"){
        showNACities(true);
        showAfricanCities(null);
        showAsianCities(null);
        showAussieCities(null);
        showEuropeCities(null);
        showSACities(null);
      }

      if (elem.value === "South America"){
        showSACities(true);
        showEuropeCities(null);
        showAfricanCities(null);
        showAsianCities(null);
        showAussieCities(null);
        showNACities(null);
      }
   
    };


return (
    <div>
    <form className="form-container">
    <h1>Build Your Itinerary</h1>
        <div className="builder">
            <h2>Choose Your Contient</h2>

            <select name="cars" id="cityList" value={value} onChange={handleChange}>
                <option value= "Choose A Contient">No Contient Selected</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Austrailia">Austrailia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>

            <h2>Choose Your Cities</h2>
            <p>{value}</p>
            { africanCity ? <Africa /> : null} 
            { asianCity ? <Asia /> : null} 
            { aussieCity ? <Asia /> : null} 
            { europeCity ? <Asia /> : null} 
            { naCity ? <Asia /> : null} 
            { saCity ? <Asia /> : null} 

        </div>
    </form>                             
    </div>
);
}


export default Builder;