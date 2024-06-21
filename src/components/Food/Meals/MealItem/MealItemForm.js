import React, {useRef, useState} from 'react';
import styles from './MealItemForm.module.scss';
import Input from "../../../UI/Input/Input";

const MealItemForm = ({id, onAddToCart}) => {

    // const [amount, setAmount] = useState(0);

    // 선택한 수량 값 가져오기
    const inputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        const amount = inputRef.current.value;
        onAddToCart(amount);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                label='수량'
                inputAttr={{
                    id: 'amount_' + id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>담기</button>
        </form>
    );
};

export default MealItemForm;