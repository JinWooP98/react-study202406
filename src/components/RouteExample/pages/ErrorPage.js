import React from 'react';
import MainNavigation from "../layout/MainNavigation";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {

    // 에러가 발생했을 때 throw에 전달한 객체를 읽는 방법
    const error = useRouteError();


    let errorMessage;
    if(error.status === 400) {
        errorMessage  = JSON.parse(error.data).message;
    }

    if(error.status === 404) {
        errorMessage = '페이지를 찾을 수 없습니다. URL을 확인하세요.'
    }



    return (
        <>
            <MainNavigation />
            <main>
                <h1>에러가 발생했습니다.</h1>
                <p>{errorMessage}</p>
            </main>
        </>
    );
};

export default ErrorPage;