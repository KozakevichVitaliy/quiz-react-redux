import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

export default function ActiveQuiz(props) {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{ props.answerNumder }.</strong>&nbsp;
          {props.question}
        </span>

        <small>{ props.answerNumder } from { props.quizLength }</small>
      </p>

      <AnswersList 
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}
