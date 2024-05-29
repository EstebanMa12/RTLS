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
      
      <div className="flex justify-center mt-8">
        <Button>Botón</Button>
      </div>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <p className="text-center">
          &copy; 2024 Proyecto SMTR - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};
export default Home;
