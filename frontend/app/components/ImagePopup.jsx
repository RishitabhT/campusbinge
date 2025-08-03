import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.3)",
  zIndex: 1100, // BELOW the popup
  pointerEvents: "auto", // Allows clicks to close popup
});

const PopupContainer = styled("div")(({ width, height }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "transparent",
  width: `${width}px`,
  height: `${height}px`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  
  
  zIndex: 1600, // Ensure it's ABOVE the overlay
}));

const CloseButton = styled("button")({
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "black",
  fontSize: "30px",
});

const PopupImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const ImagePopup = ({ content, onClose }) => {
  const [size, setSize] = useState({ width: 500, height: 500 });

  useEffect(() => {
    if (!content) return;

    // Apply overlay and disable scroll
    document.body.classList.add("no-scroll");

    const img = new Image();
    img.src = content;

    img.onload = () => {
      const aspectRatio = img.width / img.height;
      let newWidth = 500;
      let newHeight = 500;

      if (aspectRatio > 1) {
        newWidth = 600;
        newHeight = 400;
      } else if (aspectRatio < 1) {
        newWidth = 400;
        newHeight = 600;
      }
      setSize({ width: newWidth, height: newHeight });
    };

    return () => {
      // Remove overlay and re-enable scroll on close
      document.body.classList.remove("no-scroll");
    };
  }, [content]);

  if (!content) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer width={size.width} height={size.height} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <PopupImage src={content} alt="Popup Image" />
      </PopupContainer>
    </>
  );
};

export default ImagePopup;
