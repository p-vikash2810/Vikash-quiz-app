import React from "react";
import "./initialCard.css";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton/CustomButton";
import { setHomeValues } from "../../redux/homepage/home.action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class InitialCard extends React.Component {
  state = {
    totalQuestion: 20,
    lowerLimit: 1,
    upperLimit: 10,
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit() {
    const { homeValues } = this.props;
    homeValues(this.state);
    this.props.history.push("/quiz");
  }
  render() {
    return (
      <div className="initialCard">
        <div className="topSec">
          <CustomInput
            value={this.state.totalQuestion}
            handleChange={this.handleChange.bind(this)}
            name="totalQuestion"
          >
            Total number of Question
          </CustomInput>
        </div>
        <div className="bottom">
          <h2>Enter range of random number</h2>
          <div className="inputSec">
            <CustomInput
              value={this.state.lowerLimit}
              handleChange={this.handleChange.bind(this)}
              name="lowerLimit"
            >
              min value
            </CustomInput>
            <CustomInput
              value={this.state.upperLimit}
              handleChange={this.handleChange.bind(this)}
              name="upperLimit"
            >
              max Value
            </CustomInput>
          </div>
        </div>
        <CustomButton handleSubmit={this.handleSubmit.bind(this)}>
          Submit
        </CustomButton>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  homeValues: (values) => dispatch(setHomeValues(values)),
});

export default withRouter(connect(null, mapDispatchToProps)(InitialCard));
