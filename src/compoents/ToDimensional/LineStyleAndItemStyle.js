import React, { useEffect } from "react";
import * as echarts from "echarts/core";
import EChartsReactCore from "echarts-for-react/lib/core";
const LineStyleAndItemStyle = ({ data }) => {
  // const renderChart = () => {
  const { datasets, labels } = data;
  const chartValues = datasets[0].data;

  const option = {
    title: {
      text: data.modifiedQuery,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: labels,
      name: data.xaxis,
    },
    yAxis: {
      type: "value",
      name: data.yaxis,
    },
    series: [
      {
        type: "line",
        data: chartValues,
        symbol: "triangle",
        symbolSize: 20,
        lineStle: {
          color: "#4850C6",
          width: 4,
          type: "dot",
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: "#ee6666",
          color: "green",
        },
      },
    ],
  };

  //   const chartContainer = document.getElementById("lineStyle-itemStyle");
  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(option);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div
    // id="lineStyle-itemStyle"
    // style={{ height: "400px", width: "60%" }}
    >
      <EChartsReactCore
        echarts={echarts}
        option={option}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};

export default LineStyleAndItemStyle;
