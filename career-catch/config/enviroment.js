//환경 설정 모듈

console.log("call : /config/environment.js");

module.exports = {
  PORT: 000000, //포트번호
  DATABASE: "//////////////", //Database 주소
  SERVICEKEY: "//////////////", //오픈 API에서 발급받은 server key 값
  MONGO_SESSION_COLLECTION_NAME: "//////////",
  SESSION_SECRET: "//////////////", //세션 암호화에 사용할 값
  PAGINATION: {
    PAGE_SIZE: 00000,
  },
};
