// ===== 문제 데이터 (로컬 mp4) =====
const quizzes = [
    {
        video: "video/부가티.mp4",
        volume: 0.3,
        hint: "베이론, 시론",
        answer: "부가티 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ 2명이 나와서 챌린지 도전"

    },
    {
        video: "video/괜찮아딩딩딩딩딩.mp4",
        hint: "ㄱㅊㅇ, ㄷㄷㄷㄷㄷ",
        answer: "괜찮아딩딩딩",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/매끈매끈.mp4",
        hint: "한국어 공부",
        answer: "매끈매끈하다\n매끈매끈한",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "        
    },
    {
        video: "video/묵찌빠.mp4",
        hint: "가위바위보로 눈물콧물빼기",
        answer: "묵찌빠 \n 진행자를 이겨라",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ 진행자를 묵찌빠로 이겨라!"
    },
    {
        video: "video/미오.mp4",
        hint: "고양이 울음소리",
        answer: "미오마오 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ 2명이 나와서 챌린지 도전"
    },
    {
        video: "video/스파게티.mp4",
        hint: "파스타 가문",
        answer: "스파게티 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/잘자요아가씨.mp4",
        hint: "다나카&닛몰캐쉬",
        answer: "잘자요아가씨\n(야레야레, 못말리는 아가씨)",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/아무노래.mp4",
        hint: "랜덤송",
        volume: 1,
        answer: "아무노래 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ 2명이 나와서 챌린지 도전"
    },
    {
        video: "video/키링.mp4",
        volume: 0.3,
        hint: "가방에 달려있는 것",
        answer: "키링 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ 진행자가 폰카로 촬영 \n ✅ 올바른 구도에서 챌린지 진행"
    },
    {
        video: "video/사쿠란보.mp4",
        hint: "버찌를 일본어로",
        answer: "OOO 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/힙합보단.mp4",
        hint: "🎵<❤️<💰",
        answer: "힙합보단 사랑, 사랑보단 돈",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/첫눈.mp4",
        hint: "❄️❄️❄️❄️",
        answer: "첫눈 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/미안해.mp4",
        volume: 0.2,
        hint: "귀여우니까 용서",
        answer: "귀여워서 미안해",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/소다팝.mp4",
        volume: 0.4,
        hint: "쌀다팜",
        answer: "소다팝챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ "
    },
    {
        video: "video/리듬게임.mp4",
        volume: 1,
        hint: "1라운드부터 참여해서\n성공하면 점수로 인정",
        answer: "리듬게임 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?",
        rules: "✅ 5단계 퍼팩트"
    }
];

let index = 0;

