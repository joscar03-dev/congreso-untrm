// ImageCarousel.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Modal } from "@mui/material";

export default function ImageCarousel({ images }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  // Función para actualizar el estado `isDesktop` según el ancho de la pantalla
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    // Actualizar el estado inicial y añadir un listener para cambios de tamaño
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const handleOpen = (image) => {
    if (isDesktop) {
      setSelectedImage(image);
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", mb: 4 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index + 1}`}
            onClick={() => handleOpen(image)}
            sx={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: 2,
              cursor: isDesktop ? "pointer" : "default",
            }}
          />
        ))}
      </Slider>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 1,
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Imagen en tamaño completo"
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
