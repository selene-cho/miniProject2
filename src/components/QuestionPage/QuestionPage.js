import { useEffect, useState } from "react";
import { Link, useAsyncError } from "react-router-dom";
import styles from "./QuestionPage.module.css";
import AnswerBtn from "./AnswerBtn";
import Question from "./Question";

const QuestionPage = ({ data, tendencyData }) => {
  /**진행도 프론트데이터 백엔드데이터 */
  const [progress, setProgress] = useState(0);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);
  const [score, setScore] = useState(0);

  /**답변 클릭시 로직 */
  function answerHandler({ target }) {
    const type = target.value;

    /**답변에 대한 데이터 쌓아주기 */
    setProgress(progress => progress + 1);
    if (type === "front") {
      setFront(front => front + 1);
    } else if (type === "back") {
      setBack(back => back + 1);
    } else if (type === "1") {
      setScore(score => score + 1);
    }

    /** 클릭한 창 닫고 다음 창 display flex해주기 */
    const questionData = target.parentElement.parentNode;
    const questionTest = target.parentElement.parentElement.nextSibling;
    questionData.style.display = "none";
    questionTest.style.display = "flex";
  }

  /**쌓아준 답변데이터 객체로 만들어주기 */
  const newAnswerData = {
    progress: progress,
    front: front,
    back: back,
    score: score
  };

  /**상위 컴포넌트에 변경된 값 보내주기 */
  useEffect(
    () => {
      tendencyData(newAnswerData);
      return () => {};
    },
    [newAnswerData]
  );

  return (
    <div className={styles.questionPage}>
      {/* 메인이동 버튼 */}
      <header className={styles.header}>
        <Link to="/">
          <a href="" title="Go to Main" className={styles.goMainBtn}>
            <span className={styles.goMainBtnTop}>Main</span>
            <span className={styles.goMainBtnBottom}>처음부터!</span>
          </a>
        </Link>
      </header>

      {/* 질문페이지 구현 */}
      <section className={styles.question}>
        {data.map(d => {
          return (
            <div className={styles.questionBox} key={d.id}>
              <Question d={d} />
              {/* 응답 버튼 */}
              <div className={styles.lists}>
                {d.answerData.map(a => {
                  return (
                    <AnswerBtn
                      key={Math.random()}
                      a={a}
                      answerHandler={answerHandler}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default QuestionPage;
