import React, {useState} from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";
import todoItem from "./TodoItem";


const DUMMY_TODOS = [
    {id: 1, title: '리액트 공부', done: true},
    {id: 2, title: '점심 먹기', done: false},
    {id: 3, title: '프로젝트', done: false}
]

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(DUMMY_TODOS);

    const makeNewId = () => {
        if(todoList.length < 1) return 1;
        return todoList[todoList.length - 1].id + 1;
    }

    // 데이터 상향식 전달을 위한 함수를 생성 (TodoInput에서 할 일을 끌어올리는 역할)
    const addTodo = (newTodoTitle) => {
        const newTodo= {
            id : makeNewId(),
            title : newTodoTitle,
            done : false
        }

        setTodoList(prevTodoList => [...prevTodoList, newTodo]);
    };

    const removeTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };


    return (
        <div className='TodoTemplate'>
            <TodoHeader/>
            <TodoMain todos={todoList} onRemove={removeTodo}/>
            <TodoInput onAdd={addTodo}/>
        </div>
    );
};

export default TodoTemplate;