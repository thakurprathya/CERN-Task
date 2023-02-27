import React from 'react';
import '../styles/dropdown.css';

const Dropdown = ({data, types, state, setState}) => {
    // Functions
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const HandleChange = (event) => {
        setState(event.target.value);
    }
    
    return (
        <div className='statusDiv'>
            <h4 className='head'>{capitalize(data)}</h4>
            <select id="mySelect" value={state} onChange={HandleChange}>
                {types.map((type)=><option>{type}</option>)}
            </select>
        </div>
    )
};

export default Dropdown;
