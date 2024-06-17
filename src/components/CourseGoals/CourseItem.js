import React from 'react';
import styles from'./CourseItem.module.css'

const CourseItem = ({item, onDeleteGoal}) => {

    const deleteHandler = e => {
        // 여기서 App.js에게 삭제 대상의 id를 전달
        onDeleteGoal(e.target.id);
    }

    return (
        <li
            className={styles['goal-item']}
            onClick={deleteHandler}
            id={item.id}>{item.text}
        </li>
    );
};

export default CourseItem;