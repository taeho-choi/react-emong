# react-emong

익명으로 오늘의 감정을 공유하고, 이모지를 이용해 유저들에게 공감을 받을 수 있는 모바일/PC 반응형 웹사이트입니다.

- 배포 링크: https://taeho-choi.github.io/react-emong/
- 개발 환경: <img src="https://img.shields.io/badge/Windows-0078D6?style=flat&logo=Windows&logoColor=white"/> <img src="https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=VisualStudioCode&logoColor=white"/>
- 개발 언어: <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>

## Preview

![mobile](https://user-images.githubusercontent.com/60216512/162748386-104e0181-4dd2-46dc-a892-0e51018e0c08.png)
![KakaoTalk_20220411_215205959](https://user-images.githubusercontent.com/60216512/162749184-8706562c-f9f5-4e12-8143-73ef526ac9f7.png)

## Comments

- React를 처음 공부해가며 기획부터 배포까지 혼자 진행하였다. 모바일 기기로 테스트했을 때 브라우저의 하단 툴바가 메뉴를 가리는 등 예상치 못한 문제들이 많았다. 디바이스 별 호환을 구현하는 데에 시간을 많이 투자한 것 같다.
  <br/>
- 회원가입과 데이터의 저장을 위해 백엔드가 필요하여 Firebase를 연동하였다.
  <br/>
- 검색 결과의 개수를 표시할 때 게시글 배열 State를 순회하는데 이 때 계속 컴포넌트가 리렌더되는 문제가 있었다. 결과의 개수를 State가 아닌 let 변수로 변경하여 해결하였다. 필요한 값을 State로 관리해야 할 때와 그렇지 않을 때를 구분할 수 있어야 한다.
