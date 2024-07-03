import React from 'react';
import EventNavigation from "./EventNavigation";
import {Outlet} from "react-router-dom";

const EventLayout = () => {
    return (
        <>
            <EventNavigation />
            <Outlet />
        </>
    );
};

export default EventLayout;