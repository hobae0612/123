// ✅ 여기 배열만 수정하면 문제 추가/삭제 끝
const quizzes = [
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/궁예.mp4",
    thumbnail: "images/thumbnails/궁예.png",
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
    thumbnail: "images/thumbnails/베토벤바이러스.jpg",
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
    thumbnail: "images/thumbnails/마스크걸.webp",
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
    thumbnail: "images/thumbnails/미생.jfif",
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
    thumbnail: "images/thumbnails/사랑과전쟁.jpg",    
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
    thumbnail: "images/thumbnails/천국의계단.jpg",
    volume: 0.9,
    hint: "하늘길",
    answer: "천국의 계단",
    line: "사랑은 돌아오는 거야!"
  },
  {
    title: "🎬 이 장면의 드라마 제목과 대사는?",
    video: "video/drama/상속자들.mp4",
    thumbnail: "images/thumbnails/상속자들.jpg",    
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
    thumbnail: "images/thumbnails/선재.webp",
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
    thumbnail: "images/thumbnails/시크릿가든.png",    
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
    thumbnail: "images/thumbnails/쌈마이웨이.jpg",    
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
    thumbnail: "images/thumbnails/우영우.jpg",    
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
    thumbnail: "images/thumbnails/응답하라.jpg",
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
    thumbnail: "images/thumbnails/중증외상센터.jpg",
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
    thumbnail: "images/thumbnails/태양의후예.jpg",
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
    thumbnail: "images/thumbnails/스카이캐슬.jpg",    
    volume: 0.7,
    start: 969.0,      // (선택) 시작 시점(초)
    end: 985.0,        // (선택) 여기까지 반복, 없으면 반복 안 함
    hint: "대한민국 상위 0.1%",
    answer: "SKY 캐슬",
    line: "세상이 왜 피라미드야! 지구는 둥근데 왜 피라미드냐고!!"
  },
  
];

let index = 0;

// 반복 구간
let loopStart = 0;
let loopEnd = Infinity;

// “처음 play 눌렀을 때 start로 점프” 플래그
let didSeekOnPlay = false;

/* =========================
   DOM
   ========================= */
const video = document.getElementById("video");
const progressText = document.getElementById("progressText");
const questionTitle = document.getElementById("questionTitle");

const hintBtn = document.getElementById("hintBtn");
const answerBtn = document.getElementById("answerBtn");
const lineBtn = document.getElementById("lineBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const hintModal = document.getElementById("hintModal");
const answerModal = document.getElementById("answerModal");
const lineModal = document.getElementById("lineModal");

const hintText = document.getElementById("hintText");
const answerText = document.getElementById("answerText");
const lineText = document.getElementById("lineText");

/* =========================
   Helpers
   ========================= */

// 버튼 비활성화 표시
function setDisabled(btn, disabled) {
  if (!btn) return;
  btn.disabled = disabled;
  btn.classList.toggle("is-disabled", disabled);
}

// 모달
function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
}
function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
}

// backdrop / 닫기 버튼 / ESC 공통 처리
document.addEventListener("click", (e) => {
  const closeTarget = e.target?.getAttribute?.("data-close");
  if (closeTarget) {
    const m = document.getElementById(closeTarget);
    if (m) closeModal(m);
  }
  if (e.target?.classList?.contains("modal-backdrop")) {
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

// 버튼 눌림 애니메이션
function pressFx(el) {
  if (!el?.animate) return;
  el.animate(
    [
      { transform: "translateY(-2px) scale(1)" },
      { transform: "translateY(0px) scale(0.98)" },
      { transform: "translateY(-2px) scale(1)" },
    ],
    { duration: 180, easing: "ease-out" }
  );
}

/* =========================
   Video Loop
   ========================= */

// ✅ 특정 구간만 반복 (end가 있으면 반복)
function handleLoop() {
  if (!Number.isFinite(loopEnd)) return;
  if (video.currentTime >= loopEnd) {
    video.currentTime = loopStart;
    video.play().catch(() => {});
  }
}

video.addEventListener("timeupdate", handleLoop);

// 디버깅용: 에러 로그 (문제 생기면 콘솔 확인)
video.addEventListener("error", () => {
  console.error("VIDEO ERROR", video.error, video.currentSrc);
});

/* =========================
   Load Quiz
   ========================= */

function loadQuiz() {
  const q = quizzes[index];

  // UI
  if (questionTitle) questionTitle.innerHTML = q.title;
  if (progressText) progressText.textContent = `${index + 1} / ${quizzes.length}`;

  // 비디오 세팅
  video.pause();
  video.currentTime = 0;          // 프레임 초기화 (선택)
  video.poster = q.thumbnail || "";
  video.src = q.video;
  video.load();

  // 볼륨
  video.volume = Number(q.volume ?? 1);

  // 구간
  loopStart = Number(q.start ?? 0);
  loopEnd = (q.end == null) ? Infinity : Number(q.end);

  // 새 문제에서는 다시 “첫 play에서만 점프”
  didSeekOnPlay = false;

  // 버튼 상태
  setDisabled(prevBtn, index === 0);
  setDisabled(nextBtn, index === quizzes.length - 1);
}

/**
 * 포스터를 유지하려면 로드 시점에 currentTime을 건드리면 안 됨.
 * 대신 사용자가 ▶ 눌렀을 때 1번만 start로 점프.
 */
video.addEventListener("play", () => {
  if (didSeekOnPlay) return;
  didSeekOnPlay = true;

  // start가 0이면 굳이 점프 안 해도 됨
  const start = Math.max(0, loopStart);
  if (start > 0) video.currentTime = start;
});

/* =========================
   Button Events
   ========================= */

hintBtn?.addEventListener("click", () => {
  pressFx(hintBtn);
  const q = quizzes[index];
  hintText.innerHTML = q.hint ?? "힌트가 없어요.";
  openModal(hintModal);
});

answerBtn?.addEventListener("click", () => {
  pressFx(answerBtn);
  const q = quizzes[index];
  answerText.innerHTML = q.answer ?? "정답이 없어요.";
  openModal(answerModal);
});

lineBtn?.addEventListener("click", () => {
  pressFx(lineBtn);
  const q = quizzes[index];
  lineText.innerHTML = (q.line && String(q.line).trim().length > 0)
    ? q.line
    : "대사가 등록되지 않았어요.";
  openModal(lineModal);
});

prevBtn?.addEventListener("click", () => {
  if (index <= 0) return;
  pressFx(prevBtn);
  index--;
  loadQuiz();
});

nextBtn?.addEventListener("click", () => {
  if (index >= quizzes.length - 1) return;
  pressFx(nextBtn);
  index++;
  loadQuiz();
});

/* =========================
   Init
   ========================= */
loadQuiz();
