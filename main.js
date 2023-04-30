//１０秒間を見えない状態でカウントする機能で１０秒までの近さによって表示コメントを変更する
const countNumber = document.getElementById("count-number");
const startButton = document.getElementById("button");

let count = 1000;

const countDown = function () {
  count -= 1;
  countNumber.textContent = count / 100;
};

let id = null;

startButton.onclick = function () {
  if (id === null) {
    id = setInterval(countDown, 10);
    startButton.textContent = "stop";
  } else {
    clearInterval(id);
    if (count === 0) {
      startButton.textContent = "キミ、なかなか良いセンスしてんねっ💘";
    } else if (count <= 10 && count > 5) {
      startButton.textContent = "まぁまぁかな。";
    } else if (count <= 5 && count > 0) {
      startButton.textContent = "この差が遠いんすよねぇ。";
    } else if (count >= -5 && count < 0) {
      startButton.textContent = "この差が遠いんすよねぇ。";
    } else if (count <= -10 && count < -5) {
      startButton.textContent = "まぁまぁかな。";
    } else {
      startButton.textContent = "当てる気ある？";
    }
  }
};
