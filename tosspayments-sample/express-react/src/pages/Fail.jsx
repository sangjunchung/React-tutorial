import { Link, useSearchParams } from "react-router-dom";

export function FailPage() {
  const [searchParams] = useSearchParams();

  return (
    <div id="info" className="box_section" style={{ width: "600px" }}>
      <img width="100px" src="https://static.toss.im/lotties/error-spot-no-loop-space-apng.png" alt="에러 이미지" />
      <h2>결제를 실패했어요</h2>

      <div className="p-grid typography--p" style={{ marginTop: "50px" }}>
        <div className="p-grid-col text--left">
          <b>에러메시지</b>
        </div>
        <div className="p-grid-col text--right" id="message">{`${searchParams.get("message")}`}</div>
      </div>
      <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
        <div className="p-grid-col text--left">
          <b>에러코드</b>
        </div>
        <div className="p-grid-col text--right" id="code">{`${searchParams.get("code")}`}</div>
      </div>

      <div className="p-grid-col">
        <Link to="http://www.naver.com">
          <button className="button p-grid-col5">
            메인으로 돌아가기
          </button>
        </Link>
        <Link to="http://localhost:3000/payment/checkout">
          <button className="button p-grid-col5" style={{ backgroundColor: "#e8f3ff", color: "#1b64da" }}>
            다시 결제하기
          </button>
        </Link>
        <Link to="#">
          <button className="button p-grid-col5" style={{ backgroundColor: "#e8f3ff", color: "#1b64da" }}>
            고객센터 문의하기
          </button>
        </Link>
      </div>
    </div>
  );
}
