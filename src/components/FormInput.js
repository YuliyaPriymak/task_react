import React from 'react';

const FormInput = (props) => {
    const {word, addPoints, onInputChange} = props;
    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter a word"
                aria-describedby="basic-addon1"
                value={word}
                onChange={onInputChange}
            />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={addPoints}>add points</button>
                </div>
        </div>

);
};

export default FormInput;