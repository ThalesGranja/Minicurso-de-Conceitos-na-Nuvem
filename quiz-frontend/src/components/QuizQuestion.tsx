interface QuizQuestionProps {
  question: {
    id: string;
    questionText: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl">{question.questionText}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          onClick={() => onAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizQuestion;
