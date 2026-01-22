/* =========================
   ANIMATION QUIZ (IMAGE + VIDEO)
   - 문제 배열만 수정하면 추가/삭제 끝
   - type: "image" | "video"
   - 이미지: 16:9 프레임에 강제 맞춤 (object-fit: cover)
   - 영상: 16:9 프레임에 맞춤 (contain 추천)
   - 이미지 클릭 시 확대 모달
   - 힌트/정답 모달
   - (선택) 영상 start/end 구간 반복
   ========================= */

const quizzes = [
  // ✅ 이미지 문제 예시
  {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/도라에몽.webp",
    hint: "대나무헬리콥터!",
    answer: "도라에몽",
    line: "대나무헬리콥터!"
  },
  {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/디지몬.png",
    hint: "아구몬",
    answer: "디지몬어드벤처",
    line: "태일아!<br>진화시켜줘!<br>태일아!"
  },
  {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/로켓단.jfif",
    hint: "어른되고 보니 얘네가 주인공",
    answer: "포켓몬스터",
    line: "대체 정체가 무엇이야라고 물으신다면<br>대답해드리는 게 인지상정<br>이 세계의 파괴를 막기위해<br>이 세계의 평화를 지키기 위해<br>사랑과 진실, 어둠을 뿌리고 다니는<br>포켓몬의 감초, 귀염둥이 악당<br>나, 로사 나, 로이 난 나옹이다옹!"
  },
  {
    type: "video",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(노래까지 불러야 정답으로 인정)",
    src: "video/뽀로로.mp4",
    poster: "images/뽀로로.webp", // 없으면 생략 가능
    volume: 0.5,
    start: 2.0,   // 선택
    end: 40.0,     // 선택 (있으면 그 구간 반복)
    hint: "노는게 좋다고 했지<br>공부 못한다고는 안함",
    answer: "뽀롱뽀롱 뽀로로"
  },
    {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/스즈메.webp",
    hint: "스즈메의 어디로든 문",
    answer: "스즈메의 문단속",
    line: "스즈메!"
  },
    {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/보노보노.jpg",
    hint: "어린왕자 jp.ver",
    answer: "보노보노",
    line: "헛소리 하지마 인마!"
  },
    {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/원피스.webp",
    hint: "김종민 인생곡이<br>오프닝 곡",
    answer: "원피스",
    line: "제ー하하하하하하하하하ー!!"
  },
    {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/이누야샤.jpg",
    hint: "퇴사 짤",
    answer: "이누야샤",
    line: "안녕히 계세요 여러분.<br>저는 이 세상의 모든 굴레와 속박을 벗어던지고<br>제 행복을 찾아 떠납니다.<br>여러분도 행복하세요!"
  },
    {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/젠이츠.jpg",
    hint: "우마이",
    answer: "귀멸의 칼날",
    line: "카미나리노코큐<br>이치노카타<br>헤키레키잇센!"
  },
    {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/주술회전.jpg",
    hint: "이마데모 아오가 슨데이루",
    answer: "주술회전",
    line: "료이키텐카이"
  },
    {
    type: "video",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(노래까지 불러야 정답으로 인정)",
    src: "video/쾌걸근육맨.mp4",
    poster: "images/쾌걸근육맨.jpg", // 없으면 생략 가능
    volume: 0.5,
    start: 3.0,   // 선택
    end: 36.0,     // 선택 (있으면 그 구간 반복)
    hint: "갈비찜을 밥위에 얹어주세요~",
    answer: "쾌걸 근육맨 2세"
  },
      {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/타마마.jpg",
    hint: "타마마는 남성",
    answer: "개구리 중사 케로로",
    line: "중사님~ 타마마예요~<br>타마마 임팩트!!"
  },
      {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/탄지로.jpg",
    hint: "아카자여 이리와서<br>오목 한 판 두자꾸나",
    answer: "귀멸의 칼날",
    line: "탄지로! 탄지로!<br> 쯔기노 바쇼와 <br> 남남동!! 남남동!!"
  },
      {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/핑구.webp",
    hint: "바다사자 트라우마",
    answer: "꼬마펭귄 핑구",
    line: "Noot Noot"
  },
      {
    type: "image",
    title: "이 캐릭터가 나오는 애니 제목은 무엇일까요?<br>(성대모사까지 해야 정답으로 인정)",
    src: "images/흰둥이.webp",
    hint: "짱구와 오징어의 차이는?",
    answer: "짱구는 못말려",
    line: "왕왕왕"
  },
];

let index = 0;

// loop
let loopStart = 0;
let loopEnd = Infinity;

