import React, { useEffect } from "react";
import * as echarts from "echarts";
import EChartsReactCore from "echarts-for-react/lib/core";

const StackAreaChart = ({ data }) => {
  // const renderChart = () => {
  let sereiesData = data.datasets.map((dset) => {
    return {
      data: dset.data,
      name: dset.label,
      stack: "Total",
      type: "line",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
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
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
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

  //   const chartContainer = document.getElementById("Stack-Area-Chart");
  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(multiOption);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div
    // id="Stack-Area-Chart" style={{ height: "500px", width: "60%" }}
    >
      <EChartsReactCore
        option={multiOption}
        echarts={echarts}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};

export default StackAreaChart;
