
function App() {
  return (
    <>
    <h1>백엔드 스프링과 연결하기</h1>
    <pre>
      package.json 아래에 
      ,
      "proxy":"http://localhost:9090" 하나를 추가해주면
      예를 들어 9090 port로 연결한 spring-boot와 연결할 수 있음

      package.json 에서 처음에 시작하는 중괄호 사이에서 
      "proxy" 가 존재할 수 있는 위치라면
      "proxy" 를 어디에 작성하든 크게 문제가 되지 않음
    </pre>
    </>
  );
}

export default App;
