/* eslint-disable no-unused-vars */
import HistoricData from "@/components/HistoricData";
import { useEffect, useState } from "react";
import axios from "axios";
const ButtonPage = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Historic States Button",
      },
    },
  };
  const [activeTimeData, setActiveTimeData] = useState([]);
  const [inactiveTimeData, setInactiveTimeData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [page, setPage] = useState(1);

  const pageSize = 10;
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/button/?page=${page}&pageSize=${pageSize}/`
      )
      .then((res) => {
        const historicalData = res.data.paginatedButtons;
        const labels = historicalData.map((data) => data.start.slice(0, 10));

        const activeTimeData = historicalData.map((data) => {
          return data.activeTime;
        });

        const inactiveTimeData = historicalData.map((data) => {
          return data.inactiveTime;
        });

        setLabels(labels);
        setActiveTimeData(activeTimeData);
        setInactiveTimeData(inactiveTimeData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page]);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Active Time (minutes)",
        data: activeTimeData,

        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Inactive Time (minutes)",
        data: inactiveTimeData,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };
  return (
    <>
      <HistoricData chartData={chartData} options={options} page={page} setPage={setPage}/>
    </>
  );
};

export default ButtonPage;
