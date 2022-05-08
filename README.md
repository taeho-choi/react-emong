# EMONG (HTML/CSS/JavaScript/React/Firebase)

---

### 프로젝트 소개

- 배포 링크 : [https://taeho-choi.github.io/react-emong/](https://taeho-choi.github.io/react-emong/)
- 익명으로 오늘의 감정을 공유하고, 이모지를 이용해 유저들에게 공감을 받을 수 있는 모바일/PC 반응형 웹사이트입니다.
- html5 게임/메타버스를 개발하고 싶어 웹 공부 목적으로 개발하였습니다.
- HTML, CSS, JavaScript 언어와 React 라이브러리를 사용하여 개발하였습니다.
- Firebase 서비스를 이용해 회원가입과 로그인, 데이터베이스를 연동하였습니다.

### Desktop Preview

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7bc28abb-24c3-416f-a2ff-2df5beb908d8/Untitled.png)

### Mobile Preview

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bbf00c0c-4bbc-4b6d-ad68-92f91be5afce/Untitled.png)

# 맡은 역할

---

- 프로젝트 기획
- 프론트엔드 개발
- Firebase 연동
- 프로젝트 배포

# 구현 내용

---

- HTML, CSS로 웹사이트의 레이아웃을 디자인하였습니다.
- 모바일 기기에 맞는 레이아웃 전환을 위해 반응형 css를 작성하였습니다.
- React 라이브러리를 사용하여 페이지를 컴포넌트화 하였습니다.
- JSX 문법과 useState, useEffect, useRefReact 등의 React Hooks를 사용하여 기능 동작을 구현하였습니다.
- Firebase 서비스의 Authentication을 사용하여 회원가입, 로그인 기능을 구현하였습니다.
- Firebase 서비스의 Cloud Firestore를 사용하여 게시글을 데이터베이스와 연동하였습니다.
- release 브랜치를 생성하여 Github Pages를 통해 웹사이트를 배포하였습니다.

# 코멘트

---

- 모바일 기기로 테스트했을 때 브라우저의 하단 툴바가 메뉴를 가리는 등 예상치 못한 문제들이 많았습니다. 디바이스 별 호환을 구현하는 데에 시간을 많이 투자하였습니다.
- 검색 결과의 개수를 표시할 때 게시글 배열 State를 순회하는데 이 때 계속 컴포넌트가 리렌더되는 문제가 있었습니다. 결과의 개수를 State가 아닌 let 변수로 변경하여 해결하였습니다. State로 관리해야 할 때와 그렇지 않을 때를 구분할 수 있어야 한다는 것을 느꼈습니다.
- 검색 기능에서 [Warning: Maximum update depth exceeded.] 에러를 해결하는 데에 시간을 많이 사용하였는데, useEffect 함수의 dependency array 인자의 적절히 주지 않아서 발생한 문제였습니다. dependency array로 검색한 문자열을 주어 검색한 값이 바뀔 때만 effect를 실행하도록 하여 해결하였습니다.
