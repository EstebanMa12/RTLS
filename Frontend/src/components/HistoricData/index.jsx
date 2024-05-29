/* eslint-disable react/prop-types */
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

import {
  Pagination,
  PaginationContent,
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

const HistoricData = ({ chartData, options, page, setPage }) => {
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
    md:h-5/6
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
        "
        >
          <PaginationPrevious
            className="mr-auto
          cursor-pointer
          "
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </PaginationPrevious>
          <PaginationNext
            className="ml-auto
          cursor-pointer 
          "
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </PaginationNext>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default HistoricData;
