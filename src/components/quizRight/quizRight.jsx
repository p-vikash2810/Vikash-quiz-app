import React from "react";
import { createStructuredSelector } from "reselect";
import { selectHomeValues } from "../../redux/homepage/home.selector";
import { connect } from "react-redux";
import CustomInput from "../customInput/CustomInput";
import "./quizRight.css";
import CustomButton from "../customButton/CustomButton";

class QuizRight extends React.Component {
  state = {
    question_1: 0,
    question_2: 0,
    correct_count: 0,
    operator: "",
    answer: 0,
    chosen_answer: "",
    all_questions: [],
    answer_sheet: [],
  };

  select_operand(index) {
    switch (index) {
      case 1:
        return "+";
      case 2:
        return "-";
      case 3:
        return "*";
      default:
        return "/";
    }
  }

  select_answer(a, operator, b) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      default:
        return Math.floor(a / b);
    }
  }

  generate_question() {
    // let { upperValue } = this.props;
    let { lowerLimit, upperLimit } = this.props.homeValues;
    lowerLimit = parseInt(lowerLimit);
    upperLimit = parseInt(upperLimit);

    let question_1 =
      Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
    let question_2 =
      Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
    let oprand_index = Math.floor(Math.random() * 4 + 1);
    let operator = this.select_operand(oprand_index);
    let answer = this.select_answer(question_1, operator, question_2);

    this.setState({
      question_1,
      question_2,
      operator,
      answer,
    });
  }

  componentDidMount() {
    this.generate_question();
  }
  render() {
    const { homeValues } = this.props;

    const handleChange = (e) => {
      this.setState({
        chosen_answer: e.target.value,
      });
    };

    var { question_1, question_2, operator, answer } = this.state;

    const submit_answer = () => {
      let chosen_answer = parseInt(this.state.chosen_answer);
      console.log(chosen_answer);
      this.setState({
        answer_sheet: [
          ...this.state.answer_sheet,
          {
            question_1,
            operator,
            question_2,
            answer,
            chosen_answer,
            isCorrect: answer === chosen_answer,
            questionNo: this.state.answer_sheet.length + 1,
          },
        ],
      });
      this.setState({
        chosen_answer: "",
      });

      this.generate_question();
    };

  

    const restartQuiz = () => {
      this.setState({
        answer_sheet: [],
      });
    };
    return (
      <div className="QuizLeft">
        <h1>Quiz 2</h1>
        {this.state.answer_sheet.length < homeValues.totalQuestion ? (
          <div className="questionSec">
            <h2>questions: {this.state.answer_sheet.length + 1}</h2>
            <div className="question">
              <h1>{this.state.question_1}</h1>
              <h1>{this.state.operator}</h1>
              <h1>{this.state.question_2}</h1>
              <h1>=</h1>
              <CustomInput
                type="number"
                handleChange={handleChange}
                value={this.state.chosen_answer}
              />
            </div>
            <CustomButton handleSubmit={submit_answer}>next</CustomButton>
          </div>
        ) : (
          <div className="">
            <table>
              <thead>
                <tr>
                  <td>Question No</td>
                  <td>First Number</td>
                  <td>Operator</td>
                  <td>Second Number</td>
                  <td>comparison</td>
                  <td>Correct Answer</td>
                  <td>Answer Given</td>
                </tr>
              </thead>
              <tbody>
                {this.state.answer_sheet.map((sheet, index) => (
                  <tr key={index} className={JSON.stringify(sheet.isCorrect)}>
                    <td>{sheet.questionNo}</td>
                    <td>{sheet.question_1}</td>
                    <td>{sheet.operator}</td>
                    <td>{sheet.question_2}</td>
                    <td>=</td>
                    <td>{sheet.answer}</td>
                    <td>{sheet.chosen_answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <CustomButton handleSubmit={restartQuiz}>Restart</CustomButton>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  homeValues: selectHomeValues,
});

export default connect(mapStateToProps)(QuizRight);
