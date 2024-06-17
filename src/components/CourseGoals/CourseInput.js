import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({addGoal}) => {


    // 목표 인풋에 입력한 값
    const [enteredText, setEnteredText] = useState('');

    // 입력값 검증을 통과했는지 여부를 상태관리
    const [isValid, setIsValid] = useState(true);

    const addUserGoal = e => {
        e.preventDefault();

        if(enteredText.trim().length === 0) {
            setIsValid(false);
            return;
        }

        const newGaolObject = {
            id:Math.random().toString(),
            text: enteredText
        };
        console.log(newGaolObject);

        addGoal(newGaolObject);

        setEnteredText('');
    }

    const goalChangeHandler = (e) => {

        const inputValue = e.target.value;

        // 입력값 검증
        if(inputValue.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredText(inputValue);
    }


    return (
        <form onSubmit={addUserGoal}>
            <div className="form-control">
                <label>나의 목표</label>
                <input
                    value={enteredText}
                    type="text"
                    onChange={goalChangeHandler}
                    style={{
                        backgroundColor: isValid?'transparent': 'salmon',
                        borderColor:isValid?'black':'red'
                    }}
                />
            </div>
            <Button type="submit" >목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;