import React, { useContext } from 'react';
import { QuizContext } from '../Contextos/context';
import Answer from "./Answer";

const Question = () => {
    const [quizState,dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const onselectAnswer = (answerText) =>{
        dispatch({type: "SELECT_ANSWER",payload: answerText });
    }
    return ( 
        <div className="questions">
            <h2>{currentQuestion.Question}</h2>
            <div className="answers">
                {quizState.answers.map((answer,index)=>(
                    <Answer 
                    currentAnswer={quizState.currentAnswer}
                    correctAnswer={currentQuestion.Correcta}
                    answerText={answer} 
                    key={index} 
                    index={index} 
                    onselectAnswer={onselectAnswer}></Answer>
                ))}
            </div>
        </div>
     );
}
 
export default Question;