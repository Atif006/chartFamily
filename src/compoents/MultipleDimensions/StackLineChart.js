import React, { useEffect } from "react";
import * as echarts from "echarts";
import EChartsReactCore from "echarts-for-react/lib/core";

const StackLineChart = ({ data }) => {
  // const renderChart = () => {
  let sereiesData = data.datasets.map((dset) => {
    return {
      data: dset.data,
      name: dset.label,
      stack: "Total",
      type: "line",
      yAxisID: dset.yAxisID,
    };
  });
  let multiOption = {
    title: {
      text: data.modifiedQuery,
      left: "center",
      top: 20,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      top: 40,
      left: "center",
    },
    xAxis: [
      {
        type: "category",
        data: data.labels,
        boundaryGap: false,
      },
    ],
    yAxis: {
      type: "value",
      name: data.yAxis,
    },
    series: sereiesData,
  };

  //   const chartContainer = document.getElementById("chart-container");
  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(multiOption);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div
    //  id="chart-container" style={{ height: "500px", width: "60%" }}
    >
      <EChartsReactCore
        option={multiOption}
        echarts={echarts}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};
export default StackLineChart;