// ===== DOM =====
const video = document.getElementById("video");
const hintBtn = document.getElementById("hintBtn");
const answerBtn = document.getElementById("answerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const hintModal = document.getElementById("hintModal");
const answerModal = document.getElementById("answerModal");
const hintText = document.getElementById("hintText");
const answerText = document.getElementById("answerText");

const progressBadge = document.getElementById("progressBadge");
const questionTitle = document.getElementById("questionTitle");

const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const ruleText = document.getElementById("ruleText");

// ✅ 영상 에러 UI(있으면 좋음)
// HTML에 <div id="videoError" class="video-error"></div> 같이 추가해도 되고,
// 없으면 콘솔만 찍히게 처리
const videoErrorEl = document.getElementById("videoError");

// ===== 모달 =====
function openModal(m){ m?.classList.add("is-open"); }
function closeModal(m){ m?.classList.remove("is-open"); }
function openModal(modalEl) {
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
}

function closeModal(modalEl) {
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
}

// ✅ 1) X/닫기 버튼 (data-close) 처리
document.addEventListener("click", (e) => {
  const closeId = e.target.closest("[data-close]")?.getAttribute("data-close");
  if (closeId) {
    const modal = document.getElementById(closeId);
    if (modal) closeModal(modal);
    return;
  }

  // ✅ 2) 배경(backdrop) 클릭하면 닫기
  if (e.target.classList.contains("modal-backdrop")) {
    const modal = e.target.closest(".modal");
    if (modal) closeModal(modal);
  }
});

// ✅ 3) ESC 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.is-open").forEach(closeModal);
  }
});
// ===== 렌더 =====
function loadQuiz() {
  const q = quizzes[index];

  // 타이틀/진행표시
  if (questionTitle) questionTitle.textContent = q.title ?? "";
  if (progressBadge) progressBadge.textContent = `${index + 1} / ${quizzes.length}`;
  // 에러 UI 리셋
  if (videoErrorEl) videoErrorEl.textContent = "";
// ✅ 게임룰 표시 (문제별)
if (ruleText) {
  const rules = quizzes[index].rules ?? "룰이 아직 등록되지 않았어요.";
  ruleText.textContent = rules; // \n 줄바꿈 OK (CSS pre-line)
}
  // ✅ URL을 절대경로로 변환 (상대경로 꼬임 방지)
  const resolvedSrc = new URL(q.video, location.href).href;
  console.log("[loadQuiz] try:", resolvedSrc);

  // 비디오 교체
  video.pause();
  video.removeAttribute("src"); // 일부 브라우저 캐시/에러 상태 리셋
  video.load();

  video.src = resolvedSrc;
  video.load();

  // ✅ 문제별 기본 볼륨 (없으면 슬라이더 값 or 기존 볼륨 유지)
  const sliderVol = volumeSlider ? Number(volumeSlider.value) / 100 : video.volume;
  const baseVol = (q.volume != null) ? Number(q.volume) : sliderVol;
  video.volume = clamp01(baseVol);

  // UI 반영
  if (volumeSlider && volumeValue) {
    const pct = Math.round(video.volume * 100);
    volumeSlider.value = String(pct);
    volumeValue.textContent = `${pct}%`;
  }

  // 네비 버튼 상태
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === quizzes.length - 1;
}

function clamp01(v){
  return Math.min(1, Math.max(0, v));
}

// ===== 이벤트 =====
hintBtn?.addEventListener("click", () => {
  hintText.textContent = quizzes[index].hint ?? "";
  openModal(hintModal);
});

answerBtn?.addEventListener("click", () => {
  answerText.textContent = quizzes[index].answer ?? "";
  openModal(answerModal);
});

prevBtn?.addEventListener("click", () => {
  if(index <= 0) return;
  index--;
  loadQuiz();
});

nextBtn?.addEventListener("click", () => {
  if(index >= quizzes.length - 1) return;
  index++;
  loadQuiz();
});

// 볼륨 슬라이더
volumeSlider?.addEventListener("input", () => {
  const v = clamp01(Number(volumeSlider.value) / 100);
  video.volume = v;
  if (volumeValue) volumeValue.textContent = `${Math.round(v * 100)}%`;
});

// ESC 닫기
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeModal(hintModal);
    closeModal(answerModal);
  }
});

// ✅ 로딩 성공 로그
video.addEventListener("loadedmetadata", () => {
  console.log("[video] loaded:", video.currentSrc, "duration:", video.duration);
});

// ✅ 로딩 실패 시 원인 안내
video.addEventListener("error", () => {
  const err = video.error;
  console.error("[video] ERROR:", err, "currentSrc:", video.currentSrc);

  let msg = "동영상을 불러오지 못했어요.";
  if (err) {
    // 1=ABORTED 2=NETWORK 3=DECODE 4=SRC_NOT_SUPPORTED
    if (err.code === 2) msg = "네트워크/경로 문제로 동영상을 불러오지 못했어요. (파일 경로 확인)";
    if (err.code === 3) msg = "동영상 디코딩 실패(코덱 문제)일 수 있어요. (H.264/AAC 권장)";
    if (err.code === 4) msg = "지원하지 않는 형식이거나 파일을 찾지 못했어요. (경로/확장자 확인)";
  }

  if (videoErrorEl) {
    videoErrorEl.textContent = msg;
  } else {
    // 화면에 표시할 요소가 없으면 alert는 과하니 콘솔만
    console.warn(msg);
  }
});

// ===== 초기 =====
loadQuiz();