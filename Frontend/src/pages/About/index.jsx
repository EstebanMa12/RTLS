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
          <p className="text-gray-700 mb-2 ">
            <h2 className="text-2xl font-semibold mb-4 col-span-3 text-left">
              Nuestra tecnología
            </h2>
            Nuestra plataforma utiliza una combinación de sensores de movimiento
            para monitorizar el flujo de personas dentro del quirófano. Estos
            datos se integran con los sistemas de gestión hospitalaria
            existentes y se analizan para identificar patrones de uso y
            oportunidades de mejora.
          </p>
          <div className="flex  col-span-2">
            <ImageWithCaption
              src="https://cdn.shopify.com/s/files/1/0496/1153/8592/files/PIR_V2.0.gif?v=1630472554"
              alt="RTLS"
            />
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-semibold mb-4">
            Compromiso con la Privacidad y la Seguridad
          </h2>
          <p className="text-gray-700">
            Entendemos la importancia de la privacidad y la seguridad en el
            ámbito de la salud. Por ello, garantizamos que todos los datos
            recolectados son manejados conforme a las normativas de protección
            de datos, asegurando la confidencialidad y seguridad de la
            información.
          </p>
          <p className="text-gray-700 mt-2">
            Nuestra plataforma cumple con los más altos estándares de seguridad
            y encriptación, garantizando que los datos de los pacientes y el
            personal médico estén protegidos en todo momento.
          </p>
          <ImageWithCaption
            src="https://i.gifer.com/MqyW.gif"
            alt="Indoor GPS tracking"
          />
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-semibold mb-4">Únete a Nosotros</h2>
          <p className="text-gray-700 mb-2">
            Estamos comprometidos con la innovación continua y la mejora de la
            atención médica. Si compartes nuestra visión y quieres ser parte de
            esta transformación en la gestión hospitalaria, te invitamos a
            unirte a nosotros como cliente, colaborador o parte de nuestro
            equipo.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
