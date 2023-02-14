import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/MainPage/Main";
import Routing from "./screens/Routing";
import ResultPage from "./components/ResultPage/ResultPage";

import { GlobalStyles } from "./contents/styles";

function App() {
  const [result, setResult] = useState(0);
  const [frontResult, setFrontResult] = useState(0);
  const [backResult, setBackResult] = useState(0);

  /** 질문 답변 임의 데이터 */
  const Data = [
    {
      id: 1,
      question: "수업중 오타투성이인 강사님의 코드! 당신의 생각은???",
      answerData: [
        {
          answer: "오타가 너무 신경 쓰여 집중이 안된다,,,,",
          type: "front",
        },
        { answer: "그런거 신경 안쓴다,, 일단 진도나 따라가야지", type: "back" },
      ],
    },
    {
      id: 2,
      question:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3013d968-6797-4081-b82b-5e5ef9825b61/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-02-10_011908.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230210T122919Z&X-Amz-Expires=86400&X-Amz-Signature=e2ece313e11ea30e579041063b05f3402f804fff2fdaf64127dde9c1df700a09&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25ED%2599%2594%25EB%25A9%25B4%2520%25EC%25BA%25A1%25EC%25B2%2598%25202023-02-10%2520011908.png%22&x-id=GetObject",
      answerData: [
        {
          answer: "i=1",
          type: "front",
        },
        { answer: "i=2", type: "back" },
        { answer: "i=3", type: "back" },
        { answer: "i=4", type: "back" },
      ],
    },
    {
      id: 3,
      question:
        "성공적인 프로젝트를 끝마치고 친구에게 자랑하는데, 내 프로젝트를 보기위해 주변 사람들에게 둘러쌓이고 말았다 이 때 당신의 마음은??",
      answerData: [
        {
          answer: "아아,,, 부끄운데 이따 보여줄까...?",
          type: "front",
        },
        { answer: "이런 관심??? 나쁘지 않아,,, 오히려 좋아^^", type: "back" },
      ],
    },
    {
      id: 4,
      question:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a226843f-e877-4ec7-a2fc-82085a8c4303/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-02-09_123.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230210T123114Z&X-Amz-Expires=86400&X-Amz-Signature=cf23c418ffbdb65aea0a5be00c19170fb95aa59699a0513cb1cfcd9b37300ea8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25ED%2599%2594%25EB%25A9%25B4%2520%25EC%25BA%25A1%25EC%25B2%2598%25202023-02-09%2520123.png%22&x-id=GetObject",
      answerData: [
        {
          answer: "1. HTML",
          type: "front",
        },
        { answer: "2. Python", type: "back" },
        { answer: "3. JavaScript", type: "back" },
        { answer: "4. TypeScript", type: "back" },
      ],
    },
    {
      id: 5,
      question: "빠른 트렌드 변화에 대한 당신의 생각은???",
      answerData: [
        {
          answer: "너무 빠른 변화는 따라가기 힘들다ㅠㅠ 싫다!!",
          type: "front",
        },
        { answer: "내가 또 트렌드를 잘 따라가지 ㅎㅎ", type: "back" },
      ],
    },
    {
      id: 6,
      question:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/104b985e-fe8d-4c9e-b970-59c0ed83959b/67bd64435f1f27ee8cdf2661b8faf5c3883b4ca651582a469bf8a3b4bb47502540ccd6bba747cb7a99a0508a844acce91e419d523f40ab3e89adfcb730a76c2fc63152cb1af6281efcc81149f9fbe381c124f2d12fb15b74009dbc1b7832dd9ed8c00966e831546.jfif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230210T123332Z&X-Amz-Expires=86400&X-Amz-Signature=9de452dae3b4d4d7afe96f8efd1026a1f5c4ede6dc81f3343762028fd23fb99d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%2267bd64435f1f27ee8cdf2661b8faf5c3883b4ca651582a469bf8a3b4bb47502540ccd6bba747cb7a99a0508a844acce91e419d523f40ab3e89adfcb730a76c2fc63152cb1af6281efcc81149f9fbe381c124f2d12fb15b74009dbc1b7832dd9ed8c00966e831546.jfif%22&x-id=GetObject",
      answerData: [
        {
          answer: "1. 조코딩",
          type: "front",
        },
        { answer: "2. 좋코딩", type: "back" },
        { answer: "3. 헬코딩", type: "back" },
        { answer: "4. 코딩애플", type: "back" },
      ],
    },
    {
      id: 7,
      question: "프로젝트 수행 하기위한 팀원은 어느정도가 적당한가?!",
      answerData: [
        {
          answer: "될 수 있으면 혼자 or 한명까지,,",
          type: "back",
        },
        {
          answer: "그래도 4명정도는 되어야하지 않을까??",
          type: "front",
        },
      ],
    },
    {
      id: 8,
      question:
        "2022년 10월 테슬라 사장인 일론 머스크는 “이 회사” 를 인수했다….회사의 이름은?",
      answerData: [
        {
          answer: "1. 트위터",
          type: "front",
        },
        { answer: "2. 우버", type: "back" },
        { answer: "3. 고프로", type: "back" },
        { answer: "2. 에어비엔비", type: "back" },
      ],
    },
    {
      id: 9,
      question: "영화를 만들기 위해 당신이 더 흥미 있는 것은??",
      answerData: [
        {
          answer: "작품을 빛낼 배우",
          type: "front",
        },
        { answer: "영화를 설계하는 작가나 감독", type: "back" },
      ],
    },
    {
      id: 10,
      question:
        "2022년 10월 데이터 센터 화재로 일어난 카카오 서비스 장애 사건… 데이터 센터의 위치는?",
      answerData: [
        {
          answer: "1. 구로",
          type: "front",
        },
        { answer: "2. 판교", type: "back" },
        { answer: "3. 부산", type: "back" },
        { answer: "4. 강남", type: "back" },
      ],
    },
    {
      id: 11,
      question: "신입 개발자가 주의해야 할 것이 아닌 것은?",
      answerData: [
        {
          answer: "1. 고민하다가 모르겠어도 사수에게 질문 금지",
          type: "front",
        },
        {
          answer: "2. 별로 놀랄 일도 아닌 일에 '어?!'금지",
          type: "back",
        },
        {
          answer: "3. 한 사람 뒤에 3명 이상 서있기 금지",
          type: "back",
        },
        { answer: "4. 손가락으로 모니터 가리키며 웅성웅성 금지", type: "back" },
      ],
    },
    {
      id: 12,
      question:
        "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F263ed8f1-9152-4498-be2d-fc65afeb1fd8%2F%25ED%258C%2590%25EA%25B5%2590%25EC%259C%25A1%25EA%25B5%2590.jpg?id=62ef4878-927e-4f34-87cd-ab6def10647e&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
      answerData: [
        {
          answer: "1. 쯧쯧쯧,,, 세금 낭비",
          type: "front",
        },
        {
          answer: "2. 이게 웬 갑분육교;;;",
          type: "back",
        },
        {
          answer: "3. 운동하기 좋겠다.",
          type: "back",
        },
        { answer: "4. 그렇다고 없애면 버그가 생길지도..??", type: "back" },
      ],
    },
    {
      id: 13,
      question: "개발자들이 다크모드를 선호하는 이유는?!?!",
      answerData: [
        {
          answer: "눈이 편하니까?!",
          type: "front",
        },
        {
          answer: "있어 보이니까?!",
          type: "back",
        },
        {
          answer: "빛은 벌레를 끌어들이니까?!",
          type: "back",
        },
        {
          answer: "다들 쓰니까!",
          type: "back",
        },
      ],
    },
    {
      id: 14,
      question: "연결 관계가 다른 것은?",
      answerData: [
        {
          answer: "노란색 - Javascript",
          type: "front",
        },
        {
          answer: "파랑/노랑 - Python",
          type: "back",
        },
        {
          answer: "하늘 - React",
          type: "back",
        },
        {
          answer: "빨강 - HTML",
          type: "back",
        },
      ],
    },
    {
      id: 15,
      question: "국내 개발 컨퍼런스 중 틀린 것은?",
      answerData: [
        {
          answer: "우아한 형제들 : 우아콘",
          type: "front",
        },
        {
          answer: "넥슨 : NXC",
          type: "back",
        },
        {
          answer: "네이버 : Deview",
          type: "back",
        },
        {
          answer: "카카오 : if Kakao",
          type: "back",
        },
      ],
    },
    {
      id: 16,
      question: "다음 단어를 보고 가장 먼저 생각나는 이미지를 고르세요. <코드>",
      answerData: [
        {
          answer:
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6b8eb82d-1630-4bb4-8cb2-a9607cb51593%2Foutlet.jpg?id=40fe7523-3660-402e-89c6-f6cdd237a55f&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=ed9d7d6d-cae6-455c-87a6-bffb22ae36ae&cache=v2",
          type: "front",
        },
        {
          answer:
            "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0e35cb5-ea7f-454e-ad8b-504d2640aa06%2FguitarCode.png?id=0b9072bb-979f-40d4-8e91-7e1f55765412&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
          type: "front",
        },
        {
          answer:
            "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F619776ae-406b-4194-b62f-e2af4cb8fdc1%2Fcode.png?id=f2f64153-2af6-4139-b8eb-2ab8bcfebcf5&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
          type: "back",
        },
        {
          answer:
            "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62452c68-66a9-4adf-8318-d191d38f1b97%2FqrcodeToOz.png?id=7f7d3b31-63ba-495c-b25a-1b614e452d89&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
          type: "back",
        },
      ],
    },
    {
      id: 17,
      question:
        "개발자가 다음 영단어를 보고 먼저 떠오르는 것이 바르게 연결된 것은??",
      answerData: [
        {
          answer:
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7cb4def1-7aae-47db-9155-e6630f2ed7a5%2Fpush.jpg?id=5d4ab1a6-388b-46f7-9e3d-daa30f8401d1&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=ed9d7d6d-cae6-455c-87a6-bffb22ae36ae&cache=v2",
          type: "front",
        },
        {
          answer:
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F42000b7b-834e-4be7-bb06-ca925abcd1fa%2Fprint.png?id=9d2ace92-4cee-4e60-9a1c-6a637d3b2b99&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=ed9d7d6d-cae6-455c-87a6-bffb22ae36ae&cache=v2",
          type: "back",
        },
        {
          answer:
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F896cb76f-0685-4328-96e4-0465d2fe24c2%2FgitFork.jpg?id=f3ea4422-6afe-4776-b877-f825c1a7e031&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=ed9d7d6d-cae6-455c-87a6-bffb22ae36ae&cache=v2",
          type: "back",
        },
        {
          answer:
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F324fe1d9-d0fc-4e3f-8c8d-77e5dc4c45d7%2Fbug.png?id=5279a401-b1ca-48c1-ac35-f51a04245adb&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=ed9d7d6d-cae6-455c-87a6-bffb22ae36ae&cache=v2",
          type: "back",
        },
      ],
    },
    {
      id: 18,
      question:
        "문제 상황에 부딪혔을 때, 스트레스를 얼마나 받는지 수치로 선택해주세요",
      answerData: [
        {
          answer: "1",
          type: "front",
        },
        {
          answer: "2",
          type: "back",
        },
        {
          answer: "3",
          type: "back",
        },
        {
          answer: "4",
          type: "back",
        },
      ],
    },
    {
      id: 19,
      question: "chatGPT에 대해 틀린 것은?",
      answerData: [
        {
          answer: "판사가 판결을 내리는데 참고하기도 했다.",
          type: "front",
        },
        {
          answer: "텍스트를 이해하고 답변하는 AI",
          type: "back",
        },
        {
          answer: "미국의 변호사, 의사, MBA 졸업 시험 등을 통과 했다.",
          type: "back",
        },
        {
          answer: "코딩 뿐만 아니라 시, 랩 가사, 이야기도 쓸 줄 안다.",
          type: "back",
        },
      ],
    },
    {
      id: 20,
      question: "나의 모습과 가장 가까운 이미지를 고르세요.",
      answerData: [
        {
          answer:
            "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45f843b3-204f-4eee-8b26-bb31a22f6385%2Fstudy.jpg?id=5010f7f4-41f3-4c97-8b27-9271207f4612&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
          type: "front",
        },
        {
          answer:
            "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F758897cb-394f-4a58-83bb-0d1a12fab1fb%2F%25EA%25BC%25BC%25EA%25BC%25BC.jpg?id=627c047c-eada-4f2f-99c1-69657bafe2e0&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
          type: "back",
        },
        {
          answer:
            "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff663aed3-aa1d-406b-99df-355a318de061%2Fstudy_(2).jpg?id=2bf9e309-c0ac-4688-bb5b-9b2af63e47f5&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
          type: "back",
        },
        {
          answer:
            "https://legend-palm-1f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9276fd8e-6cca-4f43-9136-d23d3025f5d8%2Fcomunicate.jpg?id=86434744-d4f0-4f93-840c-adce5153aca9&table=block&spaceId=00feaf78-d356-41ee-90f9-616e7f73fd77&width=1440&userId=&cache=v2",
          type: "back",
        },
      ],
    },
  ];

  /**답변한 데이터(data : 현재까지 답변한 답 수, front : 현재까지 답한 프론트 답, back : 현재까지 답한 백엔드 답) */
  const tendencyData = (data) => {
    setResult(data.progress);
    setFrontResult(data.front);
    setBackResult(data.back);
  };

  console.log(
    `"data" : ${result}, "front" : ${frontResult}, "back" : ${backResult}`
  );

  return (
    /* result(진행도)가 10일때 프로그래스바 & 질문페이지 없애기  */
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {result === Data.length ? (
            false
          ) : (
            <Route
              path="/test"
              element={
                <Routing
                  result={result}
                  data={Data}
                  tendencyData={tendencyData}
                />
              }
            />
          )}

          {/* result(진행도)가 10일때 결과페이지 보여주기  */}
          {result === Data.length ? (
            <Route path="/test" element={<ResultPage frontResult={frontResult} backResult={backResult}/>} />
          ) : (
            false
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Main from "./components/Main";
// import Routing from "./UI/Routing";
// import ResultPage from "./components/ResultPage";

// import { GlobalStyles } from "./contents/styles";

// function App() {
//   const [result, setResult] = useState(0);
//   const [frontResult, setFrontResult] = useState(0);
//   const [backResult, setBackResult] = useState(0);

//   /** 질문 답변 임의 데이터 */
//   const Data = [
//     {
//       id: 1,
//       question: "question1",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 2,
//       question: "question2",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 3,
//       question: "question3",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 4,
//       question: "question4",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 5,
//       question: "question5",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 6,
//       question: "question6",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 7,
//       question: "question7",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 8,
//       question: "question8",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 9,
//       question:
//         "https://img2.quasarzone.com/editor/2022/01/26/23418c3a40943f6dd3c51249c0edd9bd.png",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//     {
//       id: 10,
//       question: "question10",
//       answerData: [
//         {
//           answer: "answer1",
//           type: "front",
//         },
//         { answer: "answer2", type: "back" },
//       ],
//     },
//   ];

//   /**답변한 데이터(data : 현재까지 답변한 답 수, front : 현재까지 답한 프론트 답, back : 현재까지 답한 백엔드 답) */
//   const tendencyData = (data, front, back) => {
//     console.log(`"data" : ${data}, "front" : ${front}, "back" : ${back}`);
//     setResult(data);
//     setFrontResult(front);
//     setBackResult(back);
//   };

//   return (
//     // <>
//     //   {/* result(진행도)가 10일때 프로그래스바 & 질문페이지 없애기  */}
//     // {result === 10 ? (
//     //   false
//     // ) : (
//     //   <>
//     //     <ProgressBar result={result} />
//     //     <QuestionPage data={Data} tendencyData={tendencyData} />
//     //   </>
//     // )}

//     //   {/* result(진행도)가 10일이고 front답 수와 back답 수에 따른 페이지 보여주기  */}
//     //   {result === 10 && frontResult > 5 ? (
//     //     <div>front!!!!</div>
//     //   ) : result === 10 && backResult > 5 ? (
//     //     <div>backEnd!!!!!</div>
//     //   ) : result === 10 ? (
//     //     <div>none</div>
//     //   ) : (
//     //     false
//     //   )}
//     // </>
//     <>
//       <GlobalStyles />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Main />} />
//           {result === 10 ? (
//             false
//           ) : (
//             <Route
//               path="/test"
//               element={
//                 <Routing
//                   result={result}
//                   data={Data}
//                   tendencyData={tendencyData}
//                 />
//               }
//             />
//           )}

//           {/* result(진행도)가 10일때 프로그래스바 & 질문페이지 없애기  */}
//           {result === 10 ? (
//             <Route path="/test" element={<ResultPage />} />
//           ) : (
//             false
//           )}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
