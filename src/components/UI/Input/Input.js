import React, {forwardRef} from 'react';
import styles from './Input.module.scss'

const Input = forwardRef(({label, inputAttr}, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={inputAttr.id}>{label}</label>
            <input {...inputAttr} ref={ref}/>
        </div>
    );
});

export default Input;