# Quarkus 프로젝트 시작!(학번: 20231019/이름: 임재혁)
자바웹프로그래밍(1) LOL 웹사이트 기말 과제

## 기말 과제 실습 내용
<div align="center">
    <img src="./screenshot/s0.png" width="45%" alt="실습 화면0">
    <img src="./screenshot/s1.png" width="45%" alt="실습 화면1">
    <img src="./screenshot/s2-1.png" width="45%" alt="실습 화면2-1">
    <img src="./screenshot/s2-2.png" width="45%" alt="실습 화면2-2">
    <img src="./screenshot/s3.png" width="45%" alt="실습 화면3">
    <img src="./screenshot/s4.png" width="45%" alt="실습 화면4">
    <img src="./screenshot/s5.png" width="45%" alt="실습 화면5">
    <img src="./screenshot/s6.png" width="45%" alt="실습 화면6">
    <img src="./screenshot/s7.png" width="45%" alt="실습 화면7">
    <img src="./screenshot/s8.png"  width="45%" alt="실습 화면8">
    <img src="./screenshot/s9.png"  width="45%" alt="실습 화면9">
    <img src="./screenshot/s10.png"  width="45%" alt="실습 화면10">
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


## 기말 과제 웹사이트 설명
@프로젝트 구조<br>
java-web_20231019<br>
│<br>
├── src/<br>
│   ├── main/<br>
│   │   ├── java/                     # Java 소스코드 (컨트롤러, 서비스, 모델 등)<br>
│   │   ├── resources/                # 설정 파일, 템플릿, 정적 리소스<br>
│   │   │   ├── META-INF/resources/   # HTML, CSS, JS 파일이 위치하는 실제 웹 루트<br>
│   │   │   └── application.properties # 설정 파일<br>
│   │<br>
│   └── test/                         # 테스트 코드<br>
│<br>
├── .mvn/                             # Maven Wrapper 설정<br>
├── pom.xml                           # Maven 프로젝트 설정<br>
├── mvnw / mvnw.cmd                   # Maven Wrapper 실행 파일<br>
├── .gitignore<br>
└── README.md<br><br>

============================================================================<br><br>

@웹사이트 구조<br>
1.메인 페이지<br>
사이트 소개 및 기본 UI 제공<br>
로그인 여부에 따라 다른 메뉴 표시<br>
세션 체크 기능 포함<br>

2.회원가입 기능<br>
사용자 정보 입력<br>
비밀번호 암호화 저장<br>
중복 ID 체크<br>
MySQL 연동하여 DB 저장<br>

3.로그인 / 로그아웃 기능<br>
입력한 ID/PW를 DB와 비교<br>
암호화된 비밀번호 검증<br>
로그인 성공 시 세션 생성<br>
로그아웃 시 세션 삭제<br>

4.프로필 페이지<br>
로그인한 사용자 정보 표시<br>
프로필 이미지, 닉네임, 이메일 등 조회<br>
DB에서 사용자 정보 불러오기<br>

5.회원 정보 수정<br>
프로필 정보 변경<br>
비밀번호 변경 시 암호화 적용<br>
변경된 정보 DB 업데이트<br>

6.다크/라이트 모드 (JavaScript)<br>
JS로 테마 전환 기능 구현<br>
LocalStorage 저장 → 새로고침해도 유지<br><br>

============================================================================<br><br>

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


✔ 흐름도 설명<br>
로그인하지 않은 사용자는 프로필 페이지 접근 불가<br>
로그인 성공 시 HttpSession 생성 → 로그인 상태 유지<br>
로그아웃 시 세션 삭제 후 메인 페이지로 이동<br>
캐릭터 카드는 로그인 여부와 상관없이 모달로 정보 표시<br><br>

============================================================================<br><br>
@기술 스택<br>
Backend: Quarkus (Java, RESTEasy Reactive, Hibernate ORM, JDBC MySQL Driver)<br>
Frontend: HTML5, CSS3, JavaScript(ES6), Bootstrap 5(Modal, Card, Navbar 등)<br>
Database: MySQL 8.x + MySQL Connector/J<br>
기타: SHA-256 Password Hashing, HttpSession 기반 로그인 관리<br><br>


@기술 스택 상세 설명<br>
*Backend: Quarkus (Java)*<br>
사용 확장(Extensions):<br>
quarkus-resteasy-reactive, quarkus-hibernate-orm, quarkus-jdbc-mysql, quarkus-arc(CDI)<br>
REST API 개발: JAX-RS 기반 (@Path, @GET, @POST)<br>
ORM: Hibernate ORM으로 엔티티 매핑 및 CRUD 처리<br>
의존성 주입: CDI(Arc) 사용<br>
Dev Mode 지원: 코드 변경 시 서버 자동 리로드<br><br>


