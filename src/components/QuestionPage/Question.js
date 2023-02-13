import styles from "./Question.module.css";

const Question = ({ d }) => {
  return (
    <>
      {d.question.includes("http") ? (
        <img src={d.question} className={styles.questionImg} alt="" />
      ) : (
        <div className={styles.question}>{d.question}</div>
      )}
    </>
  );
};

export default Question;
