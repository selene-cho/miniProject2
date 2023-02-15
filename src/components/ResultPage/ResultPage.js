import { useEffect, useState } from "react";
import styles from "./ResultPage.module.css";
import ResultList from "./Result_list";
import Spinner from "../../contents/images/Loading_img.gif";
import OtherPopup from "./OtherPopup";
import KakaoShareButton from "./KakaoShareButton";
import UserNum from "./UserNum";
import CallToAction from "./CallToAction";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Link } from "react-router-dom";

// import OtherResult from "./otherResult";
const ResultPage = ({ frontResult, backResult, score }) => {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState({ Describtion: "" });
  const [Type, setType] = useState("none");
  // const [Num, setNum] = useState(0);
  const [Describtion, setDescription] = useState([]);
  const [Img, setImg] = useState("");

  // 로딩시간
  useEffect(() => {
    // 기준1
    console.log(score);
    if (score < 5) {
      setType("none");
      setData(ResultList[Type][0]);
    } else if (score < 8) {
      if (frontResult > backResult) {
        setType("front");
        setData(ResultList[Type][0]);
      } else if (frontResult < backResult) {
        setType("back");
        setData(ResultList[Type][0]);
      } else {
        setType("full");
        setData(ResultList[Type][1]);
      }
    } else {
      if (frontResult > backResult) {
        setType("front");
        setData(ResultList[Type][1]);
      } else if (frontResult < backResult) {
        setType("back");
        setData(ResultList[Type][1]);
      } else {
        setType("full");
        setData(ResultList[Type][2]);
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [Data]);

  useEffect(() => {
    setDescription(Data.Describtion.split("/"));
    setImg(Data.img);
    console.log(Img);
  }, [Type, Img]);
  const currentUrl = window.location.href;

  return Loading ? (
    <div
      className={
        styles.ResultBody //로딩창
      }
    >
      <div className={styles.Loading}>
        <img src={Spinner} />
        <p>결과를 분석중 입니다.</p>
      </div>
    </div>
  ) : (
    <div
      className={
        styles.ResultBody //결과창
      }
    >
      <div className={styles.Rsultside}>
        <Link to="/">
          <a href="" title="Go to Main" className={styles.goMainBtn}>
            <span className={styles.goMainBtnTop}>Main</span>
            <span className={styles.goMainBtnBottom}>처음부터!</span>
          </a>
        </Link>
      </div>
      <div className={styles.ResultIMG}>
        <div className={styles.ResultContents}>
          <div className={styles.img_name}>
            <img src={Img} alt="이미지" />
            <h1>{Data.TypeName}</h1>
          </div>
        </div>
      </div>
      <div className={styles.Resultdescription}>
        <div className={styles.ResultContents}>
          <div className={styles.ResultList}>
            <div className={styles.ResultTypeName}>
              <h1>{Data.TypeName}</h1>
            </div>
            <div className={styles.ResultTypeDes}>
              {Describtion.map((describetion) => {
                return <p>{describetion}</p>;
              })}
            </div>
          </div>
          <div className={styles.Link}>
            <OtherPopup />
            <KakaoShareButton />
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon size={48} round={true} borderRadius={24} />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon size={48} round={true} borderRadius={24} />
            </TwitterShareButton>
            <p>
              참여자수 : <UserNum />
            </p>
          </div>
          <CallToAction />
        </div>
      </div>
      <div className={styles.Resultside} />
    </div>
  );
};

export default ResultPage;
