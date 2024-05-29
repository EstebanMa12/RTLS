/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoricDataSensor = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Historic DATA",
      },
    },
  };
  const [activeTimeData, setActiveTimeData] = useState([]);
  const [inactiveTimeData, setInactiveTimeData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [currentActiveTime, setCurrentActiveTime] = useState(0);
  const [currentInactiveTime, setCurrentInactiveTime] = useState(0);

  const date = new Date();
  date.setHours(date.getHours() - 5);
  // Today date
  const currentDate = date.toISOString().slice(0, 10);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/sensor/report/${currentDate}/`)
      .then((res) => {
        const dailyStats = res.data.dailyStats;
        const currentStats = res.data.currentStats;
        const dailyData = res.data.fiveMinuteIntervals;
        const labels = dailyData.map((data) => data.start.slice(11,16));

        const activeTimeData = dailyData.map((data) => {
            return data.activeTime;
            });

        const inactiveTimeData = dailyData.map((data) => {
            return data.inactiveTime;
            });

        setLabels(labels);
        setActiveTimeData(activeTimeData);
        setInactiveTimeData(inactiveTimeData);
        setCurrentActiveTime(currentStats.activeTime);
        setCurrentInactiveTime(currentStats.inactiveTime);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
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
    <div
      className="w-full
    flex
    items-center
    justify-center
    "
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default HistoricDataSensor;
