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

  addFeedback = ({ optionBtn }) =>
    this.setState(state => ({ [optionBtn]: state[optionBtn] + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, item) => total + item, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    console.log('total :>> ', total);
    console.log('total :>> ', positivePercentage);
    return (
      <div>
        <h2>Please leave your feedback</h2>
        <FeedbackOptions
          options={this.optionsButton}
          onLeaveFeedback={this.addFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      </div>
    );
  }
}
