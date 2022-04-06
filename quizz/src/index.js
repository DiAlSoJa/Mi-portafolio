import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QuizProvider} from "./Contextos/context";

ReactDOM.render(
    <QuizProvider>
      <App />
    </QuizProvider>  
  ,
  document.getElementById('root')
);

