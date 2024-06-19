import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({todoList, restTodo}) => {

    const nowDate = new Date();

    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;
    const date = nowDate.getDate();

    const days = new Array(7);
    days[0] = "일";
    days[1] = "월";
    days[2] = "화";
    days[3] = "수";
    days[4] = "목";
    days[5] = "금";
    days[6] = "토";

    const day = days[nowDate.getDay()];

    const dateToString = `${year}년 ${month}월 ${date}일`


    return (
        <header>
            <h1>{dateToString}</h1>
            <div className='day'>{day}요일</div>
            <div className='tasks-left'>할 일 {restTodo}개 남음</div>
        </header>
    );
};

export default TodoHeader;