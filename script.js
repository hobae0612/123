const questions = [
  { q: "이 영상의 제목은?", a: "정답 1" },
  { q: "영상에 나온 캐릭터 이름은?", a: "정답 2" },
  { q: "배경은 어디인가?", a: "정답 3" }
];

let current = 0;

const questionEl = document.getElementById("question");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

function render() {
  questionEl.textContent = questions[current].q;
}

function prevQuestion() {
  if (current > 0) {
    current--;
    render();
  }
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    render();
  }
}

function checkAnswer() {
  popupText.textContent = `정답: ${questions[current].a}`;
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

render();
