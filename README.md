# Quarkus 프로젝트 시작!(학번: 20231019/이름: 임재혁)
자바웹프로그래밍(1) LOL 웹사이트 기말 과제

## 기말 과제 실습 내용
<div align="center">
    <img src="./screenshot/s1.png" width="45%" alt="메인 페이지 화면(네비바 lol 로고 삽입 + 네비바 중앙 정렬)">
    <img src="./screenshot/s2.png" width="45%" alt="검색창 화면 - 예시) 가렌">
    <img src="./screenshot/s3.png" width="45%" alt="챔피언 카드 사진(1)">
    <img src="./screenshot/s4.png" width="45%" alt="챔피언 카드 사진(2)">
    <img src="./screenshot/s5.png" width="45%" alt="모달창 화면(1) - 가렌">
    <img src="./screenshot/s6.png" width="45%" alt="모달창 화면(2) - 쓰레쉬">
    <img src="./screenshot/s7.png" width="45%" alt="로그인 페이지 화면">
    <img src="./screenshot/s8.png" width="45%" alt="로그인 실패 시 화면">
    <img src="./screenshot/s9.png" width="45%" alt="회원가입 예시(1)">
    <img src="./screenshot/s10.png" width="45%" alt="회원가입 예시(2)">
    <img src="./screenshot/s11.png" width="45%" alt="회원가입 예시(3)">
    <img src="./screenshot/s12.png" width="45%" alt="회원가입 예시(4)">
    <img src="./screenshot/s13.png" width="45%" alt="로그인 성공 이후 페이지 화면">
    <img src="./screenshot/s14.png" width="45%" alt="프로필 페이지 화면">
    <img src="./screenshot/s15.png"  width="45%" alt="프로필 페이지 - 업로드 실패 시 화면">
    <img src="./screenshot/s16.png"  width="45%" alt="프로필 페이지 - 개인 정보 수정, 비밀번호 변경 (1)">
    <img src="./screenshot/s17.png"  width="45%" alt="프로필 페이지 - 개인 정보 수정, 비밀번호 변경 (2)">
    <img src="./screenshot/s18.png"  width="45%" alt="네비바 추가 디자인">
    <img src="./screenshot/s19.png"  width="45%" alt="다운로드 페이지">
    <img src="./screenshot/s20.png"  width="45%" alt="다운로드 페이지-라이트 모드 적용">
</div>
<br>

## 기말고사 시험 공부 내용
9주차:<br>
js 다크/라이트 모드 구현<br>
MySQL 연동<br>

10주차:<br>
로그인 구현<br>

11주차:<br>
로그인/로그아웃 구현<br>
회원가입 구현<br>

12주차:<br>
암호화 구현
로그인 - 암호화 구현<br>
프로필 구현<br>

13주차:<br>
프로필 구현<br>
회원 정보 수정<br>


## 기말 과제 웹사이트 주차별 구현 과제 설명
**구현 과제에 대한 결과 사진은 기말 과제 실습 내용에서 확인하시면 됩니다.**
<br>

중간고사 이전<br>
4~5주차 마무리 과제: 추가 구현<br>
(1)상단 좌측 이미지 - LOL 로고 삽입<br>
(2)네비바 가운데 정렬<br>
(3)챔피온 카드 추가 + 상세 모달 추가 구현<br>
→ 기존 챔피언 카드: 아트록스, 사일러스, 애니비아, 브라이어, 잭스, 징크스<br>
→ 추가된 챔피언 카드: 가렌, 니달리, 쓰레쉬, 야스오, 아리, 다리우스<br>
<br>

6~7주차 마무리 과제: 추가 구현<br>
(1)데이터 정의 추가<br>
(2)검색어 기능 추가<br>
→ 검색어가 없거나 공백인 경우 메인 화면으로 돌아가기<br>
<br>

중간고사 이후<br>
9주차 마무리 과제: 추가 구현<br>
(1)챔피언 검색 결과 모달창 띄우기<br>
(2)자바스크립트 호출 방식 변경, 모든 페이지에 동일 적용<br>
→ 기존 토글 함수 - 인라인 방식<br>
→ 이벤트 리스너(addEventListener)로 변경<br>
→ champions.js, modal.js로 모달창을 띄우는 함수 추가 구현<br>
→ modal.js에 이벤트 리스너 추가<br>
<br>

10주차 마무리 과제: 추가 구현<br>
로그인 페이지의 다크/라이트 모드 구현<br>
→ 모든 페이지에 다크/라이트 모드 적용<br>
<br>

11주차 마무리 과제: 추가 구현<br>
로그인 화면 입력값 체크<br>
→ 아이디 유효성 검사 - 4~20자 영문/숫자만 허용<br>
→ 패스워드 유효성 검사 - 8자 이상, 영문 + 숫자 + 특수문자(!@#$%^&*) 포함<br>
<br>

12주차 마무리 과제: 추가 구현<br>
(1)로그인 에러 처리 - 로그인 실패 시 오류 메시지 출력<br>
(2)업로드 에러 처리 - 사진 업로드에 대한 오류 메시지 없음<br>
<br>

13주차 마무리 과제: 추가 구현<br>
토스트로 교체<br>
→ 모든 페이지에 토스트 메시지 출력<br>
<br>

그 외 추가 구현:<br>
(1)모달창 HTML 중복 제거<br>
캐릭터 카드 상세보기 클릭 시 HTML 화면 중복되는 것을 방지하고자 메인 HTML에 공통 모달 요소만 남기고<br>
champions.js, modal.js를 추가 구현하여 모달 클릭 시 상세정보 관련 HTML이 중복되지 않게 나오게 함.<br>
<br>

(2)네비바 간단한 추가 디자인<br>
네비바 외부 웹사이트 클릭 시 디자인을 메인 화면의 UI와 비슷하게 설정해봄.<br>
외부 웹사이트 클릭 시 롤 공식홈, 롤 전적, 유튜브 드롭다운이 나오고 마우스를 대면 보라색으로 색이 변함.<br>


## 기말 과제 웹사이트 구조 설명
@페이지 흐름도 (Website Flow)<br>
[메인 페이지]<br>
    │<br>
    ├── (로그인 X) → [로그인 페이지] → 로그인 성공 → 세션 생성 → 메인 페이지로 이동<br>
    │<br>
    ├── (회원가입 버튼) → [회원가입 페이지] → 가입 완료 → 로그인 페이지로 이동<br>
    │<br>
    ├── (로그인 O) → [프로필 페이지]<br>
    │        │<br>
    │        ├── [회원 정보 수정 페이지] → 수정 완료 → 프로필 페이지<br>
    │        │<br>
    │        └── 로그아웃 → 세션 삭제 → 메인 페이지<br>
    │<br>
    └── (캐릭터 카드 클릭) → [Bootstrap Modal] → 캐릭터 상세 정보 표시<br><br>

