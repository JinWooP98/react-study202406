import React, {useState} from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";


const TodoTemplate = () => {

    const [todoList, setTodoList] = useState([]);
    const [restTodo, setRestTodo] = useState(0);

    const checkTodo = (ischeck) => {
        if(ischeck) {
            setRestTodo(restTodo - 1);
        } else {
            setRestTodo(restTodo + 1);
        }

    }

    const addTodoList = (todo) => {
        setTodoList([...todoList, todo]);
        setRestTodo(restTodo + 1);
        console.log(todoList);
    }

    const deleteTodo = (todo, isChecked) => {
        const newtodoList = todoList.filter((td) => td !== todo);
        setTodoList([...newtodoList]);
        if(!isChecked) setRestTodo(restTodo - 1);
    }



    return (
        <div className='TodoTemplate'>
            <TodoHeader restTodo={restTodo} />
            <TodoMain todoList={todoList} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
            <TodoInput addTodoList={addTodoList}/>
        </div>
    );
};

export default TodoTemplate;