import EChartsReactCore from "echarts-for-react/lib/core";
import React from "react";
import * as echarts from "echarts/core";
// import echart from "echarts/core";
// import { GridComponent } from "echarts/components";
// import { LineChart } from "echarts/charts";
// import { UniversalTransition } from "echarts/features";
// import { CanvasRenderer } from "echarts/renderers";

const SimpleLine = ({ data }) => {
  console.log(data);
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
      },
    ],
  };

  //   const chartContainer = document.getElementById("pie-chart-container");
  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(option);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div
    // id="pie-chart-container"
    // style={{ height: "400px", width: "60%" }}
    >
      <EChartsReactCore
        option={option}
        echarts={echarts}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};

export default SimpleLine;
