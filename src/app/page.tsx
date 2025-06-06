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
import OpenLetter from "../../components/open-letter";
import Timeline from "../../components/timeline";

export default function Home() {
  return (
    <main className="dy-container">
      <Cover
        backgroundUrl="/welcome-bg.png"
        backgroundMobileUrl="/firstpage-mobile.webp"
      />
      <div className="dy-container-full-vh">
        <OpenLetter />
      </div>
      <div className="dy-container-full-vh">
        <CountdownTimer />
      </div>
      <div className="dy-container-full-vh">
        <GroomBrideInfo
          isGroom={true}
          imgUrl="/TED_5689.webp"
          header="Công Danh"
          description="Thật khó để tự mô tả về chính bản thân mình.
Thay vì viết lại thông tin cá nhân, mình chọn ghi lại những suy nghĩ của mình tại đây.
Mình đến với cuộc đời này, hạnh phúc vì được sống bên cạnh những người mình yêu thương.
Mỗi ngày trôi qua là một mảnh ghép trong ký ức – đôi khi hiện rõ, đôi khi mờ nhạt – nhưng những ký ức ấy chắc chắn sẽ theo mình suốt những năm tháng cuộc đời.
Cảm ơn vì đã cùng mình xây dựng nên những ký ức đẹp đó."
        />
      </div>
      <div className="dy-container-full-vh">
        <GroomBrideInfo
          isGroom={false}
          imgUrl="/TED_5490.webp"
          header="Ngô Yến"
          description="Ngô Yến là cô gái sinh năm 1999, tuy sinh ra và lớn lên ở Long An nhưng lại mang trong mình nét duyên của người Hải Dương. Yến là một cô nàng Marketing năng động, thích đọc sách, lang thang đó đây và chìm đắm trong những giai điệu âm nhạc."
        />
      </div>
      <div className="dy-container-full-vh">
        <ImageGallery
          isFirstPage={false}
          mainImages={[
            "/TED_5841.webp",
            "/TED_5349.webp",
            "/TED_5562.webp",
            "/TED_5923.webp",
          ]}
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
      <div className="dy-container-full-vh">
        <Timeline />
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
        mainImgUrl={"/holdinghands.webp"}
      />
      <div className="dy-container-full-vh">
        <YouTubeEmbed videoId="zJgVUvpaktw" />
      </div>
      <div className="dy-container-full-vh--special">
        <WeddingGuestBook />
      </div>
      <Cover
        backgroundUrl="/welcome-bg.png"
        backgroundMobileUrl="/firstpage-mobile.webp"
      />
      <AudioPlayer src="/audio/Cant-Help-Falling-In-Love.mp3" />
    </main>
  );
}
