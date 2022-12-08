// 회원 가입 및 로그인 인증 모듈 */

console.log("call : /controllers/Authcontroller.js");


const mongoose = require("mongoose");
//User 모델 참조
const User = mongoose.model("User");

//login 라우팅 함수 설정 
module.exports.login = async (req, res) => {
  console.log("login 함수 호출");

  //회원 가입에 성공한 경우 req.flash()에는 "회원가입성공" 메시지를 담고 있음
  res.render("user/login", { pageTitle: "로그인", alert: req.flash() });
};

// main화면 라우팅 함수 설정
module.exports.main = async (req,res)=>{
  console.log("main화면 함수 호출");

  res.render("majors/main", { 
    pageTitle: "메인화면",
    isUserLogedIn: req.isAuthenticated(), 
  });
}

//signup 라우팅 함수 설정 
module.exports.signup = async (req, res) => {
  console.log("signup 함수 호출");

  //회원 가입에 실패한 경우 req.flash()에는 "err.message" 메시지를 담고 있음
  res.render("user/signup", { pageTitle: "회원가입", alert: req.flash() });
};

//logout 라우팅 함수 설정
module.exports.logout = async (req, res) => {
  console.log("logout 함수 호출");

  // console.log(req.session.passport.user);
  console.log(req.session);

  //logout시 session 종료
  try {
    if (req.session) {
      req.logout(); //Session 종료
      //session 종료 상태를 session에 저장
      await req.session.save((error) => {
        if (error) {
          console.log(error);
        } else {
          res.redirect("/login");
        }
      });
    } else {
      console.log("no session");
    }
  } catch (error) {
    console.log(error);
  }

};

// maps/upload 라우팅 함수 설정
module.exports.checkEmail=async (req,res)=>{
  console.log("checkEmail 함수 호출");
  console.log(req.session.passport.user);

  // 현재 접속 중인 계정의 이메일주소
  const email=req.session.passport.user;

  //이메일 주소를 통해 소속 단과대학 정보 확인
  const user=await User.findOne({email:email});
          let major=user.major;
          if(major==="인문대학" || major==="사회과학대학" || major==="경영대학"){
            major="가천관";
          }
          if(major==="법과대학"){
            major="법과대학"
          }
          if(major==="미래산업대학"){
            major="법과대학"
          }
          if(major==="체육대학"){
            major="예술대학"
          }
          //소속 단과대학 지도가 나올 수 있도록 upload.hbs에 major값 랜더링
          res.render("maps/upload",{
            major:major
          });
}

//MongoDB에 user 정보(이메일과 비밀번호, salt)를 저장하는 라우팅 함수
module.exports.create = async (req, res) => {
  console.log("create 함수 호출");

  const user = new User({
    email: req.body.user_email,
    password: req.body.user_password,
    major:req.body.user_major
  });
  
  return user.save((err) => {
    if (err) {
      req.flash("message", err.message); //flash 메시지 설정
      res.redirect("/signup");
    } else {
      req.flash("message", "회원가입성공"); //flash 메시지 설정
      res.redirect("/login");
    }
  });

};

/* requiresLogin 라우팅 함수 
   - 클리이언트 요청이 있을 때마다 사용자 인증 여부 확인
   - 인증(로그인)이 되어 있으면 다음을 실행할 수 있고,
     아니면 '/login'으로 리다이렉트
    예) app.get("/reqInfo", auth.requiresLogin,marketReqInfo.index);*/
module.exports.requiresLogin = async (req, res, next) => {
  console.log("requiresLogin 함수 호출");
  console.log(req.isAuthenticated());

  //로그인(인증) 상태(true)이면 next() 수행
  if (req.isAuthenticated()) return next();
  else res.redirect("/login"); //아니면 "login"으로 리다이렉트

};

//checkUserLogin 라우팅 함수 설정 
module.exports.checkUserLogin = async (req, res) => {
  console.log("checkUserLogin 함수 호출");
 
//sessions에 returnTo가 설정되어있다면 해당주소로, 없다면 "/"로 이동 
//  - 세션에 리다이렉션할 url이 있으면 해당 url로 리다리렉션하고, 
//    없으면 "/"로 리다이리렉션

  const redirectTo = req.session.returnTo ? req.session.returnTo : "/";
  console.log(redirectTo);

  delete req.session.returnTo;
  res.redirect(redirectTo);
};
