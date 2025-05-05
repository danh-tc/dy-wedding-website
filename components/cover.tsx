import "./cover.scss";

interface CoverProps {
  backgroundUrl: string;
}
export default function Cover({ backgroundUrl }: Readonly<CoverProps>) {
  return (
    <div
      className="dy-cover"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    ></div>
  );
}
