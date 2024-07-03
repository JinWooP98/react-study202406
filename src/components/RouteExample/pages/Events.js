import React from 'react';
import {useLoaderData} from 'react-router-dom';
import EventList from "../components/EventList";



const Events = () => {

    // loader가 리턴한 데이터 받아오기
    const eventList = useLoaderData();

    return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;
