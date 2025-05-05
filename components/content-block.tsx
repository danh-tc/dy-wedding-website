import Image from "next/image";
import "./content-block.scss";

interface ContentBlockProps {
  content: string;
  mainImgUrl: string;
  subImgUrl: string;
}
export default function ContentBlock({
  content,
  mainImgUrl,
  subImgUrl,
}: Readonly<ContentBlockProps>) {
  return (
    <div className="dy-content-block">
      <div className="dy-content-block__col col-1">
        <div className="header-1">Chặng đường cùng nhau của tụi mình</div>
        <div className="sub-img-container">
          <Image src={subImgUrl} fill alt="couple-img" />
        </div>
      </div>
      <div className="dy-content-block__col col-2">
        <Image src={mainImgUrl} fill alt="couple-img" />
      </div>
      <div className="dy-content-block__col col-3">{content}</div>
    </div>
  );
}
