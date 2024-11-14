

document.getElementById('submitBtn').addEventListener('click', function() {
  // Get all the questions and answers
  const quizForm = document.getElementById('quizForm');
  const questions = quizForm.querySelectorAll('.question');
  let score = 0;

  // Check answers
  if (document.querySelector('input[name="q1"]:checked')?.value === 'A') score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === 'B') score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === 'B') score++;

  // Display the result
  document.getElementById('result').style.display = 'block';
  document.getElementById('score').textContent = score;
});
