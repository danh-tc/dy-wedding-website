"use client";
import { useRef, useState, useEffect } from "react";
import { FaVolumeHigh, FaVolumeLow, FaCirclePlay } from "react-icons/fa6";

import Slider from "@mui/material/Slider";

import "./audio-player.scss";

interface AudioPlayerProps {
  src: string;
}
export default function AudioPlayer({ src }: Readonly<AudioPlayerProps>) {
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

    const volumeUIEl = document.querySelector(".dy-audio-player .ui");
    if (volumeUIEl != null) {
      volumeUIEl.classList.add("show");
      const timeOut = setTimeout(() => {
        volumeUIEl.classList.remove("show");
        clearTimeout(timeOut);
      }, 3000);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  return (
    <div className="dy-audio-player">
      <div className="function">
        <audio ref={audioRef} src={src} preload="auto" />
        <button className="dy-button" onClick={() => changeVolume("up")}>
          <FaVolumeHigh color="#6b513c" />
        </button>
        <button className="dy-button" onClick={toggleAudio}>
          <FaCirclePlay color="#6b513c" />
        </button>
        <button className="dy-button" onClick={() => changeVolume("down")}>
          <FaVolumeLow color="#6b513c" />
        </button>
      </div>
      <Slider
        className="ui"
        orientation="vertical"
        defaultValue={Math.round(volume * 100)}
        value={Math.round(volume * 100)}
        sx={{
          color: '#6b513c', 
        }}
      />
    </div>
  );
}
