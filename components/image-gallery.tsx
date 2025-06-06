"use client";

import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./image-gallery.scss";

import Image from "next/image";
interface ImageGalleryProps {
  isFirstPage: boolean;
  mainImages: string[];
}

export default function DyImageGallery({
  isFirstPage,
  mainImages,
}: Readonly<ImageGalleryProps>) {
  const galleryRef = useRef<ImageGallery>(null);
  const openFullscreen = () => {
    if (galleryRef.current) {
      galleryRef.current.fullScreen();
    }
  };

  const images = [
    {
      original: "/TED_5841.webp",
      thumbnail: "/TED_5841.webp",
    },
    {
      original: "/TED_5562.webp",
      thumbnail: "/TED_5562.webp",
    },
    {
      original: "/TED_5923.webp",
      thumbnail: "/TED_5923.webp",
    },
    {
      original: "/TED_5883.webp",
      thumbnail: "/TED_5883.webp",
    },
    {
      original: "/TED_5615.webp",
      thumbnail: "/TED_5615.webp",
    },
    {
      original: "/TED_5610.webp",
      thumbnail: "/TED_5610.webp",
    },
    {
      original: "/TED_5544.webp",
      thumbnail: "/TED_5544.webp",
    },
    {
      original: "/TED_5250.webp",
      thumbnail: "/TED_5250.webp",
    },
    {
      original: "/TED_4984.webp",
      thumbnail: "/TED_4984.webp",
    },
    {
      original: "/TED_4860.webp",
      thumbnail: "/TED_4860.webp",
    },
    {
      original: "/TED_5349.webp",
      thumbnail: "/TED_5349.webp",
    },
    {
      original: "/TED_5300.webp",
      thumbnail: "/TED_5300.webp",
    },
    {
      original: "/DDL1.webp",
      thumbnail: "/DDL1.webp",
    },
    {
      original: "/DDL2.webp",
      thumbnail: "/DDL2.webp",
    },
    {
      original: "/DDL3.webp",
      thumbnail: "/DDL3.webp",
    },
    {
      original: "/DDL4.webp",
      thumbnail: "/DDL4.webp",
    },
    {
      original: "/TED_5689.webp",
      thumbnail: "/TED_5689.webp", //
    },
    {
      original: "/TED_5490.webp", //
      thumbnail: "/TED_5490.webp",
    },
    {
      original: "/TED_4816.webp", //
      thumbnail: "/TED_4816.webp",
    },
  ];

  return (
    <div className="dy-image-gallery">
      <div className="dy-image-gallery__header header-1">
        Album hình cưới của tụi mình
      </div>
      <div className="dy-image-gallery__images">
        <div className="col-1">
          <Image src={mainImages[0]} alt="groom-brige-img" fill />
        </div>
        <div className="col-2">
          <div className="col-2__img">
            <Image src={mainImages[1]} alt="groom-brige-img" fill />
          </div>
          <div className="col-2__img">
            <Image src={mainImages[2]} alt="groom-brige-img" fill />
          </div>
        </div>
        <div className="col-3">
          <Image src={mainImages[3]} alt="groom-brige-img" fill />
        </div>
      </div>
      {!isFirstPage && (
        <button onClick={openFullscreen} className="dy-button">
          <span>Xem tất cả ảnh</span>
        </button>
      )}
      <ImageGallery ref={galleryRef} items={images} showBullets={true} />
    </div>
  );
}
