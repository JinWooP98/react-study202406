import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({addTodoList}) => {


    const [isInput, setIsInput] = useState(false);
    const [userInput, setUserInput] = useState('');

    const changeUserInput = e => {
        setUserInput(e.target.value);
    }

    const TodoInputToggle = () => {
        isInput ? setIsInput(false) : setIsInput(true);
    }

    const submitTodo = e => {
        e.preventDefault();
        addTodoList(userInput);
        e.target.firstElementChild.value = '';
    }

    const renderTodoInput = (
    <>
        <div className='form-wrapper'>
            <form className='insert-form' onSubmit={submitTodo}>
                <input
                    type='text'
                    placeholder='할 일을 입력 후, 엔터를 누르세요!'
                    onChange={changeUserInput}
                />
            </form>
        </div>
        <button onClick={TodoInputToggle} className='insert-btn open'>
            <MdAdd/>
        </button>
    </>
    );

    const renderTodoInput2 = (
        <>
            <button onClick={TodoInputToggle} className='insert-btn'>
                <MdAdd/>
            </button>
        </>
    );


    return (
        <>
            {isInput? renderTodoInput : renderTodoInput2}
        </>
    );
};

export default TodoInput;