import Image from "next/image";
import React from "react";

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}
const Img: React.FC<ImgProps> = ({ src, alt, className }) => {
  return (
    <img
      src={`${process.env.basePath}/${src}`}
      alt={alt}
      className={className}
    />
  );
};

export default Img;