// 첫 재생에서만 start로 점프(포스터 유지용)
let didSeekOnPlay = false;

// DOM
const questionTitle = document.getElementById("questionTitle");
const progressText = document.getElementById("progressText");

const frame = document.getElementById("mediaFrame");
const img = document.getElementById("quizImage");
const video = document.getElementById("quizVideo");

const hintBtn = document.getElementById("hintBtn");
const answerBtn = document.getElementById("answerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const hintModal = document.getElementById("hintModal");
const answerModal = document.getElementById("answerModal");
const imageModal = document.getElementById("imageModal");
const hintText = document.getElementById("hintText");
const answerText = document.getElementById("answerText");
const zoomImg = document.getElementById("zoomImg");
const lineBtn = document.getElementById("lineBtn");
const lineModal = document.getElementById("lineModal");
const lineText = document.getElementById("lineText");

// ---------- helpers ----------
function setDisabled(btn, disabled) {
  btn.disabled = disabled;
  btn.classList.toggle("is-disabled", disabled);
}

function openModal(modalEl) {
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
}
function closeModal(modalEl) {
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
}

// 공통 닫기
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
    closeModal(imageModal);
    closeModal(lineModal);
  }
});

// 버튼 액션
function pressFx(el) {
  el.animate(
    [
      { transform: "translateY(-2px) scale(1)" },
      { transform: "translateY(0px) scale(0.98)" },
      { transform: "translateY(-2px) scale(1)" },
    ],
    { duration: 180, easing: "ease-out" }
  );
}
lineBtn.addEventListener("click", () => {
  pressFx(lineBtn);
  const q = quizzes[index];

  lineText.innerHTML =
    (q.line && String(q.line).trim().length > 0)
      ? q.line
      : "대사가 등록되지 않았어요.";

  openModal(lineModal);
});
// ---------- video loop ----------
function handleLoop() {
  if (!Number.isFinite(loopEnd)) return;
  if (video.currentTime >= loopEnd) {
    video.currentTime = loopStart;
    video.play().catch(() => {});
  }
}
video.addEventListener("timeupdate", handleLoop);

video.addEventListener("loadeddata", () => {
  didSeekOnPlay = false;
});

video.addEventListener("play", () => {
  // 포스터 유지 위해: 로드 시점에는 currentTime 건드리지 않음
  if (didSeekOnPlay) return;
  didSeekOnPlay = true;

  const start = Math.max(0, loopStart);
  if (start > 0) video.currentTime = start;
});

video.addEventListener("error", () => {
  console.error("VIDEO ERROR:", video.error, video.currentSrc);
});

// ---------- main ----------
function loadQuiz() {
  const q = quizzes[index];

  questionTitle.innerHTML = q.title ?? "문제";
  progressText.textContent = `${index + 1} / ${quizzes.length}`;

  // 버튼 상태
  setDisabled(prevBtn, index === 0);
  setDisabled(nextBtn, index === quizzes.length - 1);

  // 영상은 항상 정지/리셋
  video.pause();
  video.removeAttribute("src");
  video.load();

  // 이미지도 리셋
  img.removeAttribute("src");

  // 타입별 분기
  if (q.type === "image") {
    // ✅ 이미지 모드
    img.style.display = "block";
    video.style.display = "none";

    img.src = q.src;
    img.dataset.full = q.src; // 확대용

    // 반복/시크 무의미
    loopStart = 0;
    loopEnd = Infinity;

  } else if (q.type === "video") {
    // ✅ 영상 모드
    img.style.display = "none";
    video.style.display = "block";

    // poster/volume/start/end
    video.poster = q.poster || "";
    video.volume = Number(q.volume ?? 1);

    loopStart = Number(q.start ?? 0);
    loopEnd = (q.end == null) ? Infinity : Number(q.end);

    didSeekOnPlay = false;

    video.src = q.src;
    video.load();

  } else {
    console.warn("Unknown quiz type:", q.type);
  }
}

// ---------- events ----------
hintBtn.addEventListener("click", () => {
  pressFx(hintBtn);
  const q = quizzes[index];
  hintText.innerHTML = q.hint ?? "힌트가 없어요.";
  openModal(hintModal);
});

answerBtn.addEventListener("click", () => {
  pressFx(answerBtn);
  const q = quizzes[index];
  answerText.innerHTML = q.answer ?? "정답이 없어요.";
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

// ✅ 이미지 클릭 시 확대 모달
img.addEventListener("click", () => {
  if (!img.src) return;
  zoomImg.src = img.dataset.full || img.src;
  openModal(imageModal);
});

// init
loadQuiz();
