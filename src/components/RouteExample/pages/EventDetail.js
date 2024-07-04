import React, {useEffect, useState} from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {

    const [ev, setEv] = useState({});

    const {eventId: id} = useParams();

    useEffect(() => {

        (async () => {

            const response = await fetch(`http://localhost:8282/events/${id}`);

            const json = await response.json();

            console.log(json)
            setEv(json);
        })();

    }, []);

    return <EventItem event={ev} />
};

export default EventDetail;