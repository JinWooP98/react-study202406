import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({todoList, deleteTodo, checkTodo}) => {

    const list = [];

    for (const todoListElement of todoList) {
        list.push(<TodoItem key={Math.random()} td={todoListElement} deleteTodo={deleteTodo} checkTodo={checkTodo}/>)
    }

    return (
        <ul className='todo-list'>
            {list}
        </ul>
    );
};

export default TodoMain;