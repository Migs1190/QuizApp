class Results {
  static answerCount = 0;

  constructor(Q) {
    this.correctAnswer = Q.correctAnswer;
    this.index = Q.count;
    this.chosenAnswers = Q.answers;
    this.amount = Q.totalAmount;

    this.checkAnswer(this.chosenAnswers);

    this.redoBtn = document.querySelector(`.redo-quiz`);
    this.redoBtn.addEventListener(`click`, () => location.reload());
    this.showResults();
  }

  checkAnswer = (ans) => {
    if (ans == null) return;
    if (ans.title == this.correctAnswer) Results.answerCount++;
  };
  showResults = () => {
    const results = document.querySelector(`.results`);
    results.innerHTML = `You answered ${Results.answerCount} out of ${this.amount} questions correct`;
  };
}
export default Results;
