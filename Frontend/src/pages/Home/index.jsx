/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import { Button } from "@/components/ui/button";
import HistoricDataSensor from "@/components/HistoricDataSensor";
const Home = () => {
  return (
    <div className="p-6 ">
      <Header
        title="Sistema de Monitoreo de Inventario en Tiempo Real"
        subtitle="Transformando la gestión de inventarios en el ámbito hospitalario"
      />
      <HistoricDataSensor />

    </div>
  );
};
export default Home;
