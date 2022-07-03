import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import Box from './Box';
import { iconOptions } from './iconOptions.js';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = ({ label }) =>
    this.setState(state => ({ [label]: state[label] + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, item) => total + item, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Box
        width="50%"
        my={0}
        mx="auto"
        minHeight="400px"
        borderRadius="middle"
        bg="white"
        as="main"
      >
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={iconOptions}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </Box>
    );
  }
}
