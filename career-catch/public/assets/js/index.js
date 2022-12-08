/* 서버에서 사용자에게 응답하는 기본 웹 문서(/view/layout/default.hbs)에서 사용하는 스크립트 */



//에러메시지 함수
function showError(msg) {
  swal.fire({
    icon: "error",
    title: "에러 메세지",
    text: JSON.stringify(msg),
  });
}

// chatbox 클릭
$(".fixed").click(function(){
  $(".fixed").addClass("unvisible");
  $(".chatbox").removeClass("unvisible");
});

$(".click").click(function(){
  $(".fixed").removeClass("unvisible");
  $(".chatbox").addClass("unvisible");
});

// 채팅기능
const chatbox=$(`.chatbox2`);
const input=$(`.input`);
const btn=$(`.btn2`);

let list={
  '!공통자격증':'컴퓨터활용능력,한국사능력검정시험,토익/토익스피킹,오픽 등등이 있습니다.',
  '!전과':'공통적으로 성적,학업계획서,면접으로 심사합니다. 학과별 평가기준과 우대사항은 상이합니다. 자세한 내용은 학교 공지사항에 `전과` 라고 검색해보세요!',
  '!제작자':'개발자를 꿈꾸는 가천대 재학생입니다. 잘못된 정보와 주관적인 내용이 들어갔을 수 있습니다. 너그러히 이해해주세요..ㅠㅠ',
  '!인기과':'보통 경영학과,미디어커뮤니케이션학과,디자인과,컴퓨터공학과,소프트웨어학과,화학생명공학과 등등이 인기가 많습니다.',
  '!복수전공':'복수전공학과 전공과목(전공필수 또는 전공선택)을 42학점이상 이수해야 합니다. 졸업 시 2개의 학위가 인정됩니다. ',
  '!부전공':'제1전공 이외의 부전공학과 전공과목(전공필수 또는 전공선택)을 20학점이상 이수한 학생에게 주어지는 제도입니다. 졸업 시 1개의 학위가 인정됩니다.',
  '!신청기간':'전과/복수전공/부전공 모두 1학기에는 5월 중순, 2학기에는 11월 중순에 신청받습니다. 자세한 일정은 가천대학교 홈페이지-학사정보-학사일정을 참고해주세요.',
  '!전공심화':'제1전공의 전공교과목을 70학점 이상 취득하는 것으로, 학위 취득 시 `전공심화과정` 이수가 표기됩니다. 별도의 신청절차는 없으며, 자격조건에 부합되는 경우 자동 승인됩니다.'
};

function enter(e){
  if(e.key==='Enter'&&!e.shiftKey){
      e.preventDefault();
      add();
}
}

function add(){
  chatbox.text("");  
  let val=input.val();

  if(val){
    let add_RightText=$(`<div></div>`)
      .addClass(`text`)
      .addClass('righttext')
      .text(val)
    chatbox.append(add_RightText);
  }
  
  let add_LeftText=$(`<div></div>`)
    .addClass(`text`)
    .addClass('lefttext')
  if(input.val() in list){
      let left_val=list[val];
      add_LeftText.text(left_val);
  }
  else{
      let left_val='명령어를 제대로 입력해주세요. 명령어 목록) !공통자격증 !전과 !인기과 !복수전공 !부전공 !전공심화 !신청기간 !제작자'
      add_LeftText.text(left_val);
  }  
  chatbox.append(add_LeftText);
  input.val("");
}

btn.click(add);
input.keypress(enter);

// 패스워드 확인
$("#checkPass").click(function(){
  let pw1=$(".pw1").val();
  let pw2=$(".pw2").val();

  if(pw1!==pw2){
    alert("비밀번호가 다릅니다!");
    $(".pw1").val("");
    $(".pw2").val("");
  }
  else{
    alert("비밀번호가 같습니다!");
  }
});

// 스크롤 리모콘 숨기기/생기기
$(window).scroll(function(){
  let scroll_top=$(this).scrollTop();
  let height=$(document.body).prop('scrollHeight');
  let scroll=$(".rmt-scroll");

  if(scroll_top>height/7){
    scroll.addClass(`rmt-visible`);
  }
  else{
    scroll.removeClass('rmt-visible');
  }
});

// 스크롤 최상단/최하단 이동

$(".down").on("click",function(e){
  let height=$(document.body).prop('scrollHeight');

  if(this.hash!==""){
    e.preventDefault();
    
    let hash=this.hash;
    
    $('html, body').animate({
      scrollTop:height
    },800,function(){
      window.location.hash=hash;
    });
  }
});


$(".up").on("click",function(e){
  let height=$(document.body).prop('scrollHeight');

  if(this.hash!==""){
    e.preventDefault();
    
    let hash=this.hash;
    
    $('html, body').animate({
      scrollTop:0
    },800,function(){
      window.location.hash=hash;
    });
  }
});

// 네비게이션 바 스크롤 이벤트
let lastScrollY=0

$(window).on("scroll",function(){
  let scroll_top=$(this).scrollTop();
  const nav=$(".nav");
      // 네비게이션 바 그림자
      if(scroll_top>30){
        nav.addClass('shadow');
      }
      else{
        nav.removeClass('shadow');
      }
      // 네비게이션 바 올려짐/내려짐
      if(scroll_top>lastScrollY){
        nav.addClass(`nav-lift-up`)
        nav.removeClass('shadow');
      }
      else{
        nav.removeClass(`nav-lift-up`);
      }
      lastScrollY=scroll_top;
})

