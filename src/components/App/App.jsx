import React, { Component } from "react";

import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Notification } from "../Notification/Notification";
import styles from "./app.module.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedBack = state => {
    this.setState(prevState => {
     return { [state] : prevState[state] + 1 }
    })
  };

  countTotalFeedback() {
    const result = this.state.good + this.state.neutral + this.state.bad;

    return result;
  };

  countPositiveFeedbackPercentage(good) {
     const positiveAnswers = this.state.good;
     
     if( positiveAnswers === 0) {
       return 0;
     }

     return Math.round((positiveAnswers / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div className={styles.box}>
      <Section title="Please leave feedback">
      <FeedbackOptions 
         options={Object.keys(this.state)} 
         onLeaveFeedback={this.onLeaveFeedBack} />
      </Section>
      <Section title="Statistics">
      {this.countTotalFeedback() > 0 ? (
      <Statistics 
       good={this.state.good} 
       neutral={this.state.neutral} 
       bad={this.state.bad} 
       total={this.countTotalFeedback()} 
       positivePercentage={this.countPositiveFeedbackPercentage()} />) :
       (<Notification message="There is no feedback" />)}
      </Section>
      </div>
    )
  };
};