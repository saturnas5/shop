import React from "react";
import {useLocation, } from 'react-router-dom'


const Badroom = () => {
    const location = useLocation();
    console.log(location)

    return (
        <>
            <div className="badroom-box">

            </div>
        </>
    );
}

export default Badroom;