// InfographyGallery.js
import React, { useState } from "react";
import { Box, Modal, useMediaQuery } from "@mui/material";

export default function InfographyGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "auto", py: 2 }}>
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Infografía ${index + 1}`}
          onClick={() => handleOpen(image)}
          sx={{
            width: "150px",
            height: "auto",
            borderRadius: 2,
            cursor: "pointer",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
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
            p: 2,
            borderRadius: 2,
            width: isMobile ? "90%" : "60%",
            maxWidth: "90%",
            maxHeight: "90%",
            overflow: "auto",
          }}
        >
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Infografía completa"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}
