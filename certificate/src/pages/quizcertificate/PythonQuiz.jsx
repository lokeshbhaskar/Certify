import React from 'react'
import QuizPage from '../../components/QuizPage'
import quize from '../../utils/quiz.json'

const PythonQuiz = () => {
  return <QuizPage title="Python Quize" quizz={quize.python} />
}

export default PythonQuiz