interface QuizResultsProps {
  results: {
    correctAnswers: number;
    wrongAnswers: number;
    questions: Question[]
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
  console.log(results);
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl">Resultados</h2>
      <p>Acertos: {results.correctAnswers}</p>
      <p>Erros: {results.wrongAnswers}</p>
      
      {/* Exibindo as questões com número, texto e explicação */}
      <div className="mt-4">
        <h3 className="text-xl">Questões:</h3>
        {results.questions.map((question, index) => (
          <div key={question.id} className="mt-2">
            <p><strong>Questão {index + 1}:</strong> {question.questionText}</p>
            <p><strong>Explicação:</strong> {question.description}</p>
          </div>
        ))}
      </div>
      
      <button
        onClick={onRestart}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Reiniciar Quiz
      </button>
    </div>
  );
};

export default QuizResults;
