# Express를 이용한 MVC 패턴 사용 예시

## 소개
[Local Library Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)을 순서에 따라 진행한 프로젝트로 express와 mongoDB를 이용해 기본적인 CRUD 환경을 구성했다.

## 설치
1. `.env` 파일 내에 `MONGO_DB` URL과 PORT 설정

```env
MONGO_DB="mongodb://localhost:27017"
PORT="3000"
NODE_ENV="development"
```

2. Node Version: >= 20.9.0
3. 기초 데이터 세팅: `populatedb.js`

```cmd
node populatedb <your MongoDB url>
```

4. 패키지 다운로드: `npm install`
5. 앱 실행: `npm run serverstart`

## 폴더 구조: MVC Pattern

### 1. Model
**데이터 스키마**와 추가적인 **데이터 처리 로직**이 이루어지는 폴더

### 2. View
UI 태그들이 위치하며 Controller에서 받은 데이터 처리 관련 함수와 변수를 이용해 **사용자와 상호작용**하는 폴더

### 3. Controller
**Model과 View 사이에서 중개하는 역할**을 하며, Model에서 가져온 데이터를 바탕으로 View에 넘겨줄 함수와 변수를 지정하는 폴더

## 처리 흐름

1. `/bin/www`에서 서버 관련 세팅이 이루어짐.
2. `/app.js`에서 express 관련 세팅을 가져옴.
3. express는 `/routes` 내에 있는 route script를 로드함.
4. express의 Router를 이용해 http method 별 controller 함수를 가져옴.
5. 호출된 controller의 함수는 `/models`에서 데이터를 가져와 `/views`로 처리된 데이터와 함수를 던져줌.
6. `/views`의 UI 관련 태그에서 가져온 데이터와 함수를 기반으로 사용자와 상호작용함.

## 최적화
`compression` 패키지를 이용해 gzip, deflate 형태로 압축하여 client에 전달해 전송 시간을 단축시킴.

## 보안
1. `helmet` 패키지를 이용해 client와 server 통신 간 발생할 수 있는 보안 취약점을 보조함.
2. `express-validator` 패키지를 이용해 form의 input 내용이 escape 되도록 해 명령어가 inject 될 수 있는 취약점을 해소함.

## 미비점
1. Build 도구를 이용해 빌드 환경 구성을 하지는 않음.
2. API 통신 간 캐싱에 대한 로직이 부재함.
3. docker를 이용한 컨테이너 방식의 배포 환경 구성이 없음.
