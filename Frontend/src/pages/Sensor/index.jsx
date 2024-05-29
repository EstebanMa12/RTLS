/* eslint-disable no-unused-vars */
import HistoricData from "@/components/HistoricData";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header";

const Sensor = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Historic Data Sensor",
      },
    },
    layout: {
      padding: 20,
    },
    scale: {
      y: {
        beginAtZero: true,
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
        }/sensors/?page=${page}&pageSize=${pageSize}/`
      )
      .then((res) => {
        const historicalData = res.data.paginatedValues;
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
        <div className="p-6">
          <Header
            title="Datos historicos del sensor de movimiento"
            subtitle="A continuación se muestra la información histórica del sensor de movimiento."
          />
        </div>
      <HistoricData
        chartData={chartData}
        options={options}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Sensor;
