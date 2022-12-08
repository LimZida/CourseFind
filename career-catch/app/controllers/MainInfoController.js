// 메인화면 및 학과화면 Controller(라우팅 API 모듈 선언) 

console.log("call : /controllers/MainInfoController.js");

const pageTitle = "메인화면";


// 메인화면 라우팅 API 설정(localhost:3000/majors/main)
module.exports.main = async (req, res) => {
  console.log("main화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();

  //majors/main.hbs 뷰 템플릿 랜더링
  res.render("majors/main", {
    post: {
      image:'https://cdn-icons-png.flaticon.com/512/4737/4737471.png',
      image2:'https://cdn-icons-png.flaticon.com/512/921/921362.png',
      image3:'https://cdn-icons-png.flaticon.com/512/1669/1669431.png',
      image4:'https://cdn-icons-png.flaticon.com/512/2667/2667070.png',
      image5:'https://cdn-icons-png.flaticon.com/512/1372/1372863.png',
      image6:'https://cdn-icons-png.flaticon.com/512/1284/1284079.png',
      image7:'https://cdn-icons-png.flaticon.com/512/1732/1732660.png',
      image8:'https://cdn-icons-png.flaticon.com/512/2754/2754696.png',
      image9:'https://cdn-icons-png.flaticon.com/512/1253/1253590.png',
      image10:'https://cdn-icons-png.flaticon.com/512/910/910377.png',
      // background1:'http://cdn.edujin.co.kr/news/photo/202107/36493_70208_1013.jpg',
      background1:'https://blog.kakaocdn.net/dn/pjiIM/btqR3QZ5N42/3lVvnWFgBVihjBJIsm2KHk/img.png',
      background2:'https://cdn.imweb.me/upload/S2017082859a39c5e17a60/5a444177a6328.jpg',
      background3:'https://img.seoul.co.kr/img/upload/2019/02/21/SSI_20190221160937.jpg',
      linkImg1:'https://cdn-icons-png.flaticon.com/512/2861/2861698.png',
      linkImg2:'https://cdn-icons-png.flaticon.com/512/1283/1283203.png',
      linkImg3:'https://cdn-icons-png.flaticon.com/512/1087/1087815.png',
     },
    pageTitle: pageTitle,
    isUserLogedIn: isLogin,
  });
};

module.exports.it1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/AI.hbs 뷰 템플릿 랜더링
  res.render("majors/ITs/AI",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   });
};

module.exports.it2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/computer.hbs 뷰 템플릿 랜더링
  res.render("majors/ITs/computer",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.it3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/electrical.hbs 뷰 템플릿 랜더링
  res.render("majors/ITs/electrical",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.it4= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/electronic.hbs 뷰 템플릿 랜더링
  res.render("majors/ITs/electronic",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.it5= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/energyIT.hbs 뷰 템플릿 랜더링
  res.render("majors/ITs/energyIT",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.manage1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/management.hbs 뷰 템플릿 랜더링
  res.render("majors/managements/management",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.manage2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/globalmanagement.hbs 뷰 템플릿 랜더링
  res.render("majors/managements/globalmanagement",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.manage3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/financialmath.hbs 뷰 템플릿 랜더링
  res.render("majors/managements/financialmath",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/media.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/media",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/sightseeing.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/sightseeing",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/economy.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/economy",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social4= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/medical.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/medical",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social5= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/statistic.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/statistic",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social6= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/welfare.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/welfare",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social7= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/education.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/education",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.social8= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/psychology.hbs 뷰 템플릿 랜더링
  res.render("majors/socialsciences/psychology",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.human1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/asia.hbs 뷰 템플릿 랜더링
  res.render("majors/humans/asia",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.human2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/english.hbs 뷰 템플릿 랜더링
  res.render("majors/humans/english",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.human3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/europe.hbs 뷰 템플릿 랜더링
  res.render("majors/humans/europe",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.human4= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/korean.hbs 뷰 템플릿 랜더링
  res.render("majors/humans/korean",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.laws1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/law.hbs 뷰 템플릿 랜더링
  res.render("majors/laws/law",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.laws2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/admin.hbs 뷰 템플릿 랜더링
  res.render("majors/laws/admin",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.laws3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/police.hbs 뷰 템플릿 랜더링
  res.render("majors/laws/police",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/architect.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/architect",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/chem.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/chem",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/city.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/city",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin4= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/fire.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/fire",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin5= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/flower.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/flower",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin6= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/industry.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/industry",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin7= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/inner.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/inner",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin8= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/machine.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/machine",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin9= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/meterial.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/meterial",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.engin10= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/tree.hbs 뷰 템플릿 랜더링
  res.render("majors/engineerings/tree",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.bios1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/bionano.hbs 뷰 템플릿 랜더링
  res.render("majors/bios/bionano",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.bios2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/chem.hbs 뷰 템플릿 랜더링
  res.render("majors/bios/chem",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.bios3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/food.hbs 뷰 템플릿 랜더링
  res.render("majors/bios/food",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.bios4= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/life.hbs 뷰 템플릿 랜더링
  res.render("majors/bios/life",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.bios5= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/nutrition.hbs 뷰 템플릿 랜더링
  res.render("majors/bios/nutrition",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.bios6= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/physical.hbs 뷰 템플릿 랜더링
  res.render("majors/bios/physical",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.art1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/act.hbs 뷰 템플릿 랜더링
  res.render("majors/arts/act",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.art2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/draw.hbs 뷰 템플릿 랜더링
  res.render("majors/arts/draw",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.art3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/fashiondesign.hbs 뷰 템플릿 랜더링
  res.render("majors/arts/fashiondesign",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.art4= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/industdesign.hbs 뷰 템플릿 랜더링
  res.render("majors/arts/industdesign",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.art5= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/music.hbs 뷰 템플릿 랜더링
  res.render("majors/arts/music",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.art6= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/sport.hbs 뷰 템플릿 랜더링
  res.render("majors/arts/sport",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.future1= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/car.hbs 뷰 템플릿 랜더링
  res.render("majors/futureindustrys/car",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.future2= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/display.hbs 뷰 템플릿 랜더링
  res.render("majors/futureindustrys/display",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.future3= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/game.hbs 뷰 템플릿 랜더링
  res.render("majors/futureindustrys/game",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.future4= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/medicalmachine.hbs 뷰 템플릿 랜더링
  res.render("majors/futureindustrys/medicalmachine",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};

module.exports.medical= async (req,res)=>{
  console.log("sub화면 실행")
  //isAuthenticated(): 세션 상태 정보(true/false) 반환
  const isLogin = req.isAuthenticated();
  //majors/medical.hbs 뷰 템플릿 랜더링
  res.render("majors/medicals/medical",{
    post: {
        image:'https://cdn-icons-png.flaticon.com/512/3160/3160626.png',
        image2:'https://cdn-icons-png.flaticon.com/512/992/992641.png',
        image3:'https://cdn-icons-png.flaticon.com/512/942/942755.png',
        image4:'https://cdn-icons-png.flaticon.com/512/205/205252.png'
    },
    pageTitle:"학과화면",
    inSub:true,
    isUserLogedIn:isLogin,
   }
  );
};


