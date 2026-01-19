// ✅ 여기 배열만 수정하면 문제 추가/삭제가 끝
const quizzes = [
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/체인소맨.jpeg",
    hint: "#요네즈캔시 #악마사냥꾼 #공안4과 #유사가족 #IRISOUT",
    answer: "체인소맨"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/프리랜.webp",
    hint: "🧝‍♀️ (엘프) 🕰️ (시간/시계) 📦 (상자) 🪄 (지팡이)",
    answer: "장송의 프리랜"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/진격의거인.jpg",
    hint: "거인",
    answer: "진격의거인"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/그대들은어떻게.jpg",
    hint: "미야자키 하야오 최신작",
    answer: "그대들은 어떻게 살 것인가"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/앨리오.jpg",
    hint: "픽사, ㅇㄹ오",
    answer: "엘리오"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/나히아.jpg",
    hint: "#히어로 #학교 #올마이트 #원포올 #빌런연합",
    answer: "나의 히어로 아카데미아"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/하이큐.jpg",
    hint: "#배구 #코트위의제왕 #리베로 #히나타쇼요",
    answer: "하이큐"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/하늘음식.webp",
    hint: "#하늘 #음식",
    answer: "하늘에서 음식이 내린다면"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/케이온.jfif",
    hint: "#여고생밴드 #경음악부 #깁슨레스폴 #응땅",
    answer: "케이온"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/몬스터주식회사.jpg",
    hint: "#벽장문 #비명소리 #부 #설리반 #외눈박이 ",
    answer: "몬스터주식회사"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/샤먼킹.jpg",
    hint: "#주황색 헤드폰 #사무리아 #오버소울 #안나 #프린세스하오",
    answer: "샤먼킹"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/달려라하니.webp",
    hint: "#달리기 #홍두깨 1988",
    answer: "달려라하니"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/일곱개의대죄.png",
    hint: "#호크 #엘리자베스 #마신족 #에스카노르 #7명의기사",
    answer: "일곱개의대죄"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/스파이패밀리.jpg",
    hint: "#와쿠와쿠 #아냐포저 #초능력자 #황혼 #가시공주",
    answer: "스파이패밀리"
  },
  {
    title: "이 캐릭터가 나오는 작품은 무엇일까요?",
    image: "images/핑구.webp",
    hint: "#펭귄 #눗눗 #이글루 #클레이애니메이션 #바다코끼리",
    answer: "핑구"
  },
  
];

let index = 0;

// DOM
const progressText = document.getElementById("progressText");
const questionTitle = document.getElementById("questionTitle");

const quizImage = document.getElementById("quizImage");
const zoomImage = document.getElementById("zoomImage");
const imageFrame = document.getElementById("imageFrame");

const hintBtn = document.getElementById("hintBtn");
const answerBtn = document.getElementById("answerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const hintModal = document.getElementById("hintModal");
const answerModal = document.getElementById("answerModal");
const imageModal = document.getElementById("imageModal");

const hintText = document.getElementById("hintText");
const answerText = document.getElementById("answerText");

// 렌더
function loadQuiz() {
  const q = quizzes[index];

  questionTitle.textContent = q.title;
  progressText.textContent = `${index + 1} / ${quizzes.length}`;

  // 이미지 변경
  quizImage.src = q.image;
  quizImage.alt = q.title;

  // 확대 이미지도 동기화 (미리 지정)
  zoomImage.src = q.image;
  zoomImage.alt = q.title;

  // 네비 버튼 상태
  setDisabled(prevBtn, index === 0);
  setDisabled(nextBtn, index === quizzes.length - 1);
}

function setDisabled(btn, disabled) {
  btn.disabled = disabled;
  btn.classList.toggle("is-disabled", disabled);
}

// 모달 열기/닫기
function openModal(modalEl) {
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
}
function closeModal(modalEl) {
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
}

// 공통 닫기(버튼, 배경 클릭)
document.addEventListener("click", (e) => {
  const closeTarget = e.target.getAttribute?.("data-close");
  if (closeTarget) {
    const m = document.getElementById(closeTarget);
    if (m) closeModal(m);
  }

  if (e.target.classList?.contains("modal-backdrop")) {
    const modal = e.target.closest(".modal");
    if (modal) closeModal(modal);
  }
});

// ESC 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(hintModal);
    closeModal(answerModal);
    closeModal(imageModal);
  }
});

// 버튼 액션 (살짝 튀는 느낌)
function pressFx(el){
  el.animate(
    [
      { transform: "translateY(-2px) scale(1)" },
      { transform: "translateY(0px) scale(0.98)" },
      { transform: "translateY(-2px) scale(1)" }
    ],
    { duration: 180, easing: "ease-out" }
  );
}

// 이벤트
hintBtn.addEventListener("click", () => {
  pressFx(hintBtn);
  hintText.textContent = quizzes[index].hint;
  openModal(hintModal);
});

answerBtn.addEventListener("click", () => {
  pressFx(answerBtn);
  answerText.textContent = quizzes[index].answer;
  openModal(answerModal);
});

prevBtn.addEventListener("click", () => {
  if (index <= 0) return;
  pressFx(prevBtn);
  index--;
  loadQuiz();
});

nextBtn.addEventListener("click", () => {
  if (index >= quizzes.length - 1) return;
  pressFx(nextBtn);
  index++;
  loadQuiz();
});

// ✅ 이미지 클릭 → 확대 팝업
imageFrame.addEventListener("click", () => {
  openModal(imageModal);
});

// 초기 로드
loadQuiz();
