"use client";
import { useEffect, useRef, useState } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

import "./audio-player.scss";

interface AudioPlayerProps {
  src: string;
}
export default function AudioPlayer({ src }: Readonly<AudioPlayerProps>) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const toolTipRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const hideToolTip = () => {
    const toolTip = toolTipRef.current;
    if (!toolTip) return;
    toolTip.style.display = "none";
  };

  useEffect(() => {
    setTimeout(() => {
      hideToolTip();
    }, 15000);
  }, []);

  return (
    <div className="dy-audio-player">
      <div className="function">
        <audio ref={audioRef} src={src} preload="auto" loop />
        <button className="dy-button" onClick={toggleAudio}>
          {!isPlaying ? (
            <FaCirclePlay color="#6b513c" />
          ) : (
            <FaCirclePause color="#6b513c" />
          )}
        </button>
      </div>
      <div className="tool-tip" ref={toolTipRef}>
        <div>Nhấn vào đây để nghe nhạc cùng tụi mình nhé!</div>
        <button onClick={hideToolTip}>X</button>
      </div>
    </div>
  );
}
