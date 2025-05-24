"use client";
import AudioPlayer from "../../components/audio-player";
import CountdownTimer from "../../components/countdown-timer";
import WeddingInfo from "../../components/wedding-info";
import WeddingGuestBook from "../../components/wedding-guest-book";
import GroomBrideInfo from "../../components/groom-bride-info";
import YouTubeEmbed from "../../components/youtube-embed";
import ImageGallery from "../../components/image-gallery";
import ContentBlock from "../../components/content-block";
import Cover from "../../components/cover";

const imgUrl =
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home() {
  return (
    <main className="dy-container">
      <Cover backgroundUrl="/welcome-bg.png" backgroundMobileUrl="/firstpage-mobile.webp" />
      <div className="dy-container-full-vh">
        <CountdownTimer />
      </div>
      <div className="dy-container-full-vh">
        <GroomBrideInfo
          isGroom={true}
          imgUrl="/TED_5689.webp"
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
          imgUrl="/TED_5490.webp"
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
        <ImageGallery
          isFirstPage={false}
          mainImages={['/TED_5841.webp', '/TED_5349.webp', '/TED_5562.webp', '/TED_5923.webp']}
        />
      </div>
      <div className="dy-container-full-vh">
        <WeddingInfo
          isFromGroom={false}
          mapHref="https://maps.app.goo.gl/1cjvvBUJCaz5TXjV6"
          header="Lễ Vu Quy"
          address="Tại tư gia, ấp 2, Thủy Tây, Thạnh Hóa, Long An"
        />
      </div>
      <div className="dy-container-full-vh">
        <WeddingInfo
          isFromGroom={true}
          mapHref="https://maps.app.goo.gl/U8tS8myZ2EPpVwMq5"
          header="Lễ Thành Hôn"
          address="Tại tư gia, 98 ấp Thạnh Lập, Thạnh Phú, Thạnh Hóa, Long An"
        />
      </div>
      <ContentBlock
        content="Sẽ hơi quá khi nói rằng chúng tôi
            đã trải qua khá nhiều khó khăn
            trên hành trình yêu của mình.
            Nhưng, mọi thử thách mà chúng tôi
            đã nếm trải trong 5 năm qua chỉ
            làm cho mối quan hệ của chúng tôi
            thêm bền chặt.

            Chúng tôi tin tưởng vào việc
            nhìn thấy những điều tốt đẹp nhất
            ở mọi thứ và tiến về phía trước.
            Giờ đây, chúng tôi đã sẵn sàng
            gác lại mọi khó khăn và bắt đầu lại
            mọi thứ."
        mainImgUrl={imgUrl}
        subImgUrl="/rings.svg"
      />
      <div className="dy-container-full-vh">
        <YouTubeEmbed videoId="zJgVUvpaktw" />
      </div>
      <div className="dy-container-full-vh">
        <WeddingGuestBook />
      </div>
      <Cover backgroundUrl="/welcome-bg.png" backgroundMobileUrl="/firstpage-mobile.webp" />
      <AudioPlayer src="/audio/Cant-Help-Falling-In-Love.mp3" />
    </main>
  );
}
