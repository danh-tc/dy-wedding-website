"use client";

import { useEffect, useRef } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import "./video-player.scss";
export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const toolTipRef = useRef<HTMLDivElement>(null);
  const unmuteBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch((err) => {
            console.warn("Autoplay failed:", err);
          });
        } else {
          videoEl.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.unobserve(videoEl);
    };
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
    }
    if (!unmuteBtn.current) return;
    hideToolTip();
  };

  const hideToolTip = () => {
    const toolTip = toolTipRef.current;
    if (!toolTip) return;
    toolTip.style.display = "none";
    if (!unmuteBtn.current) return;
    unmuteBtn.current.style.display = "none";
  };

  return (
    <div className="dy-video-player">
      <div className="dy-video-player__content">
        <div className="sub-header">Từ 2025...</div>
        <p>
          Sau cùng, hai đứa nhận ra rằng đối phương chính là người mình muốn
          cùng đi hết quãng đường phía trước. Và lễ cưới – chính là lời hứa đầu
          tiên cho hành trình ấy.
        </p>
      </div>
      <div className="dy-video-player__video">
        <video
          ref={videoRef}
          src="/video.mp4"
          preload="auto"
          playsInline
          muted
          controls
          height={"100%"}
          width={"100%"}
          poster="/thumbnail.jpg"
        ></video>
        {/* <button ref={unmuteBtn} className="dy-button" onClick={handleUnmute}>
          <FaVolumeHigh color="#6b513c" />
        </button>
        <div className="tool-tip" ref={toolTipRef}>
          <div>Nhấn vào icon để  bên dưới để bật âm thanh nhé!</div>
          <button onClick={hideToolTip}>X</button>
        </div> */}
      </div>
    </div>
  );
}
