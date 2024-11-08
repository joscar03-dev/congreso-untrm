import React from "react";

import { Button, Typography, Container, Box } from "@mui/material";
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";
import EventInfoCard from "./components/EventInfoCard";
import TopicCard from "./components/TopicCard";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import InfographyGallery from "./components/InfographyGallery";
import CallToAction from "./components/CallToAction";
// import VisualContentGallery from "./components/VisualContentGallery";

export default function CongressLandingPage() {
  function getEmbedUrl(url) {
    // Verifica si la URL es de YouTube y usa el formato corto
    const isShortUrl = url.includes("youtu.be");
    if (isShortUrl) {
      const videoId = url.split("youtu.be/")[1]; // Obtiene el ID del video
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Devuelve la URL sin cambios si ya está en el formato correcto
  }

  const infografias = [
    `${process.env.PUBLIC_URL}/assets/Infografia/Data_Science.png`,
    `${process.env.PUBLIC_URL}/assets/Infografia/BiotecnologÍa.png`,
    `${process.env.PUBLIC_URL}/assets/Infografia/Ciberseguridad_y_Protección_de_Datos.png`,
    `${process.env.PUBLIC_URL}/assets/Infografia/Inteligencia_Artificial_y_Machine_Learning.png`,
    `${process.env.PUBLIC_URL}/assets/Infografia/Deep_Learning.png`,
    `${process.env.PUBLIC_URL}/assets/Infografia/Sistemas_Empresariales.png`,
    // Agrega más rutas según sea necesario
  ];
  // const videos = [`${process.env.PUBLIC_URL}/assets/videos/portada.mp4`];
  const temas = [
    {
      name: "Inteligencia Artificial y Machine Learning",
      infography: `${process.env.PUBLIC_URL}/assets/Infografia/Inteligencia_Artificial_y_Machine_Learning.png`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/IA.mp4`,
      questions: [
        {
          question:
            "¿Cuál es el objetivo principal de la inteligencia artificial?",
          options: [
            {
              answer:
                "Crear sistemas inteligentes capaces de aprender y adaptarse",
              correct: true,
            },
            {
              answer:
                "Reemplazar completamente a los seres humanos en todas las tareas",
              correct: false,
            },
            {
              answer: "Mejorar exclusivamente los sistemas de videojuegos",
              correct: false,
            },
          ],
        },
        {
          question: "¿Qué es Machine Learning?",
          options: [
            { answer: "Un conjunto de datos", correct: false },
            {
              answer: "La capacidad de las máquinas para aprender de datos",
              correct: true,
            },
            { answer: "Un programa que almacena datos", correct: false },
          ],
        },
      ],
    },
    {
      name: "Data Science",
      infography: `${process.env.PUBLIC_URL}/assets/Infografia/Data_Science.png`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/data science.mp4`,
      questions: [
        {
          question:
            "¿Cuál de los siguientes lenguajes es ampliamente utilizado en Data Science?",
          options: [
            { answer: "Python", correct: true },
            { answer: "HTML", correct: false },
            { answer: "CSS", correct: false },
            { answer: "Java", correct: false },
          ],
        },
        {
          question: "¿Qué es un modelo de regresión lineal?",
          options: [
            { answer: "Un modelo de clasificación", correct: false },
            {
              answer: "Un modelo para predecir valores numéricos",
              correct: true,
            },
            { answer: "Un tipo de base de datos", correct: false },
            { answer: "Una técnica de visualización", correct: false },
          ],
        },
        {
          question:
            "¿Cuál es el propósito principal de un análisis de datos exploratorio (EDA)?",
          options: [
            { answer: "Probar modelos de Machine Learning", correct: false },
            {
              answer:
                "Entender y resumir las principales características de los datos",
              correct: true,
            },
            { answer: "Optimizar algoritmos", correct: false },
            { answer: "Reducir el tamaño de los datos", correct: false },
          ],
        },
        {
          question: "¿Qué significa el término 'Big Data'?",
          options: [
            {
              answer: "Datos que se pueden almacenar en una hoja de cálculo",
              correct: false,
            },
            {
              answer: "Un conjunto de datos extremadamente grande y complejo",
              correct: true,
            },
            {
              answer: "Un programa de inteligencia artificial",
              correct: false,
            },
            { answer: "Un tipo de almacenamiento de datos", correct: false },
          ],
        },
      ],
    },
    {
      name: "Ciberseguridad y Protección de Datos",
      infography: `${process.env.PUBLIC_URL}/assets/Infografia/Ciberseguridad_y_Protección_de_Datos.png`,
      videoSrc: `https://www.youtube.com/embed/SZlnyFujkGE?autoplay=0`,
      questions: [
        {
          question: "¿Qué es un firewall?",
          options: [
            { answer: "Un sistema operativo", correct: false },
            {
              answer:
                "Una medida de seguridad para monitorear y filtrar el tráfico de red",
              correct: true,
            },
            { answer: "Una herramienta de desarrollo web", correct: false },
            { answer: "Una técnica de encriptación", correct: false },
          ],
        },
        {
          question:
            "¿Qué tipo de ataque busca inundar un servidor con tráfico para que no pueda responder?",
          options: [
            { answer: "Ataque DDoS", correct: true },
            { answer: "Phishing", correct: false },
            { answer: "SQL Injection", correct: false },
            { answer: "Ataque de fuerza bruta", correct: false },
          ],
        },
        {
          question:
            "¿Cuál de las siguientes es una buena práctica para crear contraseñas seguras?",
          options: [
            { answer: "Usar solo números", correct: false },
            {
              answer: "Usar una combinación de letras, números y símbolos",
              correct: true,
            },
            {
              answer: "Usar la misma contraseña para todas las cuentas",
              correct: false,
            },
            { answer: "Usar palabras comunes", correct: false },
          ],
        },
        {
          question: "¿Qué es el phishing?",
          options: [
            {
              answer:
                "Un ataque donde se engaña a una persona para obtener información confidencial",
              correct: true,
            },
            { answer: "Un método de encriptación de datos", correct: false },
            {
              answer: "Una herramienta de desarrollo de software",
              correct: false,
            },
            { answer: "Un tipo de firewall", correct: false },
          ],
        },
      ],
    },
    {
      name: "Biotecnología",
      infography: `${process.env.PUBLIC_URL}/assets/Infografia/BiotecnologÍa.png`,
      videoSrc: getEmbedUrl("https://youtu.be/7p5szEOjMw4"),
      questions: [
        {
          question:
            "¿Cuál de las siguientes es una aplicación de la biotecnología?",
          options: [
            {
              answer:
                "Desarrollo de nuevas cepas de bacterias para limpiar derrames de petróleo",
              correct: true,
            },
            {
              answer: "Desarrollo de nuevas técnicas de programación",
              correct: false,
            },
            {
              answer: "Estudio de algoritmos en la informática",
              correct: false,
            },
            {
              answer: "Reducción de tiempos de procesamiento en computadoras",
              correct: false,
            },
          ],
        },
        {
          question: "¿Qué son los organismos genéticamente modificados (OGM)?",
          options: [
            {
              answer: "Organismos alterados para ser más grandes",
              correct: false,
            },
            {
              answer:
                "Organismos cuyo ADN ha sido alterado mediante ingeniería genética",
              correct: true,
            },
            {
              answer: "Organismos que han sido alterados de forma natural",
              correct: false,
            },
            {
              answer: "Organismos que no existen en la naturaleza",
              correct: false,
            },
          ],
        },
        {
          question:
            "¿Cuál es uno de los principales beneficios de la terapia génica?",
          options: [
            { answer: "Puede curar enfermedades genéticas", correct: true },
            { answer: "Aumenta el tamaño de los organismos", correct: false },
            { answer: "Reduce la necesidad de vacunas", correct: false },
            { answer: "Permite clonar células", correct: false },
          ],
        },
        {
          question: "¿Qué es la clonación?",
          options: [
            {
              answer:
                "Un proceso para crear copias genéticamente idénticas de un organismo",
              correct: true,
            },
            { answer: "Un método de encriptación de datos", correct: false },
            { answer: "Una técnica de ciberseguridad", correct: false },
            {
              answer: "Un proceso para mejorar la seguridad informática",
              correct: false,
            },
          ],
        },
      ],
    },
    {
      name: "Sistemas Empresariales",
      infography: `${process.env.PUBLIC_URL}/assets/infografia/Sistemas_Empresariales.png`,
      videoSrc: getEmbedUrl("https://youtu.be/1F1nRyyswSk"),
      questions: [
        {
          question: "¿Qué es un ERP (Enterprise Resource Planning)?",
          options: [
            {
              answer: "Un software para gestionar recursos empresariales",
              correct: true,
            },
            { answer: "Un sistema operativo", correct: false },
            { answer: "Un método de encriptación de datos", correct: false },
            { answer: "Un programa de diseño gráfico", correct: false },
          ],
        },
        {
          question:
            "¿Cuál de los siguientes es un beneficio de usar un sistema CRM (Customer Relationship Management)?",
          options: [
            { answer: "Mejora la relación con los clientes", correct: true },
            {
              answer: "Aumenta el número de productos en inventario",
              correct: false,
            },
            { answer: "Reduce los costos de hardware", correct: false },
            { answer: "Controla los procesos de fabricación", correct: false },
          ],
        },
        {
          question: "¿Qué significa la sigla BI en sistemas empresariales?",
          options: [
            { answer: "Business Intelligence", correct: true },
            { answer: "Basic Integration", correct: false },
            { answer: "Business Information", correct: false },
            { answer: "Basic Intelligence", correct: false },
          ],
        },
        {
          question: "¿Qué es la minería de datos?",
          options: [
            {
              answer:
                "El proceso de descubrir patrones en grandes volúmenes de datos",
              correct: true,
            },
            { answer: "Un método de encriptación de datos", correct: false },
            { answer: "Una técnica para diseñar software", correct: false },
            { answer: "Un sistema de gestión de proyectos", correct: false },
          ],
        },
      ],
    },
    {
      name: "Deep Learning",
      infography: `${process.env.PUBLIC_URL}/assets/infografia/Deep_Learning.png`,
      videoSrc: getEmbedUrl("https://youtu.be/KytW151dpqU"),
      questions: [
        {
          question: "¿Qué es una red neuronal en Deep Learning?",
          options: [
            {
              answer:
                "Un modelo que simula el funcionamiento del cerebro humano",
              correct: true,
            },
            {
              answer: "Un sistema de gestión de bases de datos",
              correct: false,
            },
            { answer: "Una técnica de ciberseguridad", correct: false },
            {
              answer: "Un modelo para almacenamiento de datos",
              correct: false,
            },
          ],
        },
        {
          question:
            "¿Cuál es el propósito de una capa oculta en una red neuronal?",
          options: [
            {
              answer: "Procesar y transformar datos de entrada",
              correct: true,
            },
            { answer: "Mostrar el resultado final", correct: false },
            { answer: "Almacenar datos de forma permanente", correct: false },
            { answer: "Visualizar datos", correct: false },
          ],
        },
        {
          question:
            "¿Qué técnica es comúnmente utilizada en Deep Learning para prevenir el sobreajuste?",
          options: [
            { answer: "Dropout", correct: true },
            { answer: "Boosting", correct: false },
            { answer: "Normalización", correct: false },
            { answer: "Clusterización", correct: false },
          ],
        },
        {
          question: "¿Qué es el aprendizaje supervisado?",
          options: [
            {
              answer:
                "Un tipo de aprendizaje donde se entrena un modelo con datos etiquetados",
              correct: true,
            },
            { answer: "Un tipo de aprendizaje sin datos", correct: false },
            { answer: "Un modelo de prueba y error", correct: false },
            { answer: "Un método para generar gráficos", correct: false },
          ],
        },
      ],
    },
  ];

  const images = [
    `${process.env.PUBLIC_URL}/assets/carousel/event.jpg`,
    `${process.env.PUBLIC_URL}/assets/carousel/event1.jpg`,
    // Agrega más imágenes según sea necesario
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
      }}
    >
      <header
        style={{
          backgroundColor: "#133E6B",
          color: "#ffffff",
          padding: "16px",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" align="center" fontWeight="bold">
            VI Congreso Internacional de Ingeniería de Sistemas
          </Typography>
          <Typography align="center" mt={2}>
            Universidad Nacional Toribio Rodríguez de Mendoza (UNTRM)
          </Typography>
        </Container>
      </header>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <ImageCarousel images={images} />
        <CallToAction />
        <section>
          <Typography variant="h5" align="center" gutterBottom>
            Información del Evento
          </Typography>

          {/* Event Info Card componente */}
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
            gap={2}
          >
            <EventInfoCard
              icon={CalendarIcon}
              title="Fecha"
              description="15-17 de Noviembre, 2023"
            />
            <EventInfoCard
              icon={MapPinIcon}
              title="Lugar"
              description="Campus UNTRM, Chachapoyas"
            />
            <EventInfoCard
              icon={UsersIcon}
              title="Modalidad"
              description="Presencial y Virtual"
            />
          </Box>
        </section>

        <section>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              mt: 4,
              mb: 2,
              borderBottom: "2px solid #1976d2",
              display: "inline-block",
              paddingBottom: "4px",
            }}
          >
            Temas del Congreso
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={2}
          >
            {temas.map((tema, index) => (
              <TopicCard key={index} topic={tema} />
            ))}
          </Box>
        </section>

        <section>
          <Typography variant="h5" align="center" gutterBottom sx={{ mt: 4 }}>
            Contenido Visual
          </Typography>
          {/* <VisualContentGallery videos={videos} /> */}

          <Box
            sx={{
              width: "100%",
              paddingTop: "56.25%",
              position: "relative",
              my: 2,
            }}
          >
            <video
              src={`${process.env.PUBLIC_URL}/assets/videos/portada.mp4`}
              title="Video de presentación"
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </section>
        <section>
          {/* INFOGRAFIAAAAS */}
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ mt: 4 }}
          ></Typography>
          <InfographyGallery images={infografias} />
        </section>

        <section style={{ textAlign: "center", marginTop: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            ¡Regístrate Ahora!
          </Typography>
          <Typography variant="body1" gutterBottom>
            No pierdas la oportunidad de ser parte de este emocionante evento de
            Ingeniería de Sistemas.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://congresofisme.untrm.edu.pe/"
            sx={{
              backgroundColor: "#133E6B",
              color: "#ffffff", // Color del texto
              "&:hover": {
                backgroundColor: "#0F2D4D", // Color al hacer hover
              },
            }}
          >
            Inscríbete al Congreso
          </Button>
        </section>
      </Container>

      <Footer />
    </Box>
  );
}
