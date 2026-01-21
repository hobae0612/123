// ✅ 여기 배열만 수정하면 문제 추가/삭제 끝
const quizzes = [
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/궁예.mp4",
    volume: 1,
    start: 74.0,      // (선택) 시작 시점(초)
    end: 80.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "콜록콜록",
    answer: "태조왕건",
    line: "누구인가? 지금 누가 기침 소리를 내었어? <br> 누가 기침 소리를 내었는가 말이야!" 
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/똥덩어리.mp4",
    volume: 1,
    start: 76.0,      // (선택) 시작 시점(초)
    end: 81.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "으 더러워",
    answer: "베토벤 바이러스",
    line: "똥,덩.어.리"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/마스크걸.mp4",
    volume: 1,
    start: 266.0,      // (선택) 시작 시점(초)
    end: 275.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "가면쓴여자",
    answer: "마스크 걸",
    line: "저 모미 씨를<br>사랑합니다!<br>아이시떼루!"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/미생.mp4",
    volume: 0.3,
    start: 513.0,      // (선택) 시작 시점(초)
    end: 522.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "자신의 삶을 승리하기 위해 한 수 한 수 돌을 잇는 사람들의 이야기",
    answer: "미생",
    line: "잊지 말자<br>나는 어머니의 자부심이다"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/사랑과 전쟁.mp4",
    volume: 0.6,
    start: 17.0,      // (선택) 시작 시점(초)
    end: 26.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "로봇연기",
    answer: "사랑과 전쟁",
    line: "괜찮아요?<br>많이 놀랬죠<br>미안해요"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/사랑은 돌아오는거야.mp4",
    volume: 0.9,
    hint: "하늘길",
    answer: "천국의 계단",
    line: "사랑은 돌아오는 거야!"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/상속자들.mp4",
    volume: 0.9,
    start: 109.0,      // (선택) 시작 시점(초)
    end: 122.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "세금 내야함",
    answer: "상속자들",
    line: "혹시 나 너 좋아하냐"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/선재업고.mp4",
    volume: 1,
    // start: 139.0,      // (선택) 시작 시점(초)
    // end: 151.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "선친자",
    answer: "선재 업고 튀어",
    line: "왜 이러고 있어요?<BR>혹시 휠체어<BR>고장 났어요?"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/시크릿가든.mp4",
    volume: 1,
    start: 168.0,      // (선택) 시작 시점(초)
    end: 181.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "비밀의정원",
    answer: "시크릿가든",
    line: "저한테는<BR>이 사람이 김태희고<BR>전도연입니다"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/쌈.mp4",
    volume: 1,
    start: 36.0,      // (선택) 시작 시점(초)
    end: 43.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "삼류인생",
    answer: "쌈, 마이웨이",
    line: "나는 예쁜 척하는 게<BR>아니라 그냥 예쁘게 태어난 건데"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/우영우.mp4",
    volume: 1,
    start: 0.0,      // (선택) 시작 시점(초)
    end: 9.8,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "고래, 헤드폰, 팽나무",
    answer: "이상한 변호사 우영우",
    line: "기러기토마토스위스<br>인도인별똥별우영우"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/응답하라.mp4",
    volume: 1,
    start: 3.0,      // (선택) 시작 시점(초)
    end: 18.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "쌍문동 골목",
    answer: "응답하라 1988",
    line: "반갑구먼 반가워요"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/중증외상센터.mp4",
    volume: 0.7,
    start: 31.0,      // (선택) 시작 시점(초)
    end: 54.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "항문 조폭<br>렛츠고",
    answer: "중증외상센터",
    line: "나는 백강혁이다"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/태양의후예.mp4",
    volume: 0.7,
    start: 118.0,      // (선택) 시작 시점(초)
    end: 132.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "송중기, 송혜교",
    answer: "태양의후예",
    line: "그 어려운걸<br> 자꾸 해냅니다. 내가"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/SKY캐슬.mp4",
    volume: 0.7,
    start: 969.0,      // (선택) 시작 시점(초)
    end: 985.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "대한민국 상위 0.1%",
    answer: "SKY 캐슬",
    line: "세상이 왜 피라미드야! 지구는 둥근데 왜 피라미드냐고!!"
  },
  
];

