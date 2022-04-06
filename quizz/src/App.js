import './App.css';
import Quiz from './componentes/Quiz';
import { QuizProvider } from './Contextos/context';
function App() {
  return (
    <div className="App">
      <Quiz></Quiz>
    </div>
  );
}

export default App;
