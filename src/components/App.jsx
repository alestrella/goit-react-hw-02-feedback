import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statictics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  optionsButton = Object.keys(this.state);

  addFeedback = ({ optionBtn }) => {
    this.setState(state => ({ [optionBtn]: state[optionBtn] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log('state :>> ', this.state);
    return (
      <div>
        <h2>Please leave your feedback</h2>
        <FeedbackOptions
          options={this.optionsButton}
          onLeaveFeedback={this.addFeedback}
        ></FeedbackOptions>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    );
  }
}
