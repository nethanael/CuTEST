import React from "react";

const Input = ( { max, onChange, value } ) => {

    return ( 
    <div className="field">
        <label className="label">Digite la atenuación CPE DS (Downstream):</label>
        <div className="control"></div>
        <input 
            className="input is-rounded" 
            placeholder="Escriba aquí"
            type="number" 
            min='0'
            max={max}
            onChange={onChange}
            value={value}
            required 
        />
        <span className="help">Digite un valor menor a: {max} dBs</span>
    </div>
     );
}
 
export default Input;