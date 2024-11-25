import { useState, FormEvent } from "react";
import StudyGuide from "./StudyGuide";

interface QuizFormProps {
  onStart: (userName: string) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ onStart }) => {
  const [userName, setUserName] = useState<string>('');
  const [isPreparing, setIsPreparing] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onStart(userName);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 p-6">
      {!isPreparing ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
        >
          <h1 className="text-2xl font-bold text-gray-700">Bem-vindo ao Quiz!</h1>
          <p className="text-gray-500 text-center">
            Digite seu nome abaixo e escolha uma opção para começar sua jornada.
          </p>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300 focus:outline-none"
            required
          />
          <div className="flex flex-col gap-4 w-full">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Iniciar Quiz
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
              onClick={() => setIsPreparing(true)}
              onChange={(e) => setUserName(e.target.value)}
           
            
            >
              Iniciar Preparação
            </button>
          </div>
        </form>
      ) : (
        <StudyGuide onBack={() => setIsPreparing(false)} />
      )}
      <footer className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Quiz App - Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default QuizForm;
