/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

import GetCards from "@/components/GetCards";

const LastValues = () => {
  const [values, setValues] = useState([]);
  const [buttons, setButtons] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/sensor/`)
      .then((res) => {
        const { values, buttons } = res.data;
        setValues(values);
        setButtons(buttons);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GetCards values={values} type={"sensor"} fetchData={fetchData} />
      <GetCards values={buttons} type={"button"} fetchData={fetchData} />
    </>
  );
};

export default LastValues;
