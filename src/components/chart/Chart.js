import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({dataPoints}) => {
    console.log(dataPoints);


    /*
        dataPoints배열에서 12개 요소의 value를 합산하여 연도 지출 총액을 계산
        그리고 각 Chart바에 해당월지출총액 / 연도지출총액 비율을 전달
     */

    // 1년치 총액


    const totalExpense = dataPoints
        .map(dp => dp.value)
        // accum = 누적값 , curr = 현재값 , 0 = 초기값
        .reduce((accum, curr) => accum + curr, 0 );


    console.log(totalExpense);
    return (
        <div className="chart">
            {
                dataPoints
                    .map(dp => <ChartBar key={dp.label} label={dp.label} value={dp.value} totalExpense={totalExpense}></ChartBar>)
            }
        </div>
    );
};

export default Chart;
