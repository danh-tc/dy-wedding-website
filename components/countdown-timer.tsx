"use client";
import { useEffect, useState } from "react";
import heart from "../public/heart.svg";
import "./countdown-timer.scss";
import Image from "next/image";
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
      <div className="dy-countdown-timer__header header-1 desktop">
        Công Danh & Ngô Yến
      </div>
      <div className="dy-countdown-timer__header header-1 tablet">
        <span>Công Danh</span>
        <span>&</span>
        <span>Ngô Yến</span>
      </div>
      <div className="dy-countdown-timer__container">
        <div className="hard-timer">
          <div className="first-row">09:00 Thứ hai</div>
          <div className="last-row">14.07.2025</div>
        </div>
        <div className="img-container">
          <Image
            src={heart}
            alt="heart"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
        <div className="dynamic-timer">
          <div className="days">
            <div className="number">{days.toString().padStart(2, "0")}</div>
            <div className="text">Ngày</div>
          </div>
          <div className="hours">
            <div className="number">{hours.toString().padStart(2, "0")}</div>
            <div className="text">giờ</div>
          </div>
          <div className="minutes">
            <div className="number">{minutes.toString().padStart(2, "0")}</div>
            <div className="text">phút</div>
          </div>
          <div className="seconds">
            <div className="number">{seconds.toString().padStart(2, "0")}</div>
            <div className="text"> giây</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
