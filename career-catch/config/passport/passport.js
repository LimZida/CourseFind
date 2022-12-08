/*  passport 사용자 인증 처리
  - 인증 방식(LocalStrategy) 등록
  - 인증 후 사용자 정보를 세션에 저장하거나 사용자 정보를 복원하는 모듈 */

console.log("call : /config/passport/passport.js");

/* 인증 방식(LocalStrategy) 모듈(local.js) 참조
   - 인증 방식별로 설정 파일을 만들어 스트래티지를 선언
*/
const local = require("./local.js");

//인증 후 사용자 정보를 세션에 저장하거나 사용자 정보를 확인

module.exports = (passport) => {
  /* serializeUser() 콜백 함수: 사용자 인증을 처음에 성공했을 때 호출(자동호출됨)
     - 사용자 인증(로그인) 성공시 실행되는 local.js의 done(null, user)에서 인증된
       user 객체를 전달 받아 user.email을 세션에 저장하는 콜백 함수(user 정보로 세션 생성) */
  passport.serializeUser((user, done) => {
    console.log("passport.serializeUser()  호출 : " + user.email);
    //session에 저장할 정보를 done(null,user.email)과 같이 두번째 인자로 전달
    done(null, user.email);
  });
  /* deserializeUser() 콜백 함수: 
     - 사용자 인증 이후 사용자 요청이 있을 때마다 세션 정보를 비교(세션 정보를 가지고 현재 user가 누구인지 파악)
  */
  passport.deserializeUser((email, done) => {
    console.log("passport.deserializeUser()  호출 : " + email);
    const profile = { email: email };
    done(null, profile); //세션 상태를 체크해서 패스포트에게 전달
  });
  // 인증방식(local)을 미들웨어로 등록
  passport.use(local);
};
