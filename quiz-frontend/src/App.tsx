import { useState } from 'react';
import QuizForm from './components/QuizForm';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';
import { API_ENDPOINTS } from './config/config';

// Interfaces para os tipos de dados
interface Question {
  id: string;
  questionText: string;
  options: string[];
  description: string;
}

interface Results {
  correctAnswers: number;
  wrongAnswers: number;
  questions: Question[];  // Incluindo as questões no tipo
}

const App = () => {
  const [step, setStep] = useState<'form' | 'question' | 'results'>('form');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);  // Usando a interface Question
  const [results, setResults] = useState<Results | null>(null);  // Usando a interface Results

  const startQuiz = async (userName: string) => {
    const response = await fetch(API_ENDPOINTS.START_QUIZ, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName }),
    });
    const session = await response.json();
    setSessionId(session.sessionId);
    loadNextQuestion(session.sessionId);
  };

  const loadNextQuestion = async (sessionId: string) => {
    const response = await fetch(API_ENDPOINTS.NEXT_QUESTION(sessionId), {
      method: 'POST',
    });

    // Verifica se a resposta está ok e contém corpo
    const responseBody = await response.text();  // Usando text() para lidar com respostas vazias
    if (response.ok && responseBody) {
      try {
        const question = JSON.parse(responseBody);  // Tenta fazer o parse da resposta
        if (question) {
          // Se houver uma próxima pergunta, atualiza a pergunta atual
          setCurrentQuestion(question);
          setStep('question');
        } else {
          // Se não houver mais perguntas, busca os resultados
          fetchResults(sessionId);
        }
      } catch (error) {
        console.error('Erro ao tentar parsear a resposta JSON:', error);
      }
    } else {
      // Em caso de resposta vazia ou erro no servidor, busca os resultados
      fetchResults(sessionId);
    }
  };

  const fetchResults = async (sessionId: string) => {
    const response = await fetch(API_ENDPOINTS.GET_RESULTS(sessionId), {
      method: 'GET',
    });

    // Verifica se a resposta é válida antes de tentar fazer o parsing
    const responseBody = await response.text();
    if (response.ok && responseBody) {
      try {
        const results = JSON.parse(responseBody);
        setResults(results);  // Atualiza o estado com os resultados
        setStep('results');    // Altera o estado para exibir os resultados
      } catch (error) {
        console.error('Erro ao tentar parsear os resultados JSON:', error);
      }
    } else {
      console.error('Erro ao obter os resultados ou resposta vazia');
    }
  };

  const handleAnswer = async (answer: string) => {
    // Envia a resposta para o backend
    await fetch(API_ENDPOINTS.ANSWER_QUESTION(sessionId as string), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: currentQuestion?.id, userAnswer: answer }),
    });
    // Após responder, carrega a próxima pergunta ou os resultados
    loadNextQuestion(sessionId as string);
  };

  const restartQuiz = () => {
    setStep('form');
    setSessionId(null);
    setCurrentQuestion(null);
    setResults(null);
  };

  return (
    <div className="">
      {step === 'form' && <QuizForm onStart={startQuiz} />}
      {step === 'question' && currentQuestion && <QuizQuestion question={currentQuestion} onAnswer={handleAnswer} />}
      {step === 'results' && results && <QuizResults results={results} onRestart={restartQuiz} />}
    </div>
  );
};

export default App;
