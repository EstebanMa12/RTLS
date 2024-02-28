import Header from "../../components/Header";
const Home = () => {
    return (
        <div className="p-6">
            <Header title="Sistema de Monitoreo de Inventario en Tiempo Real" subtitle="Transformando la gestión de inventarios en el ámbito hospitalario" />
        
            <main className="container mx-auto mt-8">
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Introducción</h2>
                <p className="text-gray-700">
                    En general, para que las actividades logísticas tengan un buen resultado se deben cumplir siete
                    condiciones: el material adecuado, en el momento adecuado, en la cantidad adecuada, por el costo
                    adecuado, de la calidad adecuada, con la información adecuada en el lugar adecuado.
                    Si se cumplen estas características, se habla de una buena gestión logística [1].
                </p>

            </section>
                <section className="bg-white p-6 rounded-lg shadow-md mt-4">
                <h2 className="text-2xl font-semibold mb-4">Antecedentes</h2>
                <p className="text-gray-700">
                    En el ámbito hospitalario, la gestión de inventarios ha enfrentado desafíos con procesos manuales y sistemas tradicionales. La adopción de tecnologías como el Internet de las Cosas (IoT) y las Tecnologías de la Información y Comunicación (TICs) ha mostrado prometedores resultados.
                </p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md mt-4">
                    <h2 className="text-2xl font-semibold mb-4">Implementaciones Previas</h2>
                    <p className="text-gray-700">
                        En estudios como el de María, se evaluó la eficiencia de un sistema de tracking de pacientes quirúrgicos en el Hospital Val d&apos;Hebron. Resultados revelaron mejoras significativas en el número de procedimientos realizados y reducción de tiempos.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Juan Diego Calle abordó la necesidad de seguimiento de pacientes en hospitales mediante un sistema de identificación y seguimiento con tecnología RFID, presentando beneficios aunque identificando retos como interferencias y deterioro de etiquetas RFID.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Cynthia Villalba propuso el uso de RFID en un contexto de Monitoreo de Inventario en Tiempo Real (SMTR) en el &quot;Hospital de Clínicas&quot; en Paraguay, demostrando el potencial de la implementación de tecnologías avanzadas para mejorar la eficiencia y gestión.
                    </p>
                </section>
  </main>

  <footer className="bg-gray-800 text-white p-4 mt-8">
    <p className="text-center">&copy; 2024 Proyecto SMTR - Todos los derechos reservados</p>
  </footer>

            
        </div>
    );
    }
    export default Home;