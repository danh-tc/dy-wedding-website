import { useEffect } from "react";
import "./cover.scss";

interface CoverProps {
  backgroundUrl: string;
  backgroundMobileUrl: string;
}
export default function Cover({ backgroundUrl,backgroundMobileUrl }: Readonly<CoverProps>) {
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        className="dy-cover dy-cover--desktop"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      ></div>
      <div
        className="dy-cover dy-cover--mobile"
        style={{ backgroundImage: `url(${backgroundMobileUrl})` }}
      ></div>
    </>
  );
}
