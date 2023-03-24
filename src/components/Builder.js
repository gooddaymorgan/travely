import React from 'react';
import Dropdown from './Dropdown'


const [task, setTask] = useState(null);
const [allTasks, setAllTasks] = useState([]);

const Builder = (props) => (

    <div>
        <h1>Build Your Itineary</h1>
        <Dropdown />
        <div>
            <div>
                <h2>Cities In Your Area</h2>
                <div id="cities"></div>
            </div>

            <div>
                <h2>Itineary</h2>
                <div id="cities_itenary"></div>
            </div>
        </div>
    </div>
);


export default Builder;