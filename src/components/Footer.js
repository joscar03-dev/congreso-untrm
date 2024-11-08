// Footer.js
import React from "react";
import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#f5f5f5", padding: "16px", marginTop: "2rem" }}
    >
      <Container
        maxWidth="md"
        style={{ textAlign: "center", color: "#757575" }}
      >
        <Typography variant="body2">
          &copy; 2024 UNTRM - VI Congreso Internacional de Ingeniería de
          Sistemas
        </Typography>
        <Typography variant="body2">
          Contacto: centpro.fisme@untrm.edu.pe
        </Typography>
      </Container>
    </footer>
  );
}
