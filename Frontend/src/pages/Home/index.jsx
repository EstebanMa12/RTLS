/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import ImageWithCaption from "../../components/ImageWithCaption";
import Plot from "react-plotly.js";
const Home = () => {
  return (
    <div className="p-6 ">
      <Header
        title="Sistema de Monitoreo de Inventario en Tiempo Real"
        subtitle="Transformando la gestión de inventarios en el ámbito hospitalario"
      />
      <Plot 
      className="
      border
      bg-white
      w-full"
      data={
        [
          {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: 'scatter'
          },
            {
                x: [1, 2, 3, 4],
                y: [16, 5, 11, 9],
                type: 'scatter'
            }
        ]
      }
      layout={{width: 900, height: 240, title: 'A Fancy Plot'}}
      />
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <p className="text-center">
          &copy; 2024 Proyecto SMTR - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};
export default Home;
