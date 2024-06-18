import React from 'react';
import './App.css'
import MainHeader from "./components/SideEffect/MainHeader";
import Login from "./components/SideEffect/Login";

const App = () => {
    return (
        <>
            <MainHeader />
            <main>
                <Login/>
            </main>

        </>
    );
};

export default App;