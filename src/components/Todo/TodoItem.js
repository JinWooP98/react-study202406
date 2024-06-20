import React, {useState} from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({ item, onRemove, onCheck }) => {

    const { title, done } = item;

    // 삭제 클릭 이벤트
    const removeHandler = e => {

        onRemove(item.id);

    };

    const checkHandler = e => {
        onCheck(item.id);
    }

    return (
        <>
            <li className='todo-list-item' >
                <div className={`check-circle ${done ? 'active' : undefined}`} onClick={checkHandler} >
                    {done && <MdDone/>}
                </div>
                <span className={`text ${done ? 'finish' : undefined}`}>{title}</span>
                <div className='remove' onClick={removeHandler}>
                    <MdDelete />
                </div>
            </li>
        </>

    );
};

export default TodoItem;