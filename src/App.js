
import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

/*
    입력하고 추가하기 버튼 누르면 아래 list 가 추가되게

    목표바를 클릭 or 더블클릭하면 삭제되도록
 */





const App = () => {

    // 기본 더미 데이터
    const DUMMY_DATA = [
        {
            id: 'g1',
            text: '리액트 컴포넌트 스타일링 마스터하기'
        },
        {
            id: 'g2',
            text: 'UI/UX 프로그래밍 마스터하기'
        }
    ];

    const [goals, setGoals] = useState(DUMMY_DATA);

    // CourseInput에게 전달할 함수
    const onAddGoalHandler = (goalObject) => {
      setGoals([...goals, goalObject]);
    };

    const onDeleteGoalHandler =(id) => {

        // goals.splice(goals.findIndex(g => g.id === id), 1);

        setGoals([...goals.filter(g => g.id !== id)]);
    }

    return (
        <div>
            <section id="goal-form">
                <CourseInput addGoal={onAddGoalHandler}/>
            </section>
            <section id="goals">
                <CourseList items={goals} onDeleteGoal={onDeleteGoalHandler}/>
            </section>
        </div>
    );
};

export default App;


// 지출게시판 ====================================================================================
// import './App.css';
// import React, {useState} from "react";
// import ExpenseList from "./components/expenses/ExpenseList";
// import NewExpense from "./components/new-expense/NewExpense";
// import CheckBoxStyle from "./components/practice/CheckBoxStyle";
//
// const App = () => {
//
//     // jsx 문법
//     // const $h2 = React.createElement('h2', null, '햄토리');
//     // const $h2 = <h2>햄토리</h2>
//     // jsx 규칙
//     // 1. return 안에있는 태그는 반드시 하나의 태그로 묶여야 함.
//     // 2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
//     // 3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
//     // 4. label 태그의 for 속성은 htmlFor으로 표기
//     // 5. 의미없는 부모는 <React.Fragment>로 묶어준다.
//     // 6. 변수값이나 함수를 출력할 때는 {}로 감싸면 된다.
//     // 7. 변수값을 넣을때 문자열은 {} 생략 가능 다른 타입은 반드시 써주어야 한다.
//
//     // 서버에서 지출항목 JSON 배열을 응답받았다고 가정
//     const expenses = [
//         {
//             title:'덮밥',
//             price: 8000,
//             date: new Date(2021, 6 - 1, 3)
//         },
//         {
//             title:'돈까스',
//             price: 9500,
//             date: new Date(2024, 5 - 1, 7)
//         },
//         {
//             title:'맥주',
//             price: 10500,
//             date: new Date(2024, 6 - 1, 12)
//         },
//         {
//             title:'짜장면',
//             price:10500,
//             date: new Date(2022,3-1,8)
//         },
//         {
//             title:'파파존스피자',
//             price:35000,
//             date: new Date(2020,9-1,4)
//         }
//     ];
//
//     // 배열을 상태변수로 관리
//     const [expenseList, setExpenseList] = useState(expenses)
//
//     // ExpenseForm에게 내려보낼 함수
//     const onAddExpense = (userInput) => {
//         setExpenseList([...expenseList, userInput]);
//     };
//
//     return (
//         <>
//             <NewExpense onSave={onAddExpense}/>
//             <ExpenseList expenses={expenseList} />
//         </>
//     );
// }
//
// export default App;
