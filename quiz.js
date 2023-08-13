import Question from "./questions.js";
import Results from "./results.js";

class Quiz {
  constructor(amount, data) {
    this.totalAmount = amount;
    this.allQuestions = this.questionSeparator(data);
  }
  questionSeparator = (data) => {
    return data.results.map(
      (e, index) => new Question(e, this.totalAmount, index)
    );
  };


}
export default Quiz;
