import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onSave}) => {

    const [isAddExpense, setAddExpense] = useState(false);

    const newExpenseHandler = e => {
        setAddExpense(true);
    }

    const stopInsertModeHandler = () => {
        setAddExpense(false);
    }


    const newExpenseContent = <ExpenseForm onAdd={onSave} isAdd={stopInsertModeHandler}/>

    const noContent = <button onClick={newExpenseHandler}>새로운 지출 추가하기</button>;

    return (
        <div className="new-expense">
            {isAddExpense ? newExpenseContent : noContent}
            {/*<ExpenseForm onAdd={onSave} isAdd={[isAddExpense, setAddExpense]}/>*/}
            {/*{noContent}*/}
        </div>
    );
};

export default NewExpense;