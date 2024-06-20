import React, {useRef, useState} from 'react';
import ResultModal from "./ResultModal";

// 여기에 timer을 선언하면 app.js에 있는 모든 TimerChallenge가 이 한가지의 timer을 사용한다.
// let timer;

const TimerChallenge = ({title, targetTime}) => {

    // timer를 ref변수로 관리
    // ui렌더링에 영향을 안주고 component안에 데이터를 유지하기 위해 useRef를 사용
    const timer = useRef();


    // stop을 눌렀을 때 남은시간을 상태값으로 관리
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    // 자식컴포넌트 ResultModal에 있는 dialog태그의 참조를 만듬
    const dialog = useRef();

    // 시간이 타임오버되었을 때 처리
    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    // start stop 활성화 조건
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    const startHandler = e => {
        timer.current =
            setInterval(() => {
                setTimeRemaining(prev => prev - 10);
        }, 10)

    }

    // 이 상황에 stop이 작동하지 않는 이유는
    // start시의 timer변수가 지역변수이기 때문에
    // 사애변수의 setter호출시 리렌더링이 되면서 새로운 지역변수로 바뀜
    // stop시의 timer와 start시의 timer는 다른 변수다

    // 전역변수로 timer 설정시 5초 -> 1초 -> 1초 -> 5초를 연속클릭해보면
    // 5초짜리 timer가 정상작동하지 않는 이뉴는
    // 4개의 TimeChallenge 컴포넌트가 1개의 timer를 공유하여
    // 처음 5초짜리 timer가 1초짜리에 의해 덮어씌워지기 때문

    // 해결법 =====================
    // timer를 ref변수로 관리
    const stopHandler = e => {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} remainingTime={timeRemaining/1000}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? stopHandler : startHandler}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;