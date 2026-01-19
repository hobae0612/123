let current = 0;

const questionEl = document.getElementById("question");
const videoEl = document.getElementById("video");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

function render() {
  const item = quizData[current];
  questionEl.textContent = item.q;
  videoEl.src = item.video;
}

function prevQuestion() {
  if (current > 0) {
    current--;
    render();
  }
}

function nextQuestion() {
  if (current < quizData.length - 1) {
    current++;
    render();
  }
}

function checkAnswer() {
  popupText.textContent = `정답: ${quizData[current].a}`;
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

render();
