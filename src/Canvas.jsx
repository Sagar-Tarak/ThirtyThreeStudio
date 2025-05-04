import { useEffect, useRef, useState } from "react";
import canvasimages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;

  const canvasRef = useRef(null);
  const animIndex = useRef({ value: startIndex }); // Use ref for GSAP
  const [currentIndex, setCurrentIndex] = useState(0); // This will trigger re-renders

  // Preload images once
  const imagesRef = useRef([]);
  useEffect(() => {
    imagesRef.current = canvasimages.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, []);

  useGSAP(() => {
    gsap.to(animIndex.current, {
      value: startIndex + details.numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        const rounded = Math.round(animIndex.current.value);
        setCurrentIndex(rounded);
      },
    });

    gsap.from(canvasRef.current, {
      opacity: 0,
      scale: 0.3,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[currentIndex];

    if (img && img.complete) {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    }
  }, [currentIndex]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      className="absolute"
      style={{
        width: `${size * 1.3}px`,
        height: `${size * 1.3}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: zIndex,
      }}
      ref={canvasRef}
      id="canvas"
    >
      Canvas
    </canvas>
  );
}

export default Canvas;