let index = 0;

// 반복 구간 상태
let loopStart = 0;
let loopEnd = Infinity;

// DOM
const video = document.getElementById("video");
const progressText = document.getElementById("progressText");
const questionTitle = document.getElementById("questionTitle");

const hintBtn = document.getElementById("hintBtn");
const answerBtn = document.getElementById("answerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const lineBtn = document.getElementById("lineBtn");
const lineModal = document.getElementById("lineModal");
const lineText = document.getElementById("lineText");

const hintModal = document.getElementById("hintModal");
const answerModal = document.getElementById("answerModal");
const hintText = document.getElementById("hintText");
const answerText = document.getElementById("answerText");


// 버튼 비활성화 표시
function setDisabled(btn, disabled) {
  btn.disabled = disabled;
  btn.classList.toggle("is-disabled", disabled);
}

// 모달
function openModal(modalEl) {
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
}
function closeModal(modalEl) {
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
}

// backdrop / 닫기 버튼 / ESC 공통 처리
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
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(hintModal);
    closeModal(answerModal);
    closeModal(lineModal);
  }
});

// 버튼 눌림 애니메이션(가벼운 액션)
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

// ✅ 특정 구간만 반복 (end가 있으면 반복)
function handleLoop() {
  if (Number.isFinite(loopEnd) && video.currentTime >= loopEnd) {
    video.currentTime = loopStart;
    video.play().catch(() => {});
  }
}
video.addEventListener("timeupdate", handleLoop);

// 문제 로드: ✅ 자동으로 start부터 재생 (A안)
function loadQuiz() {
  const q = quizzes[index];

  questionTitle.textContent = q.title;
  progressText.textContent = `${index + 1} / ${quizzes.length}`;

  // 반복 구간
  loopStart = Number(q.start ?? 0);
  loopEnd = (q.end == null) ? Infinity : Number(q.end);

  // 비디오 교체
video.pause();
video.currentTime = 0; // 선택
video.src = q.video;
video.load();

  // ✅ 볼륨 적용 (기본값 1)
  video.volume = Number(q.volume ?? 1);

const seekOnly = () => {
  // start가 duration보다 크면 보정
  const safeStart = Math.max(0, loopStart);
  video.currentTime = safeStart;

  // ✅ 자동재생 제거
  // video.play().catch(() => {});
};



if (video.readyState >= 1) seekOnly();
else video.addEventListener("loadedmetadata", seekOnly, { once: true });


  setDisabled(prevBtn, index === 0);
  setDisabled(nextBtn, index === quizzes.length - 1);
}

// 버튼 이벤트
hintBtn.addEventListener("click", () => {
  pressFx(hintBtn);
  hintText.textContent = quizzes[index].hint;
  openModal(hintModal);
});

lineBtn.addEventListener("click", () => {
  pressFx(lineBtn);
  const q = quizzes[index];

  // 대사가 없을 수도 있으니 방어
  lineText.innerHTML = (q.line && String(q.line).trim().length > 0)
    ? q.line
    : "대사가 등록되지 않았어요.";

  openModal(lineModal);
});


answerBtn.addEventListener("click", () => {
  pressFx(answerBtn);
  // 줄바꿈 지원하려면 innerHTML + <br> 사용
  answerText.innerHTML = quizzes[index].answer;
  openModal(answerModal);
});

hintBtn.addEventListener("click", () => {
  pressFx(hintBtn);
  hintText.innerHTML = quizzes[index].hint; // ✅ 줄바꿈 OK
  openModal(hintModal);
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

// 초기 실행
loadQuiz();
