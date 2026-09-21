let timeLeft = 300;
let timerInterval;

const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "b"
};

function startTimer() {
    timerInterval = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timer").textContent =
            "Time: " + minutes + ":" + seconds;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }

        timeLeft--;

    }, 1000);
}

function submitQuiz() {

    clearInterval(timerInterval);

    let score = 0;

    for (let question in correctAnswers) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("score").textContent =
        "Your Score: " + score + " / 5";

    let message = "";

    if (score === 5) {
        message = "Excellent! Perfect score! 🎉";
    } else if (score >= 3) {
        message = "Good job! Keep improving! 👍";
    } else {
        message = "Keep practicing and try again! 💪";
    }

    document.getElementById("message").textContent = message;
}

startTimer();