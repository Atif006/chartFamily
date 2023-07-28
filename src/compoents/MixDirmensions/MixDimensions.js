import axios from "axios";
import React, { useEffect, useState } from "react";
import DoubleAxisLineChart from "./DoubleAxisLineChart";

const MixDimensions = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const data = await axios.post(
        "http://intentbidev.southeastasia.cloudapp.azure.com/teamsorgs/report",
        {
          datasetname: "salesdata",

          query:
            "sum of Revenue , sum of Profit , sum of Quantity by Brand by Category ",
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

  return <div>{data && <DoubleAxisLineChart data={data} />}</div>;
};

export default MixDimensions;
