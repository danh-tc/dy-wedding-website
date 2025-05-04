import Image from "next/image";
import "./groom-bride-info.scss";

interface GroomBrideInfo {
  header: string;
  description: string;
  imgUrl: string;
  isGroom: boolean;
}

export default function GroomBrideInfo({
  header,
  description,
  imgUrl,
  isGroom,
}: Readonly<GroomBrideInfo>) {
  return (
    <div className="dy-groom-bride-info">
      {!isGroom && (
        <div className="dy-groom-bride-info__img-container">
          <Image src={imgUrl} alt="groom-brige-img" fill />
        </div>
      )}
      <div className="dy-groom-bride-info__text-container">
        <div className="header header-1">
          {isGroom ? (
            <span>Về chú rể &nbsp;</span>
          ) : (
            <span>Về cô dâu &nbsp;</span>
          )}
          <span>{header}</span>
        </div>
        <div className="description">{description}</div>
      </div>
      {isGroom && (
        <div className="dy-groom-bride-info__img-container">
          <Image src={imgUrl} alt="groom-brige-img" fill />
        </div>
      )}
    </div>
  );
}
