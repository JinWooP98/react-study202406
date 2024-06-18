import React, {useState} from 'react';
import './App.css'
import MainHeader from "./components/SideEffect/MainHeader";
import Login from "./components/SideEffect/Login";
import Home from "./components/SideEffect/Home";

const App = () => {

    // 현재 로그인 상태를 체크하는 변수
    const [isLoggedIn, setIsloggedIn] = useState(false);

    // localStorage에서 login-flag를 꺼냄
    const storedLoginFlag = localStorage.getItem('login-flag');
    // 로그인 검사를 초기에 1번만 수행
    if(storedLoginFlag === '1') {
        // 상태변수가 setter로 변경되면
        // 리액트는 변경감지 후 바로 리렌더링을 수행함
        setIsloggedIn(true);
    }

    // 서버 통신은 중앙집중 관리가 중요함
    const loginHandler = (email, password) => {
        // 로그인의 증거로 클라이언트에 1이라는 숫자를 기록
        localStorage.setItem('login-flag', '1');
        setIsloggedIn(true);
    };

    return (
        <>
            <MainHeader />
            <main>
                {isLoggedIn && <Home />}
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
            </main>

        </>
    );
};

export default App;