import React, {useState} from 'react';
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "../chart/ExpenseChart";

const ExpenseList = ({ expenses }) => {

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const onFilterChange = (selectedValue) => {

        setFilteredYear(selectedValue);
    };

    // 연도로 필터링한 배열
    const filteredExpenses = expenses.filter(ex => ex.date.getFullYear().toString() === filteredYear)

    // 지출데이터가 없을 때 보여줄 태그
    let content = <p>지출 항목이 없습니다.</p>

    // 지출데이터가 있을 때 보여줄 태그
    if(filteredExpenses.length > 0) {
        content = filteredExpenses
            .map(({title, price, date}) => (
                <ExpenseItem
                    key={Math.random().toString()}
                    title={title}
                    price={price}
                    date={date}
                />
            ));
    }



    // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
    // const convertToComponentArray = () => {
    //     return expenses
    //         .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
    // }

    return (
        <div className="expenses">
            <ExpenseFilter onFilter={onFilterChange}/>
            <ExpenseChart onExpenses={filteredExpenses} />
            {content}
        </div>
    );
};

export default ExpenseList;