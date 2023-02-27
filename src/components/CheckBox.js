import React from 'react';
import '../styles/checkbox.css';

const CheckBox = ({data}) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div>
            <h4>{capitalize(data)}</h4>
            <div className="boxes">
                <label htmlFor="1">
                    <input type="checkbox" name="1" checked/> Available
                </label>
                <label htmlFor="1">
                    <input type="checkbox" name="1" checked/> Not Available
                </label>
            </div>
        </div>
    )
};

export default CheckBox;
