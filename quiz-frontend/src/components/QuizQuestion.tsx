import React from 'react';
import YouTube, { YouTubeEvent } from 'react-youtube';

interface QuizQuestionProps {
  question: {
    id: string;
    questionText: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const onPlayerReady = (event: YouTubeEvent) => {
    event.target.playVideo();
  };

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-green-50 p-4 sm:p-8">
      <YouTube videoId="dQw4w9WgXcQ" opts={opts} onReady={onPlayerReady} />
      <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {question.questionText}
        </h2>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-lg text-gray-800 font-medium transition duration-300"
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
