import React from "react";

import styles from './EventForm.module.scss';
import {useNavigate, Form} from "react-router-dom";

const EventForm = ({method, event={}}) => {

    const {
        title, desc:description, 'img-url': image, 'start-date':date, 'event-id':id,
    } = event

    // 날짜 형식을 변경 (yyyy-MM-dd)
    /**
     *
     * @param date - yyyy년 MM월 dd일
     */
    const convertDateFormat = (date) => {
        const [yearPart, monthDayPart] = date.split('년 ');
        const [monthPart, dayPart] = monthDayPart.split('월 ');
        const day = dayPart.replace('일', '');

        return `${yearPart}-${monthPart}-${day}`
    };

    let formatDate;

    if(event.date) {
        formatDate = convertDateFormat(date);
    }


    // const {eventId: id} = useParams();
    const navigate = useNavigate();

    const cancelHandler = e=>{
        // window.location.href = '/events' + id;
        // navigate('/events/' + id);
        navigate('..');
    };

    // const submitHandler = e => {
    //     e.preventDefault();
    //
    //     // input에 입력한 값 가져오기
    //     const formData = new FormData(e.target);
    //     // console.log('form: ', formData.get('title'));
    //
    //     const payload = {
    //       title: formData.get('title'),
    //       desc: formData.get('description'),
    //       imageUrl: formData.get('image'),
    //       beginDate: formData.get('date')
    //
    //     };
    //
    //
    //     // 서버로 페칭
    //     (async () => {
    //         const response = await fetch('http://localhost:8282/events', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(payload)
    //         });
    //
    //         navigate('/events');
    //     })();
    // };

    // 2. action함수를 트리거하려면 일반 form을 사용하면 안되고
    // 3. react-router-dom에서 제공하는 Form이라는 컴포넌트를 사용한다.
    // 4. method 옵션을 설정한다.
    return (
        <Form
            method={'post'}
            className={styles.form}
            // onSubmit={submitHandler}
            noValidate>
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" defaultValue={event ? title : ''} required />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" defaultValue={event ? image : ''} required />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" defaultValue={event ? formatDate : ''} required />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" defaultValue={event ? description : ''} required />
            </p>
            <div className={styles.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>{method === 'post' ? 'Save' : 'Modify'}</button>
            </div>
        </Form>
    );
};

export default EventForm;
