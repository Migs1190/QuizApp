import Results from "./results.js";
class Question {
  constructor(Q, amount, count) {
    this.question = Q.question;
    this.allAnswers = [Q.correct_answer, ...Q.incorrect_answers];
    this.correctAnswer = Q.correct_answer;
    this.totalAmount = amount;
    this.count = count;
    

    this.renderer();
    this.radios = document.querySelectorAll(`.rad${this.count}`);

    this.submitBtn = document.querySelector(`.finish-quiz`);
    this.submitBtn.addEventListener(`click`, this.toResults);
  }

  renderer = () => {
    const frame = document.querySelector(`.quiz-content`);
    frame.innerHTML += `
        <div class="question-frame">
        <h5 class="counter">${this.count + 1}/${this.totalAmount}</h5>
        <h3 class="question">${this.question}</h3>
        </div>
        `;
    const innerFrame = document.querySelector(`.question-frame:last-of-type`);
    this.allAnswers.forEach((e) => {
      innerFrame.innerHTML += `
            <label class="answer" class="label${this.count}">
            <input type="radio" name="${this.count}" class="rad${this.count}", title="${e}">
              ${e}
              </label>`;
    });
  };

  toResults = () => {
    this.answers = document.querySelector(`.rad${this.count}:checked`);
    const quizFrame = document.querySelector(`#quiz-main-frame`);
    const resultsFrame = document.querySelector(`#results-main-frame`);

    quizFrame.style.display = `none`;
    resultsFrame.style.display = `block`;
    new Results(this);
  };
}

export default Question;
