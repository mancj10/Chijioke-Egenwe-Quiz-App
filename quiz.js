// Here are the questions and answers we will use
const quizData = [
    {
        question: "What is the capital of Enugu State?",
        answers: ["Enugu", "Ikeja", "Abakaliki", "Kaduna"],
        correct: "Enugu"
    },
    {
        question: "Which year did Nigeria gained independence?",
        answers: ["1963", "1964", "1960", "1961"],
        correct: "1960"
    },
    {
        question: "Who is the Governor of Enugu State?",
        answers: ["Ifeanyi Ugwuanyi", "Chimaroke", "dave Umai", "Peter Mba"],
        correct: "Peter Mba"
    },
    {
        question: "Which football club is based in London?",
        answers: ["Man city", "Man United", "Chelsea", "Real Madrid"],
        correct: "Chelsea"
    },
    {
        question: "What is the capital of Ghana",
        answers: ["FreeTown", "Berlin", "Accra", "Togo"],
        correct: "Accra"
    }
];



// Variables to keep track of quiz state
let currentQuestionIndex = 0;
let score = 0;

// Get elements from the page
const questionContainer = document.getElementById("question-container");
const answerList = document.getElementById("answer-list");
const nextButton = document.getElementById("next-button");
const progress = document.getElementById("progress");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const resultContainer = document.getElementById("result-container");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");

// Function to load a question and answers
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    // Update the question text
    questionContainer.querySelector("#question").textContent = currentQuestion.question;

    // Clear previous answers
    answerList.innerHTML = ''; 

    // Add answers
    currentQuestion.answers.forEach(answer => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="answer" value="${answer}"> ${answer}`;
        answerList.appendChild(li);
    });

    // Update progress
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = quizData.length;
}

// Function to handle the next button
nextButton.addEventListener("click", function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    // If no answer is selected, show a message and do nothing
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    // Check if the answer is correct
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer.value === currentQuestion.correct) {
        score++; // Increase the score if correct
    }

    // Move to the next question or show results if it's the last one
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Function to show the results
function showResults() {
    resultContainer.classList.remove('hidden');
    finalScore.textContent = score;  // Show the score
    document.getElementById("quiz-container").classList.add('hidden'); // Hide quiz
}

// Restart the quiz when the button is clicked
restartButton.addEventListener("click", function() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.classList.add('hidden');
    document.getElementById("quiz-container").classList.remove('hidden');
    loadQuestion();
});

// Load the first question when the page loads
loadQuestion();