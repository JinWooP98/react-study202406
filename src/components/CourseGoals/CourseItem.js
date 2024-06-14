import React from 'react';
import './CourseItem.css'

const CourseItem = ({item, onDeleteGoal}) => {

    const deleteHandler = e => {
        // 여기서 App.js에게 삭제 대상의 id를 전달
        onDeleteGoal(e.target.id);
    }

    return (
        <li className={'goal-item'} onClick={deleteHandler} id={item.id}>{item.text}</li>
    );
};

export default CourseItem;