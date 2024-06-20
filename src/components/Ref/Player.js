import React, {useRef, useState} from "react";

const Player = () => {

    const [enteredName, setEnteredName] = useState('anonymous');

    const $nameInput = useRef()

    const nameChangeHandler = e => {
        e.preventDefault();
        setEnteredName($nameInput.current.value);
        $nameInput.current.value = '';
    };

    return (
        <section id="player">
            <h2>Welcome {enteredName}!</h2>
            <form>
                <p>
                    <input type="text" ref={$nameInput}/>
                    <button onClick={nameChangeHandler}>Set Name</button>
                </p>
            </form>
        </section>
    );
};

export default Player;