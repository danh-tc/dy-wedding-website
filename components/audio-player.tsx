"use client";
import { useRef, useState, useEffect } from "react";
import { FaVolumeHigh, FaVolumeLow, FaCirclePlay } from "react-icons/fa6";

import Slider from "@mui/material/Slider";

import "./audio-player.scss";

interface AudioPlayerProps {
  src: string;
}
export default function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(1);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const changeVolume = (direction: "up" | "down") => {
    const audio = audioRef.current;
    if (!audio) return;

    let newVolume = audio.volume;

    if (direction === "up") {
      newVolume = Math.min(1, newVolume + 0.1);
    } else {
      newVolume = Math.max(0, newVolume - 0.1);
    }

    audio.volume = newVolume;
    setVolume(parseFloat(newVolume.toFixed(2)));
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  return (
    <div className="dy-audio-player">
      <audio ref={audioRef} src={src} preload="auto" />
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        valueLabelDisplay="auto"
        defaultValue={30}
      />
      <button className="dy-button" onClick={() => changeVolume("up")}>
        <FaVolumeHigh />
      </button>
      <button className="dy-button" onClick={toggleAudio}>
        <FaCirclePlay />
      </button>
      <button className="dy-button" onClick={() => changeVolume("down")}>
        <FaVolumeLow />
      </button>

      {/* Volume UI */}
      <div className="volume-indicator">
        <p>Volume: {Math.round(volume * 100)}%</p>
        <div className="volume-bar">
          <div className="volume-fill" style={{ width: `${volume * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
