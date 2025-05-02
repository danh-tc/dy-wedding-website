"use client";
import AudioPlayer from "../../components/audio-player";
import CountdownTimer from "../../components/countdown-timer";
import WeddingInfo from "../../components/wedding-info";
import WeddingGuestBook from "../../components/wedding-guest-book";
import GroomBrideInfo from "../../components/groom-bride-info";

export default function Home() {
  return (
    <main className="dy-container">
      <div className="dy-container-full-vh">
        <GroomBrideInfo
          isGroom={true}
          imgUrl="/dog-in-a-suit.jpg"
          header="Công Danh"
          description="Viết một đoạn trích hoặc đoạn giới thiệu của bài viết
              chính của bạn ở đây. Bạn có thể chọn chỉ thêm đoạn
              đầu tiên một cách trực tiếp hoặc viết một bản tóm tắt
              hoặc đoạn giới thiệu cho bài viết.
              Dù bạn chọn gì, thì cũng đừng tiết lộ hết mọi thông tin!
              Sau cuối, bạn muốn họ sẽ đọc toàn bộ bài viết."
        />
      </div>
      <div className="dy-container-full-vh">
        <GroomBrideInfo
          isGroom={false}
          imgUrl="/dog-in-a-suit.jpg"
          header="Ngô Yến"
          description="Viết một đoạn trích hoặc đoạn giới thiệu của bài viết
              chính của bạn ở đây. Bạn có thể chọn chỉ thêm đoạn
              đầu tiên một cách trực tiếp hoặc viết một bản tóm tắt
              hoặc đoạn giới thiệu cho bài viết.
              Dù bạn chọn gì, thì cũng đừng tiết lộ hết mọi thông tin!
              Sau cuối, bạn muốn họ sẽ đọc toàn bộ bài viết."
        />
      </div>
      <div className="dy-container-full-vh">
        <CountdownTimer />
      </div>
      <div className="dy-container-full-vh">
        <WeddingGuestBook />
      </div>
      <div className="dy-container-full-vh">
        <WeddingInfo
          isFromGroom={false}
          mapHref="https://maps.app.goo.gl/1cjvvBUJCaz5TXjV6"
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
