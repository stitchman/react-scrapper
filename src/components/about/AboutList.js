import Card from "../ui/Card";
import FlexList from "../ui/FlexList";
import classes from "./AboutList.module.css";

const AboutList = () => {
  return (
    <>
      <FlexList>
        <Card>
          <img
            className={classes.image}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Millet_Gleaners.jpg/600px-Millet_Gleaners.jpg"
            alt="이삭 줍는 여인들"
          />
        </Card>
        <Card>
          <img
            className={classes.image}
            src="https://post-phinf.pstatic.net/MjAxODA3MDVfMjA5/MDAxNTMwNzc1MjIyMDcy.W5XnhJF-MyraAgtHLpYVanc032IrfUIwgDGHfHP6HAAg.j-OKPBJU7GSOzSGru0aKXcEz9ACXgdPJLiHxzuIGtrkg.JPEG/%ED%94%8C%EB%A1%9C%EA%B9%85.jpg?type=w1200"
            alt="플로깅맨"
          />
        </Card>
      </FlexList>
      <Card>
        <div className={classes.text}>
          <p>안녕하세요 스크래퍼 입니다</p>
          <p>
            스크랩scrap은 '모으다'라는 뜻과 '쓰레기'라는 뜻을 모두 갖고
            있습니다.
          </p>
          <p>버려지는 것들을 모아 새로운 쓰임을 찾는 일에 관심있습니다.</p>
        </div>
      </Card>
    </>
  );
};

export default AboutList;
