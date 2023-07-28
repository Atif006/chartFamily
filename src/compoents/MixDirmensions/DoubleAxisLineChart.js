import React, { useEffect } from "react";
import * as echarts from "echarts";
import EChartsReactCore from "echarts-for-react/lib/core";

const DoubleAxisLineChart = ({ data }) => {
  // const renderChart = () => {
  let seriesData = data.datasets.map((dset) => {
    return {
      data: dset.data,
      fill: dset.fill,
      name: dset.label,
      type: dset.type,
      yAxisID: dset.yAxisID,
    };
  });
  let colors = ["#5470c6", "#91cc54", "#ee6666"];
  let chartOption = {
    title: {
      text: data.modifiedQuery,
      left: "center",
    },
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      right: "15%",
      left: "10%",
      bottom: "10%",
    },
    toolbox: {},
    legend: {
      top: "5%",
    },
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      data: data.labels,
    },
    yAxis: [
      {
        type: "value",
        name: data.datasets[0].label,
        position: "right",
        alignTicks: true,
        // interval: 0,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0],
          },
        },
      },
      {
        type: "value",
        name: data.datasets[1].label,
        position: "right",
        alignTicks: true,
        // offset: 80,
        interval: 10,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1],
          },
        },
      },
      {
        type: "value",
        name: data.datasets[2].label,
        position: "left",
        alignTicks: true,
        // interval: -100,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[2],
          },
        },
      },
    ],
    series: seriesData,
  };

  //   const chartContainer = document.getElementById("bar-chart-container");
  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(chartOption);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div
    // id="bar-chart-container"
    // style={{ width: "60%", height: "500px" }}
    >
      <EChartsReactCore
        option={chartOption}
        echarts={echarts}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};

export default DoubleAxisLineChart;
