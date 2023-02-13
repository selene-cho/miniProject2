import styled from "styled-components";
import horse from "../contents/images/horse.png";

const ProgressHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
`;

const ProgressContainer = styled.div`
  margin-top: 30px;
  position: absolute;
  width: 70vw;
  height: 3vh;
  border-radius: 10px;
  background-color: rgb(255, 212, 215);
  left: 14.6%;
  z-index: 99;
`;

const Progress = styled.span`
  background: url(${horse});
  background-size: 100% 100%;
  height: 50px;
  width: 40px;
  border-radius: 5px;
  left: ${(props) => props.width};
  top: -1rem;
  position: absolute;
  transition: all 0.6s ease-in-out 0s;

  // background: purple;
  // width: ${(props) => props.width};
`;

const ProgressImg = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: bolder;

  color: white;
`;

const ProgressBar = ({ result, data }) => {
  /** 상단 프로그레스바 */
  const barWidth = result;

  return (
    <ProgressHeader>
      <ProgressContainer>
        <Progress width={(barWidth / data.length) * 100 + "%"}>
          <ProgressImg>{barWidth}</ProgressImg>
        </Progress>
      </ProgressContainer>
    </ProgressHeader>
  );
};

export default ProgressBar;
