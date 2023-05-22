# 📺 HTML5 기반 방송 CG 그래픽 생성 📺

## 프로젝트 기간 📌
```
2022.04.12 ~ 2022.11.30
```

## 프로젝트 개요 📌
```
🔺 방송CG는 전통적으로 전문 그래픽툴(포토샵, After Effects 등)로 제작을 하는데 소요시간이 길고, 사람이 직접 데이터를 입력하다보니 인적사고가 발생할 가능성이 높다는 단점이 있다.

🔹 최근들어 HTML5 기반의 프론트엔드 기술이 빠르게 발전하면서 이를 방송CG로 적용하고자 하는 움직임이 보이고 있으며 예로 BBC를 포함한 유럽의 일부 방송사들이 HTML5기반 원격 그래픽 제작 시스템을 개발하여 코로나 상황에 비대면 방송제작시스템의 효과를 톡톡히 보았다고 한다.

🔸 이 프로젝트는 공공데이터 오픈API, 실시간 사용자 참여 데이터, 화제기사등을 실시간으로 CG로 표출하여 방송화면에 합성할 수 있는 HTML5 기반의 방송제작시스템을 만드는 것이다.
```

## 개발 필요성 및 기대효과 📌
```
필요성
🔺 CG 개발을 진행할 때 각자의 로컬 데이터를 이용하여 진행하다 보니 협업 측면에서 분명한 단점이 존재한다.
🔹 HTML5기반 원격 그래픽 제작 시스템을 개발하여 비대면 방송제작시스템의 효과를 볼 수 있음.

기대효과
🔸 NodeCG는 그래픽 페이지를 템플릿처럼 관리하고, 사용자 요청에 따라 실시간으로 다이나믹하게 그래픽을 생성할 수 있다.
🔸 데이터를 미리 데이터베이스화하여 상황에 맞게 자동으로 CG를 표출할 수 있으므로 일의 정확성을 높여주고 소요 시간을 줄여주는 효과를 기대할 수 있다.
```

## 주요기능 및 예상결과물 📌

| 영역 | 주요기능 | 예상 결과물 |
|---------------|--------------------|----------------------------------------------|
| 사용자용 웹앱 | 사용자 실시간 채팅 | ・ Mobile/Desktop 웹앱에서 사용자간 실시간 채팅|
| 사용자용 웹앱 |사용자 실시간 투표 | ・ 실시간 화제 기사에 찬반 투표를 할 수 기능 |
| 관리자용 웹앱 | 관리자용 Admin 페이지 구축 | ・ 리액트 기반의 사용자 및 사용자 데이터 관리용 Admin 페이지 구축 |
| 관리자용 웹앱 | 데이터값을 CG로 표출 | ・ 사용자 실시간 채팅, 투표결과를 웹그래픽으로 변환 |
| 관리자용 웹앱 | 데이터값을 CG로 표출 | ・ 모바일 화면 해상도에 맞게 최적화된 CG 그래픽 생성 |
| 기타 서비스 | 데이터 크롤링 | ・ 실시간으로 트래픽이 높은 뉴스의 헤드라인을 크롤링 |
```
🔹 여러 프로그램들의 투표 결과들에 대하여 다양한 기준(연령대, 성별 등)으로 시각화된 결과를 확인할 수 있다.
🔹 사용자가 실시간 투표하고 투표한 결과가 바로 시각적으로 표현할 수 있도록 한다.
🔹 사용자에 특화된 서비스를 제공할 수 있도록 사용자의 참여 자료를 분석한다.
```

## 핵심기술 📌

| 구분 | 항목 | 적용내역 |
|-|-|-|
| OS | Ubuntu 22.04.1 LTS | 리눅스 서버 배포 |
| 개발환경(IDE) | IntelliJ IDEA, Visual Studio Code | 서버 개발과 클라이언트 개발용 IDE |
| 개발도구 | Docker | 도커 컨테이너 환경에서 배포 |
| 개발언어 | Java, JavaScript | Java – 백엔드, JavaScript- 프론트엔드 |
| DB | PostgreSQL | Schema, View, Table Join |
| 인증 | Auth0 | 카카오 간편인증 추가 |

```
클라우드 : AWS
API : RestAPI
통신 : Spring websocket
```

## 작품 구성도 📌

<img width="550" alt="스크린샷 2023-05-23 오전 8 03 57" src="https://github.com/Kang-SeoHyun/Kang-SeoHyun/assets/77817094/02201a82-13c1-4a21-9f38-462d87a1b1ef">

## 프로젝트 수행일정 📌

 <img width="550" alt="스크린샷 2023-05-23 오전 8 07 22" src="https://github.com/Kang-SeoHyun/Kang-SeoHyun/assets/77817094/66ad6754-1600-447b-84c4-9e2e8b8e3ac9">
