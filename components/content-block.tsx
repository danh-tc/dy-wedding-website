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
        <div className="header-1">Chặng đường cùng nhau của tụi mình</div>
        <div className="dy-content-block__col">
          <div className="content">
            <p>
              Câu chuyện bắt đầu từ năm lớp 10, khi hai đứa lần đầu học chung
              lớp. Ba năm cấp 3 trôi qua, rồi bước chân vào đại học, tình bạn cứ
              thế lớn dần rồi trở thành hai người bạn thân thiết. Cứ thế, hai
              đứa cùng nhau trải qua đủ thứ cung bậc cảm xúc, từ những ngày vô
              tư lự cho đến khi bước vào đời, đối mặt với những áp lực của công
              việc.
            </p>
            <br />
            <p>
              Đến năm 2022, sau rất nhiều kỷ niệm và sự gắn bó, tình yêu bất ngờ
              gõ cửa. Chuyện tình của hai đứa không quá ổn ào nhưng đủ để ghi
              nhớ. Hai đứa từng có lúc không hiểu nhau nhưng rồi lại cùng nhau
              học cách dung hòa, học cách lắng nghe, chấp nhận những điểm khác
              biệt và cùng nhau trưởng thành.
            </p>
            <br />
            <p>
              Sau cùng, hai đứa nhận ra rằng đối phương chính là người mình muốn
              cùng đi hết quãng đường phía trước. Và lễ cưới – chính là lời hứa
              đầu tiên cho hành trình ấy.
            </p>
          </div>
        </div>
      </div>
      <div className="dy-content-block__col col-2">
        <Image src={mainImgUrl} fill alt="couple-img" />
      </div>
    </div>
  );
}
