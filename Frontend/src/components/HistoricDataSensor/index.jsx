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

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
        text: "Historic data sensor",
      },
    },
  };
  const [page, setPage] = useState(1);
  const [activeTimeData, setActiveTimeData] = useState([]);
  const [inactiveTimeData, setInactiveTimeData] = useState([]);
  const [labels, setLabels] = useState([]);

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
    <div
      className="
    w-[calc(100%-2rem)]
    flex
    flex-col
    items-center
    justify-center
    p-4
    shadow-md
    rounded-md
    md:h-1/2
    "
    >
      <Line data={chartData} options={options} />
      <Pagination>
        <PaginationContent
        className="
        flex
        items-center
        justify-between
        w-full

        ">
          <PaginationPrevious
          className="mr-auto
          cursor-pointer
          "
          onClick={() => {
            setPage(page - 1);
          }}
          >Previous</PaginationPrevious>
          <PaginationNext
          className="ml-auto
          cursor-pointer 
          "
          onClick={() => {
            setPage(page + 1);
          }}
          >Next</PaginationNext>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default HistoricDataSensor;
