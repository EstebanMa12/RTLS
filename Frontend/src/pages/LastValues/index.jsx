/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

import GetCards from "@/components/GetCards";
import Header from "../../components/Header";

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
  }, [values, buttons]);

  return (
    <>
      <div className="p-6">
        <Header
          title="Ultimos valores de sensores y botones"
          subtitle="A continuación podrá en contrar los ultimos dos valores del sensor de movimiento y del botón de emergencia."
        />
        <h3
          className="
            text-gray-500
            text-sm
            md:text-base
            
          "
        >
          Para cada valor se muestra el estado actual y el tiempo transcurrido
          despues de la última actualización.
        </h3>
        <span
          className="
            text-gray-500
            text-sm
            md:text-base
            "
        >
          Puede realizar acciones como editar o eliminar los valores.
        </span>
      </div>
      <main className="flex w-full h-fit gap-6 p-6 items-center">
        <GetCards values={values} type={"sensor"} fetchData={fetchData} />
        <GetCards values={buttons} type={"button"} fetchData={fetchData} />
      </main>
    </>
  );
};

export default LastValues;
