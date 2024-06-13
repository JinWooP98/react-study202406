import React, {useState} from 'react';
import './CheckBoxStyle.css';

const CheckBoxStyle = () => {

    const [isCheck, setCheck] = useState(false);

    const checkEvent = e => {
        setCheck(!isCheck);
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                id="styled-checkbox"
                checked={isCheck}
                onChange={checkEvent}

            />
            <label
                htmlFor="styled-checkbox"
                className={isCheck?'checked' : 'unchecked'}
            >
                Check me!
            </label>
        </div>
    );
};

export default CheckBoxStyle;