import React, {useEffect, useRef} from 'react';

const ResultModal = ({result, targetTime}) => {

    const dialog = useRef();

    useEffect(() => {
        dialog.current.showModal();
    }, []);

    return (
        // dialog는 최근에 나온 태그로, 태그 자체에 modal 기능을 가지고 있다.
        <dialog className="result-modal" ref={dialog} >
            <h2>Your {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
};

export default ResultModal;