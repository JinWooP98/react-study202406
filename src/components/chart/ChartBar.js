import React from "react";

import "./ChartBar.css";

const ChartBar = ({label, value, totalExpense}) => {

    // // 인라인 스타일 객체
    // const fillStyle = {
    //     height: '60%'
    // };




    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: `${(value/totalExpense)*100}%` }}
                ></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;