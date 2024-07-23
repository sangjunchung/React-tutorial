/*
express = 백엔드 자바스크립트에서 많이 사용하는 프레임워크
자바에서 스프링부트가 있다면 자바스크립트에는 익스프레스가 있음  

require node 라는 javascript를 편하게 이용할 수 있게 도구를 제공해주는 공장에서
express 라는 프레임워크를 가지고 와서 백엔드 기능을 할 수 있도록 설정
app 앱이라는 객체를 생성해서 express 서버를 사용할 수 있는 공간

app.use(express.static("public")); // public 이라는 폴더에 static(가만히 있는 파일 = 정적 파일)
app.use(express.json()); // 사용함(서버의 제이슨파일)

*/

const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(express.json());

// TODO: 개발자센터에 로그인해서 내 결제위젯 연동 키 > 시크릿 키를 입력하세요. 시크릿 키는 외부에 공개되면 안돼요.
// @docs https://docs.tosspayments.com/reference/using-api/api-keys
const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
const apiSecretKey = "test_sk_Z1aOwX7K8mz0ZAxQey903yQxzvNP";

// 토스페이먼츠 API는 시크릿 키를 사용자 ID로 사용하고, 비밀번호는 사용하지 않습니다.
// 비밀번호가 없다는 것을 알리기 위해 시크릿 키 뒤에 콜론을 추가합니다.
// @docs https://docs.tosspayments.com/reference/using-api/authorization#%EC%9D%B8%EC%A6%9D
const encryptedWidgetSecretKey = "Basic " + Buffer.from(widgetSecretKey + ":").toString("base64");
const encryptedApiSecretKey = "Basic " + Buffer.from(apiSecretKey + ":").toString("base64");

// 결제위젯 승인
app.post("/confirm/widget", function (req, res) {
  const { paymentKey, orderId, amount } = req.body;

  // 결제 승인 API를 호출하세요.
  // 결제를 승인하면 결제수단에서 금액이 차감돼요.
  // @docs https://docs.tosspayments.com/guides/v2/payment-widget/integration#3-결제-승인하기

  /*
  fetch("https://api.tosspayments.com/v1/payments/confirm", {
  fetch 함수는 네트워크 요청을 보내는데 사용, 경제 승인을 받기 위해서는 toss에다가 결제 확인 전달
  https://api.tosspayments.com/ -> 토슽 결제에 관련된 모든 내용이 들어있는 주소
  v1/ = 버전 1
  payments/ = 페이면츠 결제에 관련된
  confirm = 확인하는 창구

  method: "POST", -> 고객이 결제를 한 방식을 토스쪽에 전달 
                     토스에서 잔액을 확인하거나 결제금액을 확인할 때는 GET

  headers: {
  토스한테 데이터가 어떤 타입인지(이미지 / 동영상 / 글자) 미리 전달

    Authorization: encryptedWidgetSecretKey, 
    Authorization: 결제한게 맞다는 인증키를 보내는 것

    "Content-Type": "application/json",
    Content-Type : 데이터 타입이 무엇인지 전달
  },
  */
  fetch("https://api.tosspayments.com/v1/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: encryptedWidgetSecretKey,
      "Content-Type": "application/json",
    },
    /*
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      paymentKey: paymentKey,

      전달 받은 값을 JSON.문자열로 변환함
    }),
    */
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      paymentKey: paymentKey,
    }),
  }).then(async function (response) {
    const result = await response.json(); // 잠시 대기
    console.log(result);

    if (!response.ok) {
      // TODO: 결제 승인 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 결제 완료 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result); // 결과 전달 -> 결제 확인 페이지로 넘어감
  });
});
/*
app.post("/confirm/widget")
앱에서 .post로 들어오는 요청을 가져오는 주소 설정("html과 통신할 주소(url) 설정")

function(req, res){}
요청이 들어오면 수행할 기능 작성(){기능들 작성하기}
요청이 들어오면 수행할 기능 작성(req, res){}
req : server에 요청하는 값
res : server에서 html 응답을 전달하는 값

const { paymentKey, orderId, amount } = req.body;
req.body = server에 db에 넣어달라하거나, 수정해달라고 요청하는 값들을 가지고 있는 몸통에서
paymentKey = id 이름에서 paymentKey로 된 id 이름의 값을 가지고 있는 변수
orderId = id 이름에서 orderId 로 된 id 이름의 값을 가지고 있는 변수
amount = id 이름에서 amount 로 된 id 이름의 값을 가지고 있는 변수

*/
// 결제창 승인
app.post("/confirm/payment", function (req, res) {
  const { paymentKey, orderId, amount } = req.body;

  // 결제 승인 API를 호출하세요.
  // 결제를 승인하면 결제수단에서 금액이 차감돼요.
  // @docs https://docs.tosspayments.com/guides/v2/payment-widget/integration#3-결제-승인하기
  fetch("https://api.tosspayments.com/v1/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      paymentKey: paymentKey,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 결제 승인 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 결제 완료 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

// 브랜드페이 승인
app.post("/confirm/brandpay", function (req, res) {
  const { paymentKey, orderId, amount, customerKey } = req.body;

  // 결제 승인 API를 호출하세요.
  // 결제를 승인하면 결제수단에서 금액이 차감돼요.
  // @docs https://docs.tosspayments.com/guides/v2/payment-widget/integration#3-결제-승인하기
  fetch("https://api.tosspayments.com/v1/brandpay/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      paymentKey: paymentKey,
      customerKey: customerKey,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 결제 승인 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 결제 완료 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

// 브랜드페이 Access Token 발급
app.get("/callback-auth", function (req, res) {
  const { customerKey, code } = req.query;

  // 요청으로 받은 customerKey 와 요청한 주체가 동일인인지 검증 후 Access Token 발급 API 를 호출하세요.
  // @docs https://docs.tosspayments.com/reference/brandpay#access-token-발급
  fetch("https://api.tosspayments.com/v1/brandpay/authorizations/access-token", {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grantType: "AuthorizationCode",
      customerKey,
      code,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 발급 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 발급 성공 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

const billingKeyMap = new Map();

// 빌링키 발급
app.post("/issue-billing-key", function (req, res) {
  const { customerKey, authKey } = req.body;

  // AuthKey 로 카드 빌링키 발급 API 를 호출하세요
  // @docs https://docs.tosspayments.com/reference#authkey로-카드-빌링키-발급
  fetch(`https://api.tosspayments.com/v1/billing/authorizations/issue`, {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerKey,
      authKey,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 빌링키 발급 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 빌링키 발급 성공 비즈니스 로직을 구현하세요.
    // TODO: 발급된 빌링키를 구매자 정보로 찾을 수 있도록 저장해두고, 결제가 필요한 시점에 조회하여 카드 자동결제 승인 API 를 호출합니다.
    billingKeyMap.set(customerKey, result.billingKey);
    res.status(response.status).json(result);
  });
});

// 카드 자동결제 승인
app.post("/confirm-billing", function (req, res) {
  const { customerKey, amount, orderId, orderName, customerEmail, customerName } = req.body;

  // 저장해두었던 빌링키로 카드 자동결제 승인 API 를 호출하세요.
  fetch(`https://api.tosspayments.com/v1/billing/${billingKeyMap.get(customerKey)}`, {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerKey,
      amount,
      orderId,
      orderName,
      customerEmail,
      customerName,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 자동결제 승인 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 자동결제 승인 성공 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

app.listen(port, () => console.log(`http://localhost:${port} 으로 샘플 앱이 실행되었습니다.`));
