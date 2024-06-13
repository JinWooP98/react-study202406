import './App.css';
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";

const App = () => {

    // jsx 문법
    // const $h2 = React.createElement('h2', null, '햄토리');
    // const $h2 = <h2>햄토리</h2>
    // jsx 규칙
    // 1. return 안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    // 2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    // 3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    // 4. label 태그의 for 속성은 htmlFor으로 표기
    // 5. 의미없는 부모는 <React.Fragment>로 묶어준다.
    // 6. 변수값이나 함수를 출력할 때는 {}로 감싸면 된다.
    // 7. 변수값을 넣을때 문자열은 {} 생략 가능 다른 타입은 반드시 써주어야 한다.

    // 서버에서 지출항목 JSON 배열을 응답받았다고 가정
    const expenses = [
        {
            title:'덮밥',
            price: 8000,
            date: new Date(2024, 6 - 1, 3)
        },
        {
            title:'돈까스',
            price: 9500,
            date: new Date(2024, 6 - 1, 7)
        },
        {
            title:'맥주',
            price: 10500,
            date: new Date(2024, 6 - 1, 12)
        }
    ]

    return (
        <>
            <NewExpense/>
            <ExpenseList expenses={expenses} />
        </>
    );
}

export default App;
