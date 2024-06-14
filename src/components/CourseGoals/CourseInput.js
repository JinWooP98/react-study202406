import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({onAddGoal}) => {



    const [enteredText, setEnteredText] = useState('');

    const addUserGoal = e => {
        e.preventDefault();
        const newGaolObject = {
            id:Math.random().toString(),
            text: enteredText
        };
        console.log(newGaolObject);

        onAddGoal(newGaolObject);

        setEnteredText('');
    }



    return (
        <form onSubmit={addUserGoal}>
            <div className="form-control">
                <label>나의 목표</label>
                <input value={enteredText} type="text" onChange={e => setEnteredText(e.target.value)} />
            </div>
            <Button type="submit" >목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;