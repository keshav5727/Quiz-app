document.getElementById('playQuizBtn').addEventListener('click', function() {
    var element = document.getElementById('quizCard1');
    var element_2 = document.getElementById('quizCard2');
    if (element.style.display === 'block') {
      element.style.display = 'none';
      element_2.style.display = 'block';
    } else {
      element.style.display = 'block';
    }
  });


//   function showQuizRules() {
//     var rules = "Welcome to the quiz!\n\n" +
//                 "Rules:\n" +
//                 "- Answer all questions to the best of your ability.\n" +
//                 "- Once you submit your answers, you cannot change them.\n" +
//                 "- You get 25 seconds to answer each question; watch the timer at the top"
//                 "- 5 points for the correct answer; up to 5 additional points as Speed bonus if you answer quickly"
//                 "- There is no negative marking for wrong answers";
//     alert(rules);
// }


 document.getElementById('quizBtn').addEventListener('click', function() {
    // Hide the current card
    document.getElementById('quizCard2').classList.add('d-none');
    
    // Show the next card with quiz content
    document.getElementById('quizCard3').classList.remove('d-none');
    
    // Display the first quiz
    displayQuiz();
});
const quizzes = [
    {
      question: "When was the first Southern Stars event held?",
      options: ["2006", "2008", "2010", "2012"],
      correctAnswer: "2010"
    },
    {
      question: "Which venue typically hosts the Southern Stars event?",
      options: ["Sydney Opera House", "ANZ Stadium", "Sydney Entertainment Centre", "Qudos Bank Arena"],
      correctAnswer: "Qudos Bank Arena"
    },
    {
      question: "Who is the main organizer of Southern Stars?",
      options: ["NSW Department of Education", "Sydney Theatre Company", "Australian Broadcasting Corporation", "Sydney Symphony Orchestra"],
      correctAnswer: "NSW Department of Education"
    },
    {
      question: "Which of the following is not a category in Southern Stars?",
      options: ["Dance", "Drama", "Music", "Science"],
      correctAnswer: "Science"
    },
    {
      question: "How many schools usually participate in Southern Stars?",
      options: ["Around 200", "Around 300", "Around 400", "Around 500"],
      correctAnswer: "Around 500"
    },
    {
      question: "What age group of students can participate in Southern Stars?",
      options: ["Primary School Students", "High School Students", "Both Primary and High School Students", "University Students"],
      correctAnswer: "Both Primary and High School Students"
    },
    {
      question: "Who typically hosts the Southern Stars event?",
      options: ["Celebrities", "Teachers", "Students", "Government Officials"],
      correctAnswer: "Students"
    },
    {
      question: "Which of the following is not usually performed in Southern Stars?",
      options: ["Ballet", "Hip Hop", "Opera", "Stand-up Comedy"],
      correctAnswer: "Stand-up Comedy"
    },
    {
      question: "What is the theme of Southern Stars 2022?",
      options: ["Discover", "Dream", "Achieve", "Inspire"],
      correctAnswer: "Dream"
    },
    {
      question: "What is the duration of a typical Southern Stars performance?",
      options: ["1 hour", "2 hours", "3 hours", "4 hours"],
      correctAnswer: "Approximately 3 hours"
    }
  ];
  let currentQuizIndex = 0;
  let score = 0;

  function displayQuiz() {
    const quizCard = document.getElementById('quizCard3');
    const questionElement = quizCard.querySelector('.question');
    const optionsElement = quizCard.querySelector('.options');

    const currentQuiz = quizzes[currentQuizIndex];

    // Display question
    questionElement.textContent = currentQuiz.question;

    // Display options
    optionsElement.innerHTML = '';
    currentQuiz.options.forEach((option, index) => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.classList.add('btn', 'btn-primary', 'mr-2');
      optionButton.dataset.index = index; // Store index for checking correct answer
      optionButton.addEventListener('click', () => {
        // Disable all options after one is clicked
        document.querySelectorAll('.options button').forEach(btn => {
          btn.disabled = true;
        });

        const selectedOptionIndex = parseInt(optionButton.dataset.index);
        if (selectedOptionIndex === currentQuiz.options.indexOf(currentQuiz.correctAnswer)) {
          optionButton.style.backgroundColor = 'green'; // Change background color to green
          optionButton.innerHTML = 'Right <i class="fas fa-check-circle"></i>'; // Change text to "Right"
          score++; // Increment score for correct answer
        } else {
          optionButton.style.backgroundColor = 'red'; // Change background color to red
          optionButton.innerHTML = 'Wrong <i class="fas fa-times-circle"></i>'; // Change text to "Wrong"
        }

        // Move to the next quiz after 1 second
        setTimeout(() => {
          currentQuizIndex++;
          if (currentQuizIndex < quizzes.length) {
            displayQuiz();
          } else {
            // Hide quizzes and show total score
            quizCard.classList.add('d-none');
            const totalScoreCard = document.createElement('div');
            totalScoreCard.classList.add('card', 'my-5', 'shadow-lg');
            totalScoreCard.innerHTML = `
              <div class="card-body">
                <h5 class="card-title">Total Score</h5>
                <p class="card-text">Your total score is: ${score}</p>
              </div>
            `;
            quizCard.parentNode.appendChild(totalScoreCard);
          }
        }, 1000); // 1000 milliseconds = 1 second
      });
      optionsElement.appendChild(optionButton);
    });
  }

  // Display the first quiz
  displayQuiz();


  