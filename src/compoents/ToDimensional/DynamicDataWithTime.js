import React from "react";

const DynamicDataWithTime = ({ data }) => {
  const renderChart = () => {
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

    const chartContainer = document.getElementById("pie-chart-container");
    const chart = echarts.init(chartContainer);
    chart.setOption(option);
  };
  useEffect(() => {
    renderChart();
  }, []);

  return (
    <div
      id="pie-chart-container"
      style={{ height: "400px", width: "60%" }}
    ></div>
  );
};

export default DynamicDataWithTime;
