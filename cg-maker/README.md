# 💥공부한 부분💥

## Serialize(직렬화)  
자바 시스템 내부에서 사용되는 객체나 데이터를 외부의 자바 시스템에서도 사용할 수 있게 하는 기술

## what is JVM & JDK & JRE  
> JDK = JRE + Development Tools  
> JRE = JVM + Library classes  
> > JDK > JRE > JVM

![image](https://user-images.githubusercontent.com/77817094/185581759-0dc4fdea-9bd3-4f66-b0f4-0e02cc6d541f.png)

* JVM (Java Virtual Machine)
  * 자바 가상환경 즉, 어디서든 자바 코드를 돌릴 수 있다. -> 자바의 강점  
  * 추가적으로 메모리를 효율적으로 관리 및 최적화 해줌 (이 process를 가비지컬렉션이라 함.)

* JRE (Java Runtime Environment)  
  * JVM이 동작하기 위한 환경을 만드는 것  
  * 클래스로더와 클래스 라이브러리가 포함되어 있어서 작성된 코드를 결합하여 JVM으로 넘겨서 실행 시킴
  * 자바로 실행만하면 jre만 있으면 됨  

* JDK (Java Development Kit)
  * 자바로 개발하는 사람이라면 jdk를 설치하여 자바를 환경에 설치해야함 -> 컴파일러 포함하고 있음  
  * .java 는 컴파일 되면 .class로 생성됨  
