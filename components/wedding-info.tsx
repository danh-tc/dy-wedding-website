import "./wedding-info.scss";

interface InfoProps {
  isFromGroom: boolean;
  mapHref: string;
  header: string;
  address: string;
}
export default function WeddingInfo({
  isFromGroom,
  mapHref,
  header,
  address,
}: Readonly<InfoProps>) {
  return (
    <div
      className="dy-wedding-info"
      style={{
        backgroundImage: isFromGroom
          ? 'url("/background-img-top-flower.webp")'
          : 'url("/background-img-bottom-flower.webp")',
      }}
    >
      <div className="dy-wedding-info__header header-1"> {header}</div>
      <div className="dy-wedding-info__container">
        <div className="date-time">
          {isFromGroom ? (
            <div>
              <span>09:00 ngày 14.07.2025</span>
              <span style={{fontWeight: 400}}>(Nhằm ngày 20.6.2025 âm lịch)</span>
            </div>
          ) : (
            <div>
              <span>09:00 ngày 13.07.2025</span>
              <span style={{fontWeight: 400}}>(Nhằm ngày 19.6.2025 âm lịch)</span>
            </div>
          )}
        </div>
        <div className="address"> {address}</div>
        <a className="map-cta" href={mapHref} target="_blank">
          Xem bản đồ
        </a>
      </div>
    </div>
  );
}
