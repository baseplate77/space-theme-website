"use client";
import { useEffect, useState } from "react";

export const useMousePostion = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMosusePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("mousemove", updateMosusePosition);

    return () => window.removeEventListener("mousemove", updateMosusePosition);
  }, []);

  return mousePosition;
};
