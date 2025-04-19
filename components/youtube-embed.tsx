/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  height?: string;
  width?: string;
}

export default function YouTubeEmbed({
  videoId,
  height = "360",
  width = "640",
}: YouTubePlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        height,
        width,
        videoId,
        events: {
          onReady: () => {
            // playerRef.current?.mute();
          },
        },
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (playerRef.current) {
            if (entry.isIntersecting) {
              handlePlay();
            } else {
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
  }, [videoId, height, width]);

  const handlePlay = () => {
    playerRef.current?.playVideo();
  };

  const handlePause = () => {
    playerRef.current?.pauseVideo();
  };

  return (
    <div ref={containerRef}>
      <div id="yt-player"></div>
      <div>
        <button className="play" onClick={handlePlay}>
          Play
        </button>
        <button onClick={handlePause}>Pause</button>
        <button id="myButton">Click Me</button>
      </div>
    </div>
  );
}
