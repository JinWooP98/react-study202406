import React, {useState} from 'react';
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({ expenses }) => {

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const onFilterChange = (selectedValue) => {

        setFilteredYear(selectedValue);
    };

    // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
    // const convertToComponentArray = () => {
    //     return expenses
    //         .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
    // }

    return (
        <div className="expenses">
            <ExpenseFilter onFilter={onFilterChange}/>
            {expenses
                .filter(ex => ex.date.getFullYear().toString() === filteredYear)
                .map(({title, price, date}) => (<ExpenseItem
                    key={Math.random().toString()}
                    title={title}
                    price={price}
                    date={date} />))}
        </div>
    );
};

export default ExpenseList;