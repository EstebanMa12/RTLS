import Header from "../../components/Header";
import ImageWithCaption from "../../components/ImageWithCaption";
const About = () => {
    return (
        <div className="p-6">
            <Header 
                title="Sistema de Monitoreo de Inventario en Tiempo Real" 
                subtitle="Transformando la gestión de inventarios en el ámbito hospitalario" 
            />        
            <main className="container mx-auto mt-8 w-full
            ">
            <section className="
            bg-white 
            p-6 
            rounded-lg 
            shadow-md 
            grid grid-cols-3 
            gap-6
            ">
                <h2 className="text-2xl font-semibold col-span-3">Introducción</h2>
                <p className="text-gray-700 col-span-2 flex items-center">
                    En general, para que las actividades logísticas tengan un buen resultado se deben cumplir siete
                    condiciones: el material adecuado, en el momento adecuado, en la cantidad adecuada, por el costo
                    adecuado, de la calidad adecuada, con la información adecuada en el lugar adecuado.
                    Si se cumplen estas características, se habla de una buena gestión logística .
                </p>
                <ImageWithCaption
                    src= "https://emedingenieria.com/wp-content/uploads/2023/07/maintenance.webp"
                    alt = "RTLS"
                />
                <ImageWithCaption
                    src= "https://www.eoi.es/blogs/madeon/files/2013/06/inventarios1.jpg"
                    alt = "RTLS"
                />
                <p className="text-gray-700 flex items-center col-span-2">
                En este orden de ideas, la gestión de inventarios en hospitales representa un desafío mayor a las aplicaciones en otras industrias debido a la importancia de evitar faltantes en el inventario que puede afectar la salud de los pacientes al no contar los recursos requeridos para un apropiado tratamiento y/o intervención, lo que hace necesario el desarrollo de herramientas que faciliten un manejo efectivo de las existencias para este tipo de instituciones
                </p>
            </section>

            {/* planteamiento del problema */}
            <section className="bg-white p-6 rounded-lg shadow-md mt-4 grid grid-cols-3">
                <h2 className="text-2xl font-semibold mb-4 col-span-3">Justificación</h2>
                <p className="text-gray-700 mb-2 col-span-3">
                    La gestión de inventarios en hospitales es un proceso crítico que requiere de una atención especial debido a la importancia de contar con los recursos necesarios para garantizar la atención de los pacientes. 
                </p>
                <p className="text-gray-700 mb-2 col-span-2 flex items-center">
                La implementación de Sistemas de Monitoreo de Inventario en Tiempo Real (SMTR) se presenta como una respuesta eficaz a los desafíos que enfrenta el ámbito hospitalario en la gestión de inventarios y equipos médicos. Estos sistemas ofrecen una solución integral al problema, al proporcionar un registro automatizado de productos y bienes, así como la capacidad de realizar un seguimiento constante dentro de áreas específicas monitoreadas
                </p>
                <ImageWithCaption
                    src= "https://www.hhmglobal.com/wp-content/uploads/articles/23092/RTL_Systems.jpg"
                    alt = "RTLS"
                />
                <p className="text-gray-700 mb-2">
                La implementación de estos sistemas, respaldada por TICs y el IoT, no solo garantiza la integridad de los datos sino que también potencia la seguridad y efectividad en la atención médica. La capacidad de monitorear y rastrear constantemente los inventarios contribuye significativamente a prevenir situaciones críticas, como la escasez de suministros médicos. Esta anticipación y respuesta proactiva evitan posibles impactos negativos en la salud de los pacientes, asegurando la disponibilidad oportuna de los recursos necesarios para la atención médica.
                </p>
                <div className="flex  col-span-2">
                    <ImageWithCaption
                        src="https://rmsomega.com/wp-content/uploads/2021/09/Sewio-RTLS-Use-Case_-Indoor-Location-Tracking-Positioning-low-1.gif"
                        alt="RTLS"
                    />
                </div>

            </section>
            <section className="bg-white p-6 rounded-lg shadow-md mt-4">
                <h2 className="text-2xl font-semibold mb-4">RTLS</h2>
                <p className="text-gray-700">
                    Los Sistemas de Localización en Tiempo Real (RTLS) son tecnologías que permiten el seguimiento de activos, personas y objetos en tiempo real. Estos sistemas se componen de hardware, software y servicios que permiten la localización y seguimiento de activos en tiempo real.
                </p>
                <p className="text-gray-700 mt-2">
                    Los RTLS utilizan diferentes tecnologías para su funcionamiento, entre las que se encuentran el GPS, RFID, Bluetooth, Wi-Fi, UWB, entre otras. Estas tecnologías permiten la localización de activos en tiempo real con una precisión que puede llegar a ser de centímetros.
                </p>                    
                <ImageWithCaption
                    src = "https://cdn.sewio.net/wp-content/uploads/2020/07/Indoor-GPS-Tracking.png"
                    alt = "Indoor GPS tracking"
                />
            </section>
            <section className="bg-white p-6 rounded-lg shadow-md mt-4">
                <h2 className="text-2xl font-semibold mb-4">Objetivo</h2>
                <p className="text-gray-700 mb-2">
                Mediante el desarrollo de este proyecto, se busca implementar un Sistema de Monitoreo de In-ventario en Tiempo Real (SMTR) respaldado por Tecnologías de la Información y Comunicación(TICs) y el Internet de las Cosas (IoT) en el ámbito hospitalario.
                </p>
                <h2 className="text-xl font-semibold mb-3">Objetivos especificos</h2>
                <ul className="text-gray-700 list-disc list-inside">
                    <li>Diseñar e implementar un sistema informático que permita la automatización del registro y seguimiento de inventarios y equipos médicos en tiempo real.</li>
                    <li>Incorporar tecnologías IoT, para facilitar la captura, transmisión y almacenamiento de datos relacionados con la ubicación y estado de los equipos médicos de manera eficiente y segura.</li>
                    <li>Diseñar y implementar un aplicativo web con una interfaz intuitiva que permita a los usuarios, especialmente al personal médico y administrativo, monitorear y gestionar el inventario de manera sencilla y efectiva.</li>
                    <li>
                    Configurar la comunicación en tiempo real entre el sistema implementado y los dispositivos médicos conectados, garantizando la actualización inmediata de la información sobre el estado y ubicación de los equipos
                    </li>
                </ul>

            </section>

                {/* <ImageWithCaption
                    src= "https://www.mokosmart.com/wp-content/uploads/2021/08/What-is-an-RTLS.webp"
                    alt = "RTLS"
                /> */}



                <section className="bg-white p-6 rounded-lg shadow-md mt-4">
                <h2 className="text-2xl font-semibold mb-4">Antecedentes</h2>
                <p className="text-gray-700 ">
                    En el ámbito hospitalario, la gestión de inventarios ha enfrentado desafíos con procesos manuales y sistemas tradicionales. La adopción de tecnologías como el Internet de las Cosas (IoT) y las Tecnologías de la Información y Comunicación (TICs) ha mostrado prometedores resultados.
                </p>
         

           
                    <h2 className="text-2xl font-semibold my-4">Implementaciones Previas</h2>
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

export default About;