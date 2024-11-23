import { useState, FormEvent } from 'react';

interface QuizFormProps {
  onStart: (userName: string) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ onStart }) => {
  const [userName, setUserName] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onStart(userName);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        placeholder="Digite seu nome"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Iniciar Quiz
      </button>
    </form>
  );
};

export default QuizForm;
