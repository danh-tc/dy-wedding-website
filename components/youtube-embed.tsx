/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useRef } from "react";
import "./youtube-embed.scss";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
}

export default function YouTubeEmbed({
  videoId,
}: Readonly<YouTubePlayerProps>) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    const height = window.innerHeight * 0.8;
    const width = window.innerWidth * 0.4;
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        height,
        width,
        videoId,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (playerRef.current) {
            if (!entry.isIntersecting) {
              handlePause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const videoContainerEl = containerRef.current;

    if (videoContainerEl) {
      observer.observe(videoContainerEl);
    }

    return () => {
      if (videoContainerEl) {
        observer.unobserve(videoContainerEl);
      }
    };
  }, [videoId]);

  const handlePause = () => {
    playerRef.current?.pauseVideo();
  };

  return (
    <div className="dy-video" ref={containerRef}>
      <div className="dy-video__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        interdum pretium malesuada. Nam vitae nibh facilisis, posuere nibh eget,
        bibendum nulla. Duis blandit porta sem ut congue. Duis at magna molestie
        libero tincidunt accumsan in sit amet tortor. Sed tristique enim non
        augue lobortis sodales. Sed mollis augue vitae facilisis lobortis.
        Aenean non elementum tellus.
      </div>
      <div id="yt-player"></div>
    </div>
  );
}
