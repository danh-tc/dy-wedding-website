import "./video-player.scss";
export default function VideoPlayer() {
  return (
    <div className="dy-video-player">
      <div className="dy-video-player__content">
        <div className="sub-header">Từ 2025...</div>
        <p>
          Sau cùng, hai đứa nhận ra rằng đối phương chính là người mình muốn
          cùng đi hết quãng đường phía trước. Và lễ cưới – chính là lời hứa đầu
          tiên cho hành trình ấy.
        </p>
      </div>
      <div className="dy-video-player__video">
        <video
          src="/video.mp4"
          preload="auto"
          controls
          height={"100%"}
          width={"100%"}
          poster="/thumbnail.jpg"
        ></video>
      </div>
    </div>
  );
}
