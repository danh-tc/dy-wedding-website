"use client";
import { useEffect, useState } from "react";
import "./countdown-timer.scss";
function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const target = new Date("07/13/2025 00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const different = target.getTime() - now.getTime();

      const day = Math.floor(different / (1000 * 60 * 60 * 24));
      setDays(day);

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="dy-countdown-timer">
      <div>Count Down Timer</div>
      <div>{`${days}:${hours}:${minutes}:${seconds}`}</div>
    </div>
  );
}

export default CountdownTimer;
