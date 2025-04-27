"use client";
import AudioPlayer from "../../components/audio-player";
import CountdownTimer from "../../components/countdown-timer";
import WeddingInfo from "../../components/wedding-info";
import WeddingGuestBook from "../../components/wedding-guest-book";

export default function Home() {
  return (
    <main className="dy-container">
      <div className="dy-container-full-vh">
        <CountdownTimer />
      </div>
      <div className="dy-container-full-vh">
        <WeddingGuestBook />
      </div>
      <div className="dy-container-full-vh">
        <WeddingInfo
          isFromGroom={false}
          mapHref="https://maps.app.goo.gl/U8tS8myZ2EPpVwMq5"
          header="Tiệc cưới nhà gái"
          address="Tại tư gia, ấp 2, Thủy Tây, Thạnh Hóa, Long An"
        />
      </div>
      <div className="dy-container-full-vh">
        <WeddingInfo
          isFromGroom={true}
          mapHref="https://maps.app.goo.gl/U8tS8myZ2EPpVwMq5"
          header="Tiệc cưới nhà trai"
          address="Tại tư gia, 98 ấp Thạnh Lập, Thạnh Phú, Thạnh Hóa, Long An"
        />
      </div>
      <AudioPlayer src="/audio/Cant-Help-Falling-In-Love.mp3" />
    </main>
  );
}
