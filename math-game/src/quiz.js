var array_sample = function (array) {
  return array[Math.floor(Math.random()*array.length)];
}

var question_formats = [
["How many $A functions are $B?", "all"],
["How many $B functions are $A?", "some"],
["How many $B functions are non-$A?", "some"],
["How many $A functions are non-$B?", "none"],
["How many non-$B functions are $A?", "none"],
["How many non-$B functions are non-$A?", "all"]
];

var Quiz = React.createClass({
  getInitialState: function () {
    return {
      currentQuestion: undefined,
      numCorrectAnswers: 0,
      totalQuestionsDone: 0,
      state: "not-started"
    }
  },
  dfs: function (start, edges) {
    var result = [];
    for (var i = 0; i < edges.length; i++) {
      if (edges[i][0] == start) {
        result.push(edges[i][1]);
        result.push(...this.dfs(edges[i][1], edges));
      }
    }
    return result;
  },
  handleNextQuestionClick: function () {
    this.setState({
      state: "answering-question",
      question: this.makeQuestion()
    });
  },
  makeQuestion: function () {
    var start_set = array_sample(this.props.sets);
    var follower_sets = this.dfs(start_set, this.props.theorems);

    if (follower_sets.length == 0) {
      return this.makeQuestion();
    }

    var target_set = array_sample(follower_sets);

    var question_format = array_sample(question_formats);

    var text = question_format[0].replace("$A", start_set).replace("$B", target_set);

    return { text: text, correctAnswer: question_format[1] };
  },
  handleAnswerClick: function (event) {
    this.setState({
      state: "reviewing-answer",
      answer: event.target.value,
      totalQuestionsDone: this.state.totalQuestionsDone + 1,
      numCorrectAnswers: this.state.numCorrectAnswers + (event.target.value == this.state.question.correctAnswer)
    });
  },
  render: function () {
    return (
      <div>
        {this.state.totalQuestionsDone > 0 &&
          <p className="pull-right">Score: {this.state.numCorrectAnswers}/{this.state.totalQuestionsDone}</p>}

        <h2>{this.props.quizName}</h2>

        {this.state.state == "not-started" && this.renderStart()}
        {this.state.state == "answering-question" && this.renderQuestion()}
        {this.state.state == "reviewing-answer" && this.renderReview()}
        {this.state.state == "finished" && this.renderFinished()}
      </div>
    );
  },
  renderStart: function () {
    return <div>
      <p>These are the facts you are going to be tested on:</p>
      <ul>
        {this.props.theorems.map((x) => {
          return <li key={x}>All {x[0]} functions are {x[1]}.</li>;
        })}
      </ul>
      <button className="btn btn-small btn-primary" onClick={this.handleNextQuestionClick}>start</button>
    </div>;
  },
  renderQuestion: function () {
    return <div>
      <p>{this.state.question.text}</p>

      <button className="btn btn-small btn-default" value="none" onClick={this.handleAnswerClick}>none</button>
      <button className="btn btn-small btn-default" value="some" onClick={this.handleAnswerClick}>some</button>
      <button className="btn btn-small btn-default" value="all" onClick={this.handleAnswerClick}>all</button>
    </div>;
  },
  renderReview: function () {
    return <div>
      <p>{this.state.question.text}</p>

      {this.state.answer == this.state.question.correctAnswer ?
        <p>Correct!</p> :
        <p>Wrong! Correct answer is {this.state.question.correctAnswer}</p>}

      <button className="btn btn-small btn-default" onClick={this.handleNextQuestionClick}>next question</button>
    </div>;
  }
});


var theorems = [
["constant", "linear"],
["linear", "polynomial"],
["polynomial", "analytic"],
["analytic", "smooth"],
["smooth", "continuously differentiable"],
["continuously differentiable", "differentiable"],
["differentiable", "continuous"],
["Lipschitz continuous", "continuous"],
["linear", "Lipschitz continuous"]]

var sets = ["constant", "linear", "polynomial", "analytic", "smooth", "continuously differentiable", "differentiable",
  "continuous", "Lipschitz continuous"];

ReactDOM.render(<Quiz quizName="Analysis game!" theorems={theorems} sets={sets}/>, document.getElementById("quiz"));


