/* 클라이언트 요청 패스에 따른 라우팅 함수 설정 모듈 */

console.log("call : /config/routes.js");


//모듈 가져오기
const mainInfo = require("../app/controllers/MainInfoController.js");
const auth = require("../app/controllers/AuthController.js");


//라우팅 API 설정
module.exports = function (app, passport) {
        // 지도화면
        app.get("/maps/upload",auth.requiresLogin,auth.checkEmail);

        // 메인화면
        app.get("/", auth.requiresLogin, async(req, res) =>  {
          res.redirect("/majors/main"); //로그인 인증시 메인화면으로 redirect
        })

        // 지도에 접근할 경우 현재 접속중인 회원의 단과대학 위치 제공
        app.get("/majors/main",auth.requiresLogin, mainInfo.main);

        // IT융합대학 주소 라우팅
        app.get("/majors/ITs/AI",auth.requiresLogin,mainInfo.it1);
        app.get("/majors/ITs/computer",auth.requiresLogin,mainInfo.it2);
        app.get("/majors/ITs/electrical",auth.requiresLogin,mainInfo.it3);
        app.get("/majors/ITs/electronic",auth.requiresLogin,mainInfo.it4);
        app.get("/majors/ITs/energyIT",auth.requiresLogin,mainInfo.it5);

        //경영대학 주소 라우팅
        app.get("/majors/managements/management",auth.requiresLogin,mainInfo.manage1);
        app.get("/majors/managements/globalmanagement",auth.requiresLogin,mainInfo.manage2);
        app.get("/majors/managements/financialmath",auth.requiresLogin,mainInfo.manage3);

        // 사회과학대학 주소 라우팅
        app.get("/majors/socialsciences/media",auth.requiresLogin,mainInfo.social1);
        app.get("/majors/socialsciences/sightseeing",auth.requiresLogin,mainInfo.social2);
        app.get("/majors/socialsciences/economy",auth.requiresLogin,mainInfo.social3);
        app.get("/majors/socialsciences/medical",auth.requiresLogin,mainInfo.social4);
        app.get("/majors/socialsciences/statistic",auth.requiresLogin,mainInfo.social5);
        app.get("/majors/socialsciences/welfare",auth.requiresLogin,mainInfo.social6);
        app.get("/majors/socialsciences/education",auth.requiresLogin,mainInfo.social7);
        app.get("/majors/socialsciences/psychology",auth.requiresLogin,mainInfo.social8);

        // 인문대학 주소 라우팅
        app.get("/majors/humans/asia",auth.requiresLogin,mainInfo.human1);
        app.get("/majors/humans/english",auth.requiresLogin,mainInfo.human2);
        app.get("/majors/humans/europe",auth.requiresLogin,mainInfo.human3);
        app.get("/majors/humans/korean",auth.requiresLogin,mainInfo.human4);

        // 법과대학 주소 라우팅
        app.get("/majors/laws/law",auth.requiresLogin,mainInfo.laws1);
        app.get("/majors/laws/admin",auth.requiresLogin,mainInfo.laws2);
        app.get("/majors/laws/police",auth.requiresLogin,mainInfo.laws3);

        // 공과대학 주소 라우팅
        app.get("/majors/engineerings/architect",auth.requiresLogin,mainInfo.engin1);
        app.get("/majors/engineerings/chem",auth.requiresLogin,mainInfo.engin2);
        app.get("/majors/engineerings/city",auth.requiresLogin,mainInfo.engin3);
        app.get("/majors/engineerings/fire",auth.requiresLogin,mainInfo.engin4);
        app.get("/majors/engineerings/flower",auth.requiresLogin,mainInfo.engin5);
        app.get("/majors/engineerings/industry",auth.requiresLogin,mainInfo.engin6);
        app.get("/majors/engineerings/inner",auth.requiresLogin,mainInfo.engin7);
        app.get("/majors/engineerings/machine",auth.requiresLogin,mainInfo.engin8);
        app.get("/majors/engineerings/meterial",auth.requiresLogin,mainInfo.engin9);
        app.get("/majors/engineerings/tree",auth.requiresLogin,mainInfo.engin10);

        // 바이오나노대학 주소 라우팅
        app.get("/majors/bios/bionano",auth.requiresLogin,mainInfo.bios1);
        app.get("/majors/bios/chem",auth.requiresLogin,mainInfo.bios2);
        app.get("/majors/bios/food",auth.requiresLogin,mainInfo.bios3);
        app.get("/majors/bios/life",auth.requiresLogin,mainInfo.bios4);
        app.get("/majors/bios/nutrition",auth.requiresLogin,mainInfo.bios5);
        app.get("/majors/bios/physical",auth.requiresLogin,mainInfo.bios6);

        // 예술대학 주소 라우팅
        app.get("/majors/arts/act",auth.requiresLogin,mainInfo.art1);
        app.get("/majors/arts/draw",auth.requiresLogin,mainInfo.art2);
        app.get("/majors/arts/fashiondesign",mainInfo.art3);
        app.get("/majors/arts/industdesign",auth.requiresLogin,mainInfo.art4);
        app.get("/majors/arts/music",auth.requiresLogin,mainInfo.art5);
        app.get("/majors/arts/sport",auth.requiresLogin,mainInfo.art6);

        // 미래산업대학 주소 라우팅
        app.get("/majors/futureindustrys/car",auth.requiresLogin,mainInfo.future1);
        app.get("/majors/futureindustrys/display",auth.requiresLogin,mainInfo.future2);
        app.get("/majors/futureindustrys/game",auth.requiresLogin,mainInfo.future3);
        app.get("/majors/futureindustrys/medicalmachine",auth.requiresLogin,mainInfo.future4);

        // 한의과대학 주소 라우팅
        app.get("/majors/medicals/medical",auth.requiresLogin,mainInfo.medical);

        app.get("/login", auth.login); //로그인 API
        app.get("/signup", auth.signup); //회원가입 API
        app.get("/logout", auth.logout); //로그아웃 API


        /* form  user 로그인(login.hbs) API
           - passport.authenticate()을 이용하여 사용자 인증 
           - local.js에 수립한 인증 전략(local strategy)에 따라 인증하며,
           인증 결과에 따라 {}에 설정한 주소로 리다이렉션 
         */
        app.post(
            "/login_user",
            passport.authenticate("local", {
            successRedirect: "/", //인증 성공시 "/" 리다이렉트(경락정보조회)
            failureRedirect: "/login", //인증 실패시 "/login" 리다이렉트
            failureFlash: true,
            }),
            auth.checkUserLogin,
        );
        
        /* form 회원가입(signup.hbs) API 
            - DB에 user 정보 저장
        */
        app.post("/create", auth.create);

           

};
