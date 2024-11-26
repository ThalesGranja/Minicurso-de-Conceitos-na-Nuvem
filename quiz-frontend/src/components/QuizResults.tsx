import React from 'react';

interface QuizResultsProps {
  results: {
    correctAnswers: number;
    wrongAnswers: number;
    questions: Question[];
  };
  onRestart: () => void;
}

interface Question {
  id: string;
  questionText: string;
  options: string[];
  description: string;
}

const QuizResults: React.FC<QuizResultsProps> = ({ results, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-green-50 p-4 sm:p-8">
      <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Resultados
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-800">Acertos:</span>
            <span className="font-bold text-green-500">
              {results.correctAnswers}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-800">Erros:</span>
            <span className="font-bold text-red-500">
              {results.wrongAnswers}
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Questões:</h3>
          {results.questions.map((question, index) => (
            <div key={question.id} className="bg-gray-100 rounded-lg p-4">
              <p className="font-medium text-gray-800">
                Questão {index + 1}: {question.questionText}
              </p>
              <p className="text-gray-600 mt-2">{question.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-3 rounded-lg mt-6 transition duration-300"
        >
          Reiniciar Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResults;