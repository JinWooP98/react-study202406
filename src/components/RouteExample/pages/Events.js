import React, {useEffect, useState} from 'react';
import EventList from "../components/EventList";
import EventSkeleton from "../components/EventSkeleton";

// npm install loadsh
import {debounce, throttle} from "lodash";


const Events = () => {

    // loader가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();

    // 서버에서 가져온 이벤트 목록
    const [events, setEvents] = useState([]);

    // 로딩 상태 체크
    const [loading, setLoading] = useState(false);

    // 현재 페이지 번호
    const [currentPage, setCurrentPage] = useState(1);

    // 더이상 가져올 데이터가 있는지 확인
    const [isFinish, setIsFinish] = useState(false);

    // 서버로 목록 조회 요청
    const loadEvents = async () => {
        if(isFinish) {
            return;
        }

        console.log('start loading...');
        setLoading(true);

        const response = await fetch(`http://localhost:8282/events/page/${currentPage}?sort=date`);
        const {events:loadedEvents, totalCount} = await response.json();

        const updatedEvents = [...events, ...loadedEvents];
        setEvents(updatedEvents);
        setLoading(false);
        // 로딩이 끝나면 페이지번호를 1 늘려놓는다.
        setCurrentPage(prevPage => prevPage + 1);
        console.log('endLoading!!')

        // 로딩이 끝나면 더 이상 가져올게 있는지 확ㅇ
        setIsFinish(totalCount === updatedEvents.length);

    }

    // 초기 이벤트 1페이지 목록 가져오기
    useEffect(() => {
        loadEvents();
    }, []);

    // 스크롤 이벤트 핸들러
    const scrollHandler =throttle(() => {

        if(loading ||
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
        ) {
            return;
        }

        loadEvents();
    }, 2000);


    // 스크롤 이벤트 바인딩
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            scrollHandler.cancel(); // 스크롤 취소
        }
    }, [currentPage, loading]);



    return (
    <>
        <EventList eventList={events} />
        {loading && <EventSkeleton />}
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱
// export const loader = async () => {
//     // 이 페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
//     // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다.
//
//     // console.log('loader call!!');
//     const response = await fetch('http://localhost:8282/events/page/3?sort=date');
//
//     // const jsonData = await response.json();
//     if(!response.ok) {
//         const errorText = await response.text();
//         throw json/*new Response*/(
//             ({message: errorText}),
//             {
//               status: response.status
//             },
//             );
//     }
//
//     // loader가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트에서
//     // 언제든 불러서 사용할 수 있다.
//
//     // loader에서 fetch의 결과를 바로 리턴하면 알아서 json을 추출해줌.
//     return response; // ok일 경우 events[]
// };
