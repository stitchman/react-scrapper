// import { useRef } from "react";
import classes from "./AboutList.module.css";

function AboutList(props) {
  // const imageRef = useRef();
  // const abouts = props.abouts;
  // const done = [];

  // const randIndex = () => {
  //   return Math.floor(Math.random() * abouts.length);
  // };

  // const initIndex = randIndex();
  // done.push(initIndex);

  // //click to random image
  // const handleClick = () => {
  //   const image = imageRef.current;
  //   let index = randIndex();
  //   function check() {
  //     if (done.includes(index) && done.length < abouts.length) {
  //       index = randIndex();
  //       check();
  //     } else if (done.length === abouts.length) {
  //       done.reverse();
  //       done.splice(1);
  //       check();
  //     } else {
  //       done.push(index);
  //     }
  //   }
  //   check();

  //   image.src = abouts[index].image;
  //   image.alt = abouts[index].title;
  // };

  return (
    <div className={classes.wrapper}>
      <img
        // onClick={handleClick}
        className={classes.image}
        // src={abouts[initIndex].image}
        // alt={abouts[initIndex].title}
        // ref={imageRef}
        src="https://drive.google.com/uc?id=1FaeSBLh0wh9CVaYWWdd8bI4rBfgBLhUS"
        alt="logo"
      />
      <p>
        안녕하세요 스크래퍼 입니다. <br />
        스크랩은 '모으다'와 '쓰레기'라는 뜻을 모두 가지고 있습니다.
        <br />
        버려지는 것들을 모아 새로운 쓰임을 찾는 일에 관심있습니다.
      </p>
    </div>
  );
}

export default AboutList;
