import AudioPlayer from "../../components/audio-player";
import CountdownTimer from "../../components/countdown-timer";
import YoutubeEmbed from "../../components/youtube-embed";
import dynamic from "next/dynamic";

export default function Home() {
  const ImageGallery = dynamic(() => import("../../components/image-gallery"), {
    ssr: false,
  });
  return (
    <main className="dy-container">
      <ImageGallery />
      <CountdownTimer />
      <AudioPlayer src="/audio/Cant-Help-Falling-In-Love.mp3" />
      <div
        style={{ backgroundColor: "green", height: "1000px", width: "500px" }}
      ></div>
      <YoutubeEmbed videoId="M7lc1UVf-VE" />
      <div
        style={{ backgroundColor: "green", height: "1000px", width: "500px" }}
      ></div>
    </main>
  );
}
