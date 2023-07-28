import React from "react";
import * as echarts from "echarts/core";
import EChartsReactCore from "echarts-for-react/lib/core";

const LineYCategory = ({ data }) => {
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
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      name: data.yaxis,
    },
    yAxis: {
      type: "category",
      name: data.xaxis,
      data: labels,
    },
    series: [
      {
        type: "line",
        data: chartValues,
        symbolSize: 10,
        symbol: "circle",
        smooth: true,
        lineStyle: {
          width: 3,
          shadowColor: "rgba(0,0,0,0.3)",
          shadowBlur: 10,
          shadowOffsetY: 8,
        },
      },
    ],
  };

  //   const chartContainer = document.getElementById("Line-Y-Category");
  //   const chart = echarts.init(chartContainer);
  //   chart.setOption(option);
  // };
  // useEffect(() => {
  //   renderChart();
  // }, []);

  return (
    <div>
      <EChartsReactCore
        option={option}
        echarts={echarts}
        style={{ height: "400px", width: "60%" }}
      />
    </div>
  );
};

export default LineYCategory;
