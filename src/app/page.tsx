import AudioPlayer from "../../components/audio-player";
import CountdownTimer from "../../components/countdown-timer";
import ImageGallery from "../../components/image-gallery";
import WeddingGuestBook from "../../components/wedding-guest-book";
import YoutubeEmbed from "../../components/youtube-embed";

export default function Home() {
  return (
    <main className="dy-container">
      <div className="dy-container-full-vh">
        <CountdownTimer />
      </div>
      <div className="dy-container-full-vh">
        <WeddingGuestBook />
      </div>
      <ImageGallery />
      <AudioPlayer src="/audio/Cant-Help-Falling-In-Love.mp3" />
      <div
        style={{ backgroundColor: "green", height: "1000px", width: "500px" }}
      ></div>
      {/* <YoutubeEmbed videoId="M7lc1UVf-VE" /> */}
      <div
        style={{ backgroundColor: "green", height: "1000px", width: "500px" }}
      ></div>
    </main>
  );
}
