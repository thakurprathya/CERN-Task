import React from 'react';
import '../styles/checkbox.css';

const CheckBox = ({data, state, setState }) => {
    // Functions
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const HandleOnClick = (event) =>{
        setState({...state, [event.target.name] : event.target.checked});
    }

    return (
        <div className='box'>
            <h4 className='head'>{capitalize(data)}</h4>
            <div className="boxes">
                <label>
                    <input type="checkbox" name="checkbox1" checked={state.checkbox1} onClick={HandleOnClick}/> Available
                </label>
                <label>
                    <input type="checkbox" name="checkbox2" checked={state.checkbox2} onClick={HandleOnClick}/> Not Available
                </label>
            </div>
        </div>
    )
};

export default CheckBox;
