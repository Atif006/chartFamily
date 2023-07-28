import React from "react";
import * as echarts from "echarts/core";
import EChartsReactCore from "echarts-for-react/lib/core";

const AreaChart = ({ data }) => {
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
        areaStyle: {},
      },
    ],
  };

  //   const chartContainer = document.getElementById("Area-Line-Chart");

  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(option);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div
    //  id="Area-Line-Chart" style={{ height: "400px", width: "60%" }}
    >
      <EChartsReactCore
        option={option}
        echarts={echarts}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};

export default AreaChart;
