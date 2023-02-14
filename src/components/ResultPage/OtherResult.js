import React, { useEffect, useState } from "react";
import styles from "./OtherResult.module.css";
import ResultList from "./Result_list";
const OtherResult = ({ other, type }) => {
  const [List1, setList1] = useState();
  const [List2, setList2] = useState();

  useEffect(() => {
    setList1(ResultList[type][other[0]]);
    setList2(ResultList[type][other[1]]);
  }, []);

  return (
    <div className={styles.ResultContents}>
      <h1 className={styles.ResultTitle}>다른 결과 보기</h1>
      <div className={styles.ResultText}>
        {List1.TypeName}
      </div>
      <div className={styles.ResultText}>
        {List2.TypeName}
      </div>
    </div>
  );
};

export default OtherResult;
