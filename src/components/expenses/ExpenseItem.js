import React, {useState} from 'react';
// css를 적용하기 위해선 import에 경로만 입력하면 된다.
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({title, price: exprice, date}) => {

    // useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
    /*
        - useState훅의 리턴값은 배열이며
        - 첫번째 요소는 상태값의 초기값
        - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter 함수
     */
    const [itemTitle, setItemTitle] = useState(title);
    // console.log('abc: ', abc);

    // 변수 선언
    // const expenseDate = date;
    // const expenseTitle = title;
    // const expensePrice = exprice;

    // // 1자리 숫자를 2자리수로 변환하는 함수
    // const make2digit = (text) => {
    //     return text.toString().padStart(2, '0');
    // };
    //
    // // 함수 선언
    // const makeFormattedDate = () => {
    //
    //     const year = date.getFullYear();
    //     const month = date.getMonth();
    //     const day = date.getDate();
    //
    //     return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
    // };

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(exprice);

    // 이벤트 핸들러 선언
    const clickHandler = e => {

        /*
            useState가 관리하는 상태값은 반드시 setter로만 변경해야 한다.
         */
        setItemTitle('짜장면');
    };

    console.log('렌더링 전');
    return (
            <Card className="expense-item">
                <ExpenseDate exDate={date}/>
                <div className="expense-item__description">
                    <h2>{itemTitle}</h2>
                    <div className="expense-item__price">{formattedPrice}원</div>
                </div>
                <button id={'btn'} onClick={clickHandler}>버튼</button>
                <button id={'btn2'} onMouseOver={e => alert('하하하')}>버튼2</button>
            </Card>
    );
};

export default ExpenseItem;