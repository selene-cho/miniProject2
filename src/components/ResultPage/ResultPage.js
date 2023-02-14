import { useEffect, useState } from "react";
import styles from "./ResultPage.module.css";
import ResultList from "./Result_list";
import Spinner from "../../contents/images/loading_img.gif";
// import OtherResult from "./otherResult";
const ResultPage = ({ frontResult, backResult }) => {
  /*기준을 임의로 잡았습니다. 수정가능 
  *기준 1 
  front > back => front
  front < back => back
  front = back => full

  *기준 2 
  1~7 lv1
  8~15 lv2
  16~20 lv3 
  */
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState({ Describtion: "" });
  const [Type, setType] = useState("front");
  const [Num, setNum] = useState(0);
  const [Describtion, setDescription] = useState([]);
  const [Other, setOther] = useState([]);
  // 로딩시간
  useEffect(() => {
    // 기준1
    if (frontResult > backResult) {
      setType("front");
      setNum(frontResult);
    } else if (frontResult < backResult) {
      setType("back");
      setNum(backResult);
    } else {
      setType("full");
      setNum(frontResult);
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(
    () => {
      //기준2
      if (Num >= 16) {
        setData(ResultList[Type][2]);
        setOther([0, 1]);
      } else if (Num >= 8) {
        setData(ResultList[Type][1]);
        setOther([0, 2]);
      } else {
        setData(ResultList[Type][0]);
        setOther([1, 2]);
      }
    },
    [Type]
  );
  useEffect(
    () => {
      setDescription(Data.Describtion.split("/"));
    },
    [Data]
  );

  return Loading
    ? <div className={styles.ResultBg}>
        <div className={styles.ResultContents}>
          <img src={Spinner} alt="로딩중" width="30%" />
          <div className={styles.footer} />
        </div>
      </div>
    : <div className={styles.ResultBg}>
        <div className={styles.ResultContents}>
          <h1 className={styles.ResultTitle}>테스트 결과</h1>
          <div className={styles.ResultText}>
            <h2>
              {Data.TypeName}
            </h2>
            {Describtion.map(describetion => {
              return (
                <p>
                  {describetion}
                </p>
              );
            })}
          </div>
          <div className={styles.ResultContents}>
            <h1 className={styles.ResultTitle}>다른 결과 보기</h1>
            <div className={styles.ResultText}>
              {/* <OtherResult other={Other} type={Type} /> */}
            </div>
          </div>

          <div className={styles.footer} />
        </div>
      </div>;
};

export default ResultPage;
