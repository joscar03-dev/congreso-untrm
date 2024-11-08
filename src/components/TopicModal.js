// TopicModal.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function TopicModal({ open, onClose, topic, questions = [] }) {
  const [score, setScore] = useState(null); // Estado para almacenar el puntaje
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Almacena las respuestas seleccionadas

  useEffect(() => {
    if (questions && questions.length > 0) {
      // Verificación adicional
      setAnswers(Array(questions.length).fill(null));
    }
  }, [questions]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answerIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] !== null && question.options[answers[index]].correct) {
        correctAnswers += 1;
      }
    });
    const scorePercentage = (correctAnswers / questions.length) * 100;
    setScore(scorePercentage); // Muestra el puntaje como un porcentaje
  };

  const getMotivationalMessage = () => {
    if (score >= 60) {
      return "¡Excelente! Sigue aprendiendo y perfecciona tus conocimientos.";
    } else if (score >= 50) {
      return "Buen trabajo. Puedes mejorar tus habilidades en este tema.";
    } else {
      return "Este es el momento perfecto para comenzar a aprender. ¡Inscríbete y mejora!";
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: "90%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {topic.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Aquí encontrarás información detallada sobre{" "}
          {topic.name.toLowerCase()}.
        </Typography>

        {/* Infografía */}
        <Box
          component="img"
          src={topic.infography}
          alt={`Infografía de ${topic.name}`}
          sx={{ width: "100%", borderRadius: 2, my: 2 }}
        />

        {/* Video */}
        <Box sx={{ position: "relative", paddingTop: "56.25%", my: 2 }}>
          {topic.videoSrc.includes("youtube.com") ? (
            <iframe
              src={`${topic.videoSrc}?autoplay=0`} // Asegura que autoplay esté en 0 para YouTube
              title={`Video de ${topic.name}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <video
              src={topic.videoSrc}
              title={`Video de ${topic.name}`}
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </Box>

        {/* Formulario de evaluación */}
        <Typography variant="h6" gutterBottom>
          Evaluación de conocimientos previos
        </Typography>
        {questions && questions.length > 0 ? (
          <form onSubmit={handleSubmit}>
            {questions.map((question, questionIndex) => (
              <FormControl
                key={questionIndex}
                component="fieldset"
                fullWidth
                sx={{ mb: 2 }}
              >
                <FormLabel component="legend">{question.question}</FormLabel>
                <RadioGroup
                  value={answers[questionIndex]}
                  onChange={(e) =>
                    handleAnswerChange(questionIndex, parseInt(e.target.value))
                  }
                >
                  {question.options.map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={optionIndex}
                      control={<Radio />}
                      label={option.answer}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ))}
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#133E6B",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#0F2D4D",
                },
                mt: 2,
              }}
            >
              Enviar Respuestas
            </Button>
          </form>
        ) : (
          <Typography variant="body2" color="textSecondary">
            No hay preguntas disponibles para este tema.
          </Typography>
        )}

        {/* Mostrar el puntaje */}
        {score !== null && (
          <>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Tu puntaje: {score.toFixed(2)}%
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {getMotivationalMessage()}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href="https://congresofisme.untrm.edu.pe/"
              sx={{
                mt: 2,
                backgroundColor: "#28a745",
                "&:hover": {
                  backgroundColor: "#218838",
                },
              }}
            >
              Inscríbete al Congreso
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
}