*Frontend: HTML5, CSS3, JavaScript + Bootstrap 5*<br>
HTML5로 페이지 구조 작성<br>
CSS3로 기본 스타일링 및 반응형 레이아웃 구성<br>
JavaScript(ES6)로 다크/라이트 모드 구현 (LocalStorage 저장)<br>
Bootstrap 5 컴포넌트 사용:<br>
Modal → 캐릭터 상세 정보 표시<br>
Card → 챔피언 카드 UI<br>
Navbar → 상단 메뉴<br>
Grid System → 반응형 레이아웃<br>
JS로 Bootstrap Modal에 동적 데이터 삽입<br><br>


*Database: MySQL*<br>
버전: MySQL 8.x<br>
드라이버: MySQL Connector/J (mysql-connector-java)<br>
사용자 정보 저장 테이블 구성 (id, password, email, nickname 등)<br>
Hibernate ORM 또는 JDBC로 CRUD 처리<br><br>


*기타 기술 요소*<br>
SHA-256 Password Hashing<br>
비밀번호를 SHA-256 알고리즘으로 해시 후 DB에 저장<br><br>

HttpSession 기반 로그인 관리<br>
로그인 성공 시 세션 생성 → 페이지 이동 시 로그인 상태 유지<br><br>

Bootstrap Modal + JS 이벤트 처리<br>
카드 클릭 → JS로 데이터 읽기 → Modal에 삽입 → Modal 표시<br><br>

다크/라이트 모드<br>
JS로 테마 전환, LocalStorage로 사용자 설정 저장<br><br>


============================================================================<br><br>

@캐릭터 카드 & Bootstrap 모달 기능 설명<br>
웹사이트에서는 LOL 챔피언 캐릭터 카드(Champion Card)를 사용하여<br>
사용자가 캐릭터 정보를 직관적으로 확인할 수 있도록 구성되어 있다.<br>
각 캐릭터 카드는 Bootstrap Card 컴포넌트를 기반으로 제작되었으며,<br>
카드를 클릭하면 Bootstrap Modal이 실행되어 캐릭터 상세 정보를 보여준다.<br><br>

✔ 캐릭터 카드 기능<br>
Bootstrap의 card 클래스를 활용해 캐릭터 이미지 + 이름을 표시<br>
카드 클릭 시 JavaScript 이벤트가 실행되어 모달을 띄움<br>
반응형 UI로 모바일에서도 자연스럽게 정렬됨<br><br>

✔ Bootstrap 모달 기능<br>
Bootstrap의 modal 컴포넌트를 사용하여 팝업 형태로 정보 표시<br>
캐릭터 설명, 역할(Role), 난이도, 스킬 정보 등을 표시 가능<br>
모달은 HTML에 미리 만들어두고, JS로 내용만 동적으로 변경 가능<br><br>

✔ JavaScript 연동 방식<br>
각 카드에 data-* 속성을 부여하여 캐릭터 정보를 저장<br>
카드 클릭 시 JS가 해당 데이터를 읽어 모달 내부에 삽입<br>
document.getElementById() 또는 querySelector()로 모달 요소 접근<br>
new bootstrap.Modal()을 통해 모달을 실행<br><br>

✔ 동작 흐름<br>
사용자가 캐릭터 카드를 클릭한다.<br>
JS가 클릭된 카드의 data-name, data-img, data-desc 등을 읽는다.<br>
모달 내부의 제목, 이미지, 설명 영역에 데이터를 삽입한다.<br>
Bootstrap 모달이 화면에 표시된다.<br><br>


============================================================================<br><br>


@ERD (데이터베이스 테이블 구조)<br>
아래는 MySQL에서 사용되는 users 테이블 ERD 구조이다.<br>
회원가입, 로그인, 프로필, 정보 수정 기능을 모두 지원하기 위한 최소 구성이다.<br><br>

📌 users 테이블<br>
users<br>
├── id (INT, PK, AUTO_INCREMENT)        # 고유 사용자 번호<br>
├── username (VARCHAR)                  # 로그인 ID (중복 불가)<br>
├── password (VARCHAR)                  # SHA-256 해시 비밀번호<br>
├── email (VARCHAR)                     # 이메일<br>
├── nickname (VARCHAR)                  # 닉네임<br>
└── profile_img (VARCHAR)               # 프로필 이미지 경로<br><br>

✔ ERD 설명<br>
id → 기본키(PK), 자동 증가<br>
username → UNIQUE, 로그인 ID로 사용<br>
password → SHA-256 해시 문자열 저장<br>
email → 사용자 이메일<br>
profileImage → 프로필 이미지 파일명 또는 URL<br><br>
