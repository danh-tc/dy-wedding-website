import "./timeline.scss";
import Image from "next/image";
export default function Timeline() {
  return (
    <div className="dy-timeline">
      <div className="header-1">Timeline</div>
      <ul>
        <li>
          <div className="img-container">
            <Image src="/1.svg" alt="couple-img" fill />
          </div>
          <span>9:00 - Nghi lễ cưới</span>
        </li>
        <li>
          <div className="img-container">
            <Image src="/2.svg" alt="couple-img" fill />
          </div>
          <span>10:00 - Check in</span>
        </li>
        <li>
          <div className="img-container">
            <Image src="/3.svg" alt="couple-img" fill />
          </div>
          <span>11:00 - Khai tiệc</span>
        </li>
        <li>
          <div className="img-container">
            <Image src="/4.svg" alt="couple-img" fill />
          </div>
          <span>13:00 - Quẩy</span>
        </li>
      </ul>
    </div>
  );
}
