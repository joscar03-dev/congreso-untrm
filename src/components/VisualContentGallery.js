// VisualContentGallery.js
import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

export default function VisualContentGallery({ videos }) {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <Box sx={{ overflowX: "auto", display: "flex", gap: 2, py: 2 }}>
      {videos.map((video, index) => (
        <Box
          key={index}
          onClick={() => handleOpen(video)}
          sx={{
            cursor: "pointer",
            minWidth: "300px", // Ancho mínimo para cada tarjeta de video
            maxWidth: "300px", // Limita el ancho para mantener la misma dimensión
            position: "relative",
            paddingTop: "56.25%", // Mantener la relación de aspecto 16:9
            borderRadius: 2,
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s",
            },
          }}
        >
          <iframe
            src={video}
            title={`Video ${index + 1}`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 2,
            }}
          />
        </Box>
      ))}

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            width: "90%",
            height: "90vh",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          {selectedVideo && (
            <iframe
              src={selectedVideo}
              title="Video completo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}
