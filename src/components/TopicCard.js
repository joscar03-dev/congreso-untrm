// TopicCard.js
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, Typography, keyframes } from "@mui/material";
import TopicModal from "./TopicModal";
import InfoIcon from "@mui/icons-material/Info";

// Definir la animación de deslizamiento desde el lado izquierdo
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Definir la animación de deslizamiento desde el lado derecho
const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default function TopicCard({ topic, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Configurar IntersectionObserver para activar y desactivar la visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Card
        ref={ref}
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          backgroundColor: "#e3f2fd",
          border: "1px solid #90caf9",
          opacity: 0,
          transform: "translateX(0)", // Posición inicial
          animation: isVisible
            ? `${
                index % 2 === 0 ? slideInFromLeft : slideInFromRight
              } 0.8s ease forwards`
            : "none",
          transition: "opacity 0.8s ease",
          "&:hover": {
            boxShadow: 3,
            transform: "scale(1.02)",
            transition: "0.3s ease",
          },
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {topic.name}
          </Typography>
          <InfoIcon sx={{ ml: 1, color: "#1976d2" }} />{" "}
          <Typography
            color="textSecondary"
            variant="h6"
            fontWeight="bold"
            gutterBottom
          >
            Explora las últimas tendencias y avances en{" "}
            {topic.name.toLowerCase()}.
          </Typography>
        </CardContent>
      </Card>

      <TopicModal
        open={open}
        onClose={handleClose}
        topic={topic}
        questions={topic.questions}
      />
    </>
  );
}
