import Image from "next/image";
import "./content-block.scss";

interface ContentBlockProps {
  content: string;
  mainImgUrl: string;
}
export default function ContentBlock({
  mainImgUrl,
}: Readonly<ContentBlockProps>) {
  return (
    <div className="dy-content-block">
      <div className="dy-content-block__col col-1">
        {/* <div className="header-1">Chặng đường cùng nhau của tụi mình</div> */}
        <div className="dy-content-block__col">
          <div className="content">
            <p className="header-1">
              Công Danh và Ngô Yến chân thành cảm ơn mọi người vì đã dành thời
              gian đọc câu chuyện của hai đứa và sự hiện diện của mọi người
              chính
            </p>
            <br />
            <p className="header-1">Hẹn gặp mọi người tại đám cưới nhé!</p>
          </div>
        </div>
      </div>
      <div className="dy-content-block__col col-2">
        <Image src={mainImgUrl} fill alt="couple-img" />
      </div>
    </div>
  );
}
