"use client";
import { useEffect, useState } from "react";
import "./countdown-timer.scss";
function CountdownTimer() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
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
      <div className="dy-countdown-timer__header">Công Danh & Ngô Yến</div>
      <div>
        {`${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
      </div>
    </div>
  );
}

export default CountdownTimer;
