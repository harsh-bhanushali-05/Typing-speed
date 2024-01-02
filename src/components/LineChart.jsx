import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function LineChart(props) {
    const [dat, setData] = useState({
        labels: props.data.map((data) => data.time),
        datasets: [{
            label: "WPM",
            data: props.data.map((data) => data.wordsPerSecond)
        }]
    });
    console.log(props.data);
    return (
        <Line data={dat} />
    );
}

export default LineChart;

