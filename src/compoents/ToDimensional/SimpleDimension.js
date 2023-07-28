import React, { useEffect, useState } from "react";
import SimpleLine from "./SimpleLine";
import axios from "axios";
import CurvedLine from "./CurvedLine";
import AreaChart from "./AreaChart";
import LineStyleAndItemStyle from "./LineStyleAndItemStyle";
import LineYCategory from "./LineYCategory";

const SimpleDimension = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      let data = await axios.post(
        "http://intentbidev.southeastasia.cloudapp.azure.com/teamsorgs/report",
        {
          datasetname: "salesdata",
          query: "Average of Price by Brand",
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
      {data && <SimpleLine data={data} />}
      {data && <CurvedLine data={data} />}
      {data && <AreaChart data={data} />}
      {data && <LineStyleAndItemStyle data={data} />}
      {data && <LineYCategory data={data} />}
    </div>
  );
};

export default SimpleDimension;
