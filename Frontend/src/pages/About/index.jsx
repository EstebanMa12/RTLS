import Header from "../../components/Header";
import ImageWithCaption from "../../components/ImageWithCaption";
const About = () => {
  return (
    <div className="p-6 ">
      <Header
        title="Sistema de Monitoreo de Quirofános mediante sensores de movimiento "
        subtitle="Transformando la gestión de quirofános en el ámbito hospitalario"
      />
      <main
        className="container mx-auto mt-8 w-full
            "
      >
        <section
          className="
            bg-white 
            p-6 
            rounded-lg 
            shadow-md 
            grid grid-cols-3 
            gap-6
            "
        >
          <h2 className="text-2xl font-semibold col-span-3">Nuestra Misión</h2>
          <p className="text-gray-700 col-span-2 flex items-center">
            En RTLS , nuestra misión es transformar la gestión de los quirófanos
            a través de tecnologías innovadoras, mejorando la eficiencia
            operativa y la calidad de atención a los pacientes. Creemos que la
            optimización del uso de quirófanos no solo reduce costos y tiempos
            de espera, sino que también salva vidas al facilitar una atención
            médica más rápida y efectiva.
          </p>
          <ImageWithCaption
            src="https://assets-global.website-files.com/62a811481c9610ad2f6310b2/64c2ba8acc53d81d5883bf71_Tipos%20de%20sensores%20de%20movimiento.jpg"
            alt="RTLS"
          />
          <ImageWithCaption
            src="https://tediselmedical.com/wp-content/uploads/2023/11/hospitales_inteligentes_pic03_20231102_tedisel_medical-1440x807.jpg"
            alt="RTLS"
          />
          <p className="text-gray-700 flex items-center col-span-2">
            Nuestro equipo está comprometido con la innovación y la excelencia,
            trabajando en colaboración con hospitales y centros de salud para
            implementar soluciones personalizadas que se adapten a sus
            necesidades específicas. Creemos que la tecnología puede ser una
            herramienta poderosa para mejorar la atención médica y estamos
            comprometidos a hacer una diferencia positiva en la vida de los
            pacientes y el personal médico.
          </p>
        </section>

        {/* planteamiento del problema */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-4 grid grid-cols-3">
          <h2 className="text-2xl font-semibold mb-4 col-span-3">
            ¿Quiénes Somos?
          </h2>
          <p className="text-gray-700 mb-2 col-span-3">
            Somos un equipo multidisciplinario de profesionales apasionados por
            la salud y la tecnología. Con experiencia en ingeniería biomédica,
            análisis de datos, y gestión hospitalaria, nos dedicamos a
            desarrollar soluciones que aborden los desafíos críticos en la
            operación de los quirófanos.
          </p>

          <p className="text-gray-700 mb-2 col-span-2 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 col-span-3 text-left">
              ¿Qué Hacemos?
            </h2>
            Hemos desarrollado una solución avanzada de monitoreo de movimiento
            para quirófanos que utiliza sensores de última generación y
            tecnologías de Internet de las Cosas (IoT). Nuestro sistema recoge y
            analiza datos en tiempo real para proporcionar una visión integral
            del uso del quirófano, permitiendo a los hospitales:
            <li>
              Maximizar la Utilización del Quirófano: Reduciendo el tiempo de
              inactividad y optimizando la programación de cirugías.
            </li>
            <li>
              Mejorar la Planificación y Gestión: Ofreciendo datos precisos y
              análisis predictivos que facilitan la toma de decisiones
              informadas.
            </li>
            <li>
              Aumentar la Satisfacción del Paciente: Reduciendo los tiempos de
              espera y mejorando la experiencia general del paciente.
            </li>
          </p>
          <ImageWithCaption
            src="https://tediselmedical.com/wp-content/uploads/2023/11/hospitales_inteligentes_pic01_20231102_tedisel_medical-1440x960.jpg"
            alt="RTLS"
          />
          <p className="text-gray-700 mb-2">
            La implementación de estos sistemas, respaldada por TICs y el IoT,
            no solo garantiza la integridad de los datos sino que también
            potencia la seguridad y efectividad en la atención médica. La
            capacidad de monitorear y rastrear constantemente los inventarios
            contribuye significativamente a prevenir situaciones críticas, como
            la escasez de suministros médicos. Esta anticipación y respuesta
            proactiva evitan posibles impactos negativos en la salud de los
            pacientes, asegurando la disponibilidad oportuna de los recursos
            necesarios para la atención médica.
          </p>
          <div className="flex  col-span-2">
            <ImageWithCaption
              src="https://cdn.shopify.com/s/files/1/0496/1153/8592/files/PIR_V2.0.gif?v=1630472554"
              alt="RTLS"
            />
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-semibold mb-4">RTLS</h2>
          <p className="text-gray-700">
            Los Sistemas de Localización en Tiempo Real (RTLS) son tecnologías
            que permiten el seguimiento de activos, personas y objetos en tiempo
            real. Estos sistemas se componen de hardware, software y servicios
            que permiten la localización y seguimiento de activos en tiempo
            real.
          </p>
          <p className="text-gray-700 mt-2">
            Los RTLS utilizan diferentes tecnologías para su funcionamiento,
            entre las que se encuentran el GPS, RFID, Bluetooth, Wi-Fi, UWB,
            entre otras. Estas tecnologías permiten la localización de activos
            en tiempo real con una precisión que puede llegar a ser de
            centímetros.
          </p>
          <ImageWithCaption
            src="https://i.gifer.com/MqyW.gif"
            alt="Indoor GPS tracking"
          />
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-semibold mb-4">Objetivo</h2>
          <p className="text-gray-700 mb-2">
            Mediante el desarrollo de este proyecto, se busca implementar un
            Sistema de Monitoreo de In-ventario en Tiempo Real (SMTR) respaldado
            por Tecnologías de la Información y Comunicación(TICs) y el Internet
            de las Cosas (IoT) en el ámbito hospitalario.
          </p>
          <h2 className="text-xl font-semibold mb-3">Objetivos especificos</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>
              Diseñar e implementar un sistema informático que permita la
              automatización del registro y seguimiento de inventarios y equipos
              médicos en tiempo real.
            </li>
            <li>
              Incorporar tecnologías IoT, para facilitar la captura, transmisión
              y almacenamiento de datos relacionados con la ubicación y estado
              de los equipos médicos de manera eficiente y segura.
            </li>
            <li>
              Diseñar y implementar un aplicativo web con una interfaz intuitiva
              que permita a los usuarios, especialmente al personal médico y
              administrativo, monitorear y gestionar el inventario de manera
              sencilla y efectiva.
            </li>
            <li>
              Configurar la comunicación en tiempo real entre el sistema
              implementado y los dispositivos médicos conectados, garantizando
              la actualización inmediata de la información sobre el estado y
              ubicación de los equipos
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
            En el ámbito hospitalario, la gestión de inventarios ha enfrentado
            desafíos con procesos manuales y sistemas tradicionales. La adopción
            de tecnologías como el Internet de las Cosas (IoT) y las Tecnologías
            de la Información y Comunicación (TICs) ha mostrado prometedores
            resultados.
          </p>

          <h2 className="text-2xl font-semibold my-4">
            Implementaciones Previas
          </h2>
          <p className="text-gray-700">
            En estudios como el de María, se evaluó la eficiencia de un sistema
            de tracking de pacientes quirúrgicos en el Hospital Val
            d&apos;Hebron. Resultados revelaron mejoras significativas en el
            número de procedimientos realizados y reducción de tiempos.
          </p>
          <p className="text-gray-700 mt-2">
            Juan Diego Calle abordó la necesidad de seguimiento de pacientes en
            hospitales mediante un sistema de identificación y seguimiento con
            tecnología RFID, presentando beneficios aunque identificando retos
            como interferencias y deterioro de etiquetas RFID.
          </p>
          <p className="text-gray-700 mt-2">
            Cynthia Villalba propuso el uso de RFID en un contexto de Monitoreo
            de Inventario en Tiempo Real (SMTR) en el &quot;Hospital de
            Clínicas&quot; en Paraguay, demostrando el potencial de la
            implementación de tecnologías avanzadas para mejorar la eficiencia y
            gestión.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
