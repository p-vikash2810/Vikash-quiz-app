import React from "react";
import QuizLeft from "../../components/quizLeft/QuizLeft";
import QuizRight from "../../components/quizRight/quizRight";
import { withRouter } from "react-router-dom";
import CustomButton from "../../components/customButton/CustomButton";
import "./quizPage.styles.css";

const QuizPage = (props) => {
  const resetQuiz = () => {
    props.history.push("/");
  };
  return (
    <div className="quizPageContainer">
      <div className="wrapper">
        <QuizLeft />
        <QuizRight />
      </div>
      <CustomButton handleSubmit={resetQuiz}>Reset</CustomButton>
    </div>
  );
};

export default withRouter(QuizPage);
