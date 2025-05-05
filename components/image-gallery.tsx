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

  const imgUrl =
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const images = [
    {
      original: imgUrl,
      thumbnail: imgUrl,
    },
    {
      original: imgUrl,
      thumbnail: imgUrl,
    },
    {
      original: imgUrl,
      thumbnail: imgUrl,
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
      <ImageGallery ref={galleryRef} items={images} />
    </div>
  );
}
