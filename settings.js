import Question from "./questions.js";
import Quiz from "./quiz.js";

class Settings {
  constructor() {
    this.amount = document.querySelector(`#amount-input`);
    this.category = document.querySelector(`#category-select`);
    this.difficulty = document.querySelector(`#difficulty-select`);
    this.type = document.querySelector(`#type-select`);
    this.startBtn = document.querySelector(`.start-btn`);

    this.settings = document.querySelector(`#settings-main-frame`);
    this.quizFrame = document.querySelector(`#quiz-main-frame`);

    this.startBtn.addEventListener(`click`, this.startQuiz);
  }
  startQuiz = () => {
    const amount = this.amount.value;
    const category = this.category.value;
    const difficulty = this.difficulty.value;
    const type = this.type.value;
    let url = this.urlMaker(amount, category, difficulty, type);
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        this.switchToQuiz(amount, data);
      });
  };

  urlMaker = (amount, category, difficulty, type) => {
    let x = `https://opentdb.com/api.php?amount=${amount}`;

    if (category !== `none`) x += `&category=${category}`;
    if (difficulty !== `none`) x += `&difficulty=${difficulty}`;
    if (type !== `none`) x += `&type=${type}`;

    return x;
  };
  switchToQuiz = (amount, data) => {
    this.settings.style.display = `none`;
    this.quizFrame.style.display = `block`;
    new Quiz(amount, data);
  };
}
export default Settings;
