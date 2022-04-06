import { createContext,useReducer } from "react";
import questions from "../componentes/questions";
import {suffleAnswers} from '../componentes/helper';

const initialState = {
    questions,
    currentQuestionIndex: 0,
    showResults: false,
    correctAnswersCount: 0,
    answers: suffleAnswers(questions[0]),
    currentAnswer: '',
};
const reducer = (state,action)=>{
    switch (action.type){
        case 'SELECT_ANSWER':{
        const correctAnswersCount =
            action.payload ===
            state.questions[state.currentQuestionIndex].Correcta
            ? state.correctAnswersCount + 1
            : state.correctAnswersCount;

            return{
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount,
            };
        }
        case "NEXT":{
        const showResults =
            state.currentQuestionIndex === state.questions.length - 1;

        const currentQuestionIndex = showResults
            ? state.currentQuestionIndex
            : state.currentQuestionIndex + 1;

        const answers = showResults
            ? []
            : suffleAnswers(state.questions[currentQuestionIndex]);

            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: "",
            };
        }
        case "RESTART": {
            return initialState;
        }
        default: return state;
    }
   
}
export const QuizContext = createContext();

export const QuizProvider = ({children}) =>{
    const value = useReducer(reducer,initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}; 