import React from 'react';
// css를 적용하기 위해선 import에 경로만 입력하면 된다.
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({title, price: exprice, date}) => {


    // 변수 선언
    // const expenseDate = date;
    // const expenseTitle = title;
    // const expensePrice = exprice;

    // 1자리 숫자를 2자리수로 변환하는 함수
    const make2digit = (text) => {
        return text.toString().padStart(2, '0');
    };

    // 함수 선언
    const makeFormattedDate = () => {

        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
    };

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(exprice);


    return (
        <>
            <div className="expense-item">
                <ExpenseDate exDate={date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{formattedPrice}원</div>
                </div>
            </div>
        </>
    );
};

export default ExpenseItem;