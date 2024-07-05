import React from "react";
import styles from './EventItem.module.scss';
import {Link, useNavigate, useSubmit} from "react-router-dom";

const EventItem = ({ event }) => {

    // action함수를 트리거하는 2번째 방법
    const submit = useSubmit();

    const navigate = useNavigate();

    const {
        title, desc:description, 'img-url': image, 'start-date':date, 'event-id':id,
    } = event

    const clickHandler = e=> {
        e.preventDefault();

        if(!window.confirm("정말로 삭제하시겠습니까?")) return ;

        // action을 트리거
        submit(null, {method:"DELETE"});

        /*
            <Form method='delete'>
         */

    }

    return (
        <article className={styles.event}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <Link to={`/events/${id}/edit`}>Edit</Link>
                <button
                    onClick={clickHandler}
                >Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;