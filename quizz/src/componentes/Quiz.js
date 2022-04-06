import React, { useContext } from 'react';
import { QuizContext } from '../Contextos/context';
import Question from './Question';
const Quiz = () => {
    const [quizState,dispatch] = useContext(QuizContext);
    
    return ( 
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">congratulations</div>
                    <div className="results-info">
                        <div>Has completado el quiz.</div>
                        <div>
                            Obtuviste {quizState.correctAnswersCount} de {" "}{quizState.questions.length} Correctas.
                        </div>
                        <button className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</button>
                    </div>

                </div>
            )}
            {!quizState.showResults && (
            <div>
                <div className="score">
                    Question {quizState.currentQuestionIndex + 1} /{quizState.questions.length}
                </div>
                <Question/>
                <button className="next-button" onClick={() => dispatch({type: "NEXT"})}>
                    Siguiente pregunta
                </button>
            </div>)}
          
        </div>
     );
}
 
export default Quiz;