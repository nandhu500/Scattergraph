import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export const ChartComponent = () => {
  const markerSize = [];
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:5000").then((res) => {
        setSeries(res.data.Message);
        console.log(res.data.Message);
      });
    }
    fetchData();
  }, []);

  const seriesss = series;

  for (let i = 0; i < seriesss.length; i++) {
    markerSize.push(seriesss[i].size);
  }

  const chartData = {
    series: seriesss,
    options: {
      chart: {
        height: 300,
        width: 350,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      legend: {
        show: false,
      },

      title: {
        text: "X Y axis scatter graph",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },

      xaxis: {
        tickAmount: 10,
        min: 0,
        max: 100,
        title: {
          text: "Reported efforts",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          },
        },
      },
      yaxis: {
        tickAmount: 10,
        min: 0,
        max: 100,
        title: {
          text: "Controversies",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          },
        },
      },
      markers: {
        size: markerSize,
        colors: undefined,
        strokeColors: "#003865",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      fill: {
        colors: ["#f39200"],
        opacity: 0.9,
        type: "solid",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="scatter"
        height={300}
      />
    </div>
  );
};

export default ChartComponent;
