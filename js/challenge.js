// ===== 문제 데이터 (로컬 mp4) =====
const quizzes = [
    {
        video: "video/부가티.mp4",
        hint: "베이론, 시론",
        answer: "부가티 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/괜찮아딩딩딩딩딩.mp4",
        hint: "ㄱㅊㅇ, ㄷㄷㄷㄷㄷ",
        answer: "괜찮아딩딩딩",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/매끈매끈.mp4",
        hint: "한국어 공부",
        answer: "매끈매끈하다\n매끈매끈한",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/묵찌빠.mp4",
        hint: "가위바위보로 눈물콧물빼기",
        answer: "묵찌빠 \n 진행자를 이겨라",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/미오.mp4",
        hint: "고양이 울음소리",
        answer: "미오마오 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/스파게티.mp4",
        hint: "파스타 가문",
        answer: "스파게티 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/잘자요아가씨.mp4",
        hint: "다나카&닛몰캐쉬",
        answer: "잘자요아가씨\n(야레야레, 못말리는 아가씨)",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/아무노래.mp4",
        hint: "랜덤송",
        answer: "아무노래 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/키링.mp4",
        hint: "가방에 달려있는 것",
        answer: "키링 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/사쿠란보.mp4",
        hint: "버찌를 일본어로",
        answer: "OOO 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/힙합보단.mp4",
        hint: "🎵<❤️<💰",
        answer: "힙합보단 사랑, 사랑보단 돈",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/첫눈.mp4",
        hint: "❄️❄️❄️❄️",
        answer: "첫눈 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/미안해.mp4",
        hint: "귀여우니까 용서",
        answer: "귀여워서 미안해",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/소다팝.mp4",
        hint: "쌀다팜",
        answer: "소다팝챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
    },
    {
        video: "video/리듬게임.mp4",
        hint: "1라운드부터 참여해서\n성공하면 점수로 인정",
        answer: "리듬게임 챌린지",
        title: "🔥 이 영상 속 챌린지의 이름은?"
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

const progressText = document.getElementById("progressText");
const questionTitle = document.getElementById("questionTitle");

// ===== 렌더 =====
function loadQuiz() {
    const q = quizzes[index];

    // 타이틀/진행표시
    questionTitle.textContent = q.title;
    progressText.textContent = `${index + 1} / ${quizzes.length}`;

    // 비디오 교체
    video.pause();
    video.src = q.video;
    video.load();

    // 네비 버튼 상태
    setDisabled(prevBtn, index === 0);
    setDisabled(nextBtn, index === quizzes.length - 1);
}

function setDisabled(btn, disabled) {
    btn.disabled = disabled;
    btn.classList.toggle("is-disabled", disabled);
}

// ===== 모달 열기/닫기 =====
function openModal(modalEl) {
    modalEl.classList.add("is-open");
    modalEl.setAttribute("aria-hidden", "false");
}
function closeModal(modalEl) {
    modalEl.classList.remove("is-open");
    modalEl.setAttribute("aria-hidden", "true");
}

// backdrop 클릭 닫기 + data-close 처리
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
    }
});

// ===== 버튼 액션(살짝 튀는 느낌) =====
function pressFx(el) {
    el.animate(
        [
            { transform: "translateY(-2px) scale(1)" },
            { transform: "translateY(0px) scale(0.98)" },
            { transform: "translateY(-2px) scale(1)" }
        ],
        { duration: 180, easing: "ease-out" }
    );
}

// ===== 이벤트 =====
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

// ===== 초기 로드 =====
loadQuiz();
