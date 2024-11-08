// TopicCard.js
import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import TopicModal from "./TopicModal";
import InfoIcon from "@mui/icons-material/Info";

export default function TopicCard({ topic }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          backgroundColor: "#e3f2fd",
          border: "1px solid #90caf9",
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
          {/* Ícono al lado del nombre */}
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
