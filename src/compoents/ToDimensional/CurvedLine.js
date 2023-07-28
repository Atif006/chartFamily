import React, { useEffect } from "react";
import * as echarts from "echarts";
import EChartsReactCore from "echarts-for-react/lib/core";

const CurvedLine = ({ data }) => {
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
        smooth: true,
      },
    ],
  };

  //   const chartContainer = document.getElementById("curved-Line-Chart");
  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(option);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div
    //  id="curved-Line-Chart" style={{ height: "400px", width: "60%" }}
    >
      <EChartsReactCore
        option={option}
        echarts={echarts}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};

export default CurvedLine;
