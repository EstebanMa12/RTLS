# Frontend para la Optimización del Uso del Quirófano

## Estructura del Proyecto
- **React**: Librería principal para la construcción de la interfaz.
- **Componentes**:
  - Dashboard
  - Header
  - Footer
  - MovementChart
  - MovementTable
  - Alerts

## Componentes Clave
### Dashboard
- Descripción: Componente principal que muestra el resumen de la actividad en el quirófano.
- Contenido:
  - **Título**: Optimización del Uso del Quirófano
  - **MovementChart**: Gráfica de línea para visualizar los datos de movimiento.
  - **MovementTable**: Tabla con los registros detallados de movimientos.
  - **Heatmap**: (Opcional) Mapa de calor para visualizar picos de actividad.

### Header
- Descripción: Barra de navegación superior.
- Contenido:
  - **Logo**: Logo del hospital o proyecto.
  - **Menú de Navegación**: Enlaces a diferentes secciones (Dashboard, Configuración, Reportes, etc.).

### Footer
- Descripción: Pie de página con información relevante.
- Contenido:
  - **Información de Contacto**: Datos de contacto del equipo técnico.
  - **Enlaces Legales**: Política de privacidad, términos de uso.

### MovementChart
- Descripción: Componente que visualiza los datos de movimiento en una gráfica.
- Tecnología: Chart.js
- Contenido:
  - **Gráfica de Línea**: Representación del movimiento a lo largo del tiempo.
  - **Ejes**:
    - **X**: Tiempos (horas, días).
    - **Y**: Estados de movimiento (1 = Movimiento, 0 = Sin Movimiento).

### MovementTable
- Descripción: Tabla que muestra los registros de movimiento en detalle.
- Contenido:
  - **Columnas**:
    - Timestamp: Fecha y hora del movimiento.
    - Estado: Movimiento detectado (Sí/No).

### Alerts
- Descripción: Sistema de alertas para notificar sobre patrones inusuales.
- Contenido:
  - **Notificaciones**: Alertas visuales y/o auditivas.
  - **Configuración**: Opciones para definir umbrales y tipos de alertas.

## Funcionalidades
### Visualización de Datos
- **Gráficas Interactivas**: Uso de Chart.js para representar datos.
- **Heatmaps**: Opcional para visualizar picos de actividad.

### Interactividad
- **Filtros**: Filtrado de datos por fecha y hora.
- **Actualización en Tiempo Real**: WebSockets para recibir actualizaciones en tiempo real del backend.

### Usabilidad
- **Diseño Responsivo**: Adaptación a diferentes tamaños de pantalla.
- **Accesibilidad**: Cumplimiento de estándares de accesibilidad (WCAG).

### Seguridad
- **Autenticación**: Sistema de login para acceso seguro.
- **Autorización**: Control de acceso basado en roles (administrador, usuario).

## Integración con Backend
- **API Requests**: Uso de Axios para realizar solicitudes al backend.
- **Endpoints**:
  - **GET /movements**: Obtener datos de movimiento.
  - **POST /alerts**: Configurar alertas.

## Herramientas y Librerías
- **React Router**: Para la gestión de rutas y navegación.
- **Axios**: Para realizar solicitudes HTTP.
- **Chart.js**: Para la visualización de datos.
- **Shadcn**: Para el estilizado de componentes.

## Despliegue
- **Hosting**: Vercel, Netlify o similar para el frontend.
- **Configuración**: Variables de entorno para endpoints del backend.

## Pruebas
- **Pruebas Unitarias**: Uso de Jest y React Testing Library.
- **Pruebas de Integración**: Verificación de la comunicación entre frontend y backend.

## Documentación
- **README**: Instrucciones para desarrollo y despliegue.
- **Comentarios en Código**: Explicaciones detalladas dentro del código.

## Mejoras Futuras
- **Análisis Predictivo**: Implementar algoritmos para predecir patrones de uso.
- **Dashboard Personalizado**: Opciones para que los usuarios personalicen su vista del dashboard.

