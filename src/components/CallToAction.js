// CallToAction.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function CallToAction() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#133E6B", // Color destacado para llamar la atención
        color: "#ffffff",
        py: 4,
        px: 2,
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 3,
        mt: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        ¡Únete al VI Congreso Internacional de Ingeniería de Sistemas!
      </Typography>
      <Typography variant="body1" gutterBottom>
        No pierdas la oportunidad de ser parte de este emocionante evento y aprender sobre las últimas tendencias en tecnología.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mt: 2, px: 4 }}
        href="https://congresofisme.untrm.edu.pe/" // Enlace a la página de inscripción
      >
        Inscríbete Ahora
      </Button>
    </Box>
  );
}
