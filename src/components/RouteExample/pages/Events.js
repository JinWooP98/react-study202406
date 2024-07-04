import React from 'react';
import {useLoaderData, json} from 'react-router-dom';
import EventList from "../components/EventList";



const Events = () => {

    // loader가 리턴한 데이터 받아오기
    const eventList = useLoaderData();
    console.log(eventList);
    return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱
export const loader = async () => {
    // 이 페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
    // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다.

    // console.log('loader call!!');
    const response = await fetch('http://localhost:8282/events?sort=date');

    // const jsonData = await response.json();
    if(!response.ok) {
        const errorText = await response.text();
        throw json/*new Response*/(
            ({message: errorText}),
            {
              status: response.status
            },
            );
    }

    // loader가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트에서
    // 언제든 불러서 사용할 수 있다.

    // loader에서 fetch의 결과를 바로 리턴하면 알아서 json을 추출해줌.
    return response; // ok일 경우 events[]
};
