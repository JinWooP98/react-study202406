import React from 'react';
import './Card.css';

const Card = ({children, className}) => {

    const cn = "card " + className;

    return (
        <div className={cn}>
            {children}
        </div>
    );
};

export default Card;