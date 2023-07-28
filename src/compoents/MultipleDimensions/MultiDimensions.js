import axios from "axios";
import React, { useEffect, useState } from "react";
import StackLineChart from "./StackLineChart";
import StackAreaChart from "./StackAreaChart";

const MultiDimensions = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const data = await axios.post(
        "http://intentbidev.southeastasia.cloudapp.azure.com/teamsorgs/report",
        {
          datasetname: "salesdata",
          query: "weekly Average of Price by Brand",
        }
      );

      setData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data && <StackLineChart data={data} />}
      {data && <StackAreaChart data={data} />}
    </div>
  );
};

export default MultiDimensions;
