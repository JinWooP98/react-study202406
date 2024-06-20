import React, {forwardRef} from 'react';

const Input = forwardRef(({type, className}, ref) => {
    return <input type={type} ref={ref} />;
});

export default Input;