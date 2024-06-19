import React, {useState} from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({td, deleteTodo, checkTodo, key}) => {

    const [isFinish,setIsFinish] = useState(false);

    const checkTodoList = () => {
        if(isFinish) {
            setIsFinish(false);
            checkTodo(false);
        } else {
            setIsFinish(true);
            checkTodo(true);
        }
    }

    const deleteTodoList = () => {
        deleteTodo(td, isFinish);
    }


    return (
        <>
            <li className='todo-list-item' >
                <div className='check-circle' onClick={checkTodoList}>
                    <MdDone/>
                </div>
                <span className={isFinish ? 'text finish' : 'text'}>{td}</span>
                <div className='remove' onClick={deleteTodoList}>
                    <MdDelete/>
                </div>
            </li>
        </>

    );
};

export default TodoItem;