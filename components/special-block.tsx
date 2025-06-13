import Image from "next/image";
import "./special-block.scss";
export default function SpecialBlock() {
  return (
    <>
      <div className="dy-special-block">
        <div className="header-1">
          Chặng đường cùng nhau của{" "}
          <span style={{ whiteSpace: "nowrap" }}>Danh - Yến</span>
        </div>
        <div className="dy-special-block__main-content">
          <div className="row-1">
            <div className="img-container">
              <Image src="/p-1.jpg" fill alt="images" />
            </div>
            <div className="content">
              <div className="sub-header">Bắt đầu 2014</div>
              <p>
                Lần đầu tiên tụi mình gặp nhau là khi cùng vào lớp 10 và từ đó
                đã đồng hành suốt 3 năm học cấp 3.
              </p>
            </div>
          </div>
          <div className="row-2">
            <div className="content">
              <div className="sub-header">Bắt đầu 2014</div>
              <p>
                Những năm thanh xuân trôi qua tụi mình bước chân vào đại học và
                tình bạn cứ thế lớn dần rồi trở thành hai người bạn thân thiết.
              </p>
            </div>
            <div className="img-container">
              <div className="small-img sm-1">
                <Image src="p1-2-1.jpg" fill alt="images" />
              </div>
              <div className="small-img sm-2">
                <Image src="p1-2-2.jpg" fill alt="images" />
              </div>
              <div className="small-img sm-3">
                <Image src="p1-2-3.jpg" fill alt="images" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dy-special-block">
        <div className="dy-special-block__main-content dy-special-block__main-content--special">
          <div className="row-1">
            <div className="img-container">
              <Image src="/p-2.jpg" fill alt="images" />
            </div>
            <div className="content">
              <div className="sub-header">2021 - 2022</div>
              <p>
                Cứ thế, hai đứa cùng nhau trải qua đủ thứ cung bậc cảm xúc, từ
                những ngày vô tư lự cho đến khi bước vào đời, đối mặt với những
                áp lực của công việc.
              </p>
            </div>
          </div>
          <div className="row-2">
            <div className="content">
              <div className="sub-header">2022 - 2025</div>
              <p>
                Đến năm 2022, sau rất nhiều kỷ niệm và sự gắn bó, tình yêu bất
                ngờ gõ cửa. Chuyện tình của hai đứa không quá ồn ào nhưng đủ để
                ghi nhớ. Hai đứa từng có lúc không hiểu nhau nhưng rồi lại cùng
                nhau học cách dung hòa, học cách lắng nghe, chấp nhận những điểm
                khác biệt và cùng nhau trưởng thành.
              </p>
            </div>
            <div className="img-container">
              <div className="small-img sm-1">
                <Image src="p-2-1.jpg" fill alt="images" />
              </div>
              <div className="small-img sm-2">
                <Image src="p-2-2.jpg" fill alt="images" />
              </div>
              <div className="small-img sm-3">
                <Image src="p-2-3.jpg" fill alt="images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
