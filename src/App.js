import React from "react";

import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";

export default function CongressLandingPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
      }}
    >
      <header
        style={{
          backgroundColor: "#1976d2",
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
        <section>
          <Typography variant="h5" align="center" gutterBottom>
            Información del Evento
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
            gap={2}
          >
            <Card>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <CalendarIcon className="h-8 w-8 text-blue-600 mr-4" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Fecha
                  </Typography>
                  <Typography>15-17 de Noviembre, 2023</Typography>
                </Box>
              </CardContent>
            </Card>
            <Card>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <MapPinIcon className="h-8 w-8 text-blue-600 mr-4" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Lugar
                  </Typography>
                  <Typography>Campus UNTRM, Chachapoyas</Typography>
                </Box>
              </CardContent>
            </Card>
            <Card>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <UsersIcon className="h-8 w-8 text-blue-600 mr-4" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Modalidad
                  </Typography>
                  <Typography>Presencial y Virtual</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </section>

        <section>
          <Typography variant="h5" align="center" gutterBottom sx={{ mt: 4 }}>
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
            {[
              "Inteligencia Artificial y Machine Learning",
              "Desarrollo de Software y Metodologías Ágiles",
              "Ciberseguridad y Protección de Datos",
              "Internet de las Cosas (IoT)",
              "Big Data y Analítica",
              "Computación en la Nube",
            ].map((tema, index) => (
              <Card key={index}>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {tema}
                  </Typography>
                  <Typography color="textSecondary">
                    Explora las últimas tendencias y avances en{" "}
                    {tema.toLowerCase()}.
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </section>

        <section>
          <Typography variant="h5" align="center" gutterBottom sx={{ mt: 4 }}>
            Contenido Visual
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
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </Box>
            <Box
              component="img"
              src="/placeholder.svg?height=360&width=640"
              alt="Infografía del congreso"
              sx={{ width: "100%", borderRadius: 2 }}
            />
            <Box
              component="img"
              src="/placeholder.svg?height=360&width=640"
              alt="Póster del congreso"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Box>
        </section>

        <section style={{ textAlign: "center", marginTop: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            ¡Regístrate Ahora!
          </Typography>
          <Typography variant="body1" gutterBottom>
            No pierdas la oportunidad de ser parte de este emocionante evento de
            Ingeniería de Sistemas.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="https://congresofisme.untrm.edu.pe/">
            Inscríbete al Congreso
          </Button>
        </section>
      </Container>

      <footer
        style={{
          backgroundColor: "#f5f5f5",
          padding: "16px",
          marginTop: "2rem",
        }}
      >
        <Container
          maxWidth="md"
          style={{ textAlign: "center", color: "#757575" }}
        >
          <Typography variant="body2">
            &copy; 2023 UNTRM - VI Congreso Internacional de Ingeniería de
            Sistemas
          </Typography>
          <Typography variant="body2">
            Contacto: congreso.sistemas@untrm.edu.pe
          </Typography>
        </Container>
      </footer>
    </Box>
  );
}


