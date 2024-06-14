import React from 'react';
import './CourseList.css';
import CourseItem from "./CourseItem";

const CourseList = ({items, onDeleteGoal}) => {
    return (
        <ul className='goal-list'>
            {
                items.map(item => <CourseItem key={item.id} item={item} onDeleteGoal={onDeleteGoal} />)
            }
        </ul>
    );
};

export default CourseList;