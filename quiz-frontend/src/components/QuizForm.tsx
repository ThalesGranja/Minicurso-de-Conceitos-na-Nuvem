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
    if (userName.trim()) {
      onStart(userName);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 p-6 space-y-6">
      {!isPreparing ? (
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-xl p-8 space-y-6 border border-gray-100"
          >
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                Bem-vindo ao Quiz!
              </h1>
              <p className="text-gray-600 text-sm">
                Digite seu nome abaixo e escolha uma opção para começar sua jornada.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                  transition duration-300 ease-in-out"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="submit"
                  disabled={!userName.trim()}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                    px-4 py-3 rounded-lg transition duration-300 ease-in-out 
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Iniciar Quiz
                </button>

                <button
                  type="button"
                  onClick={() => setIsPreparing(true)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold 
                    px-4 py-3 rounded-lg transition duration-300 ease-in-out"
                >
                  Preparação
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <StudyGuide onBack={() => setIsPreparing(false)} />
      )}

      <footer className="text-gray-500 text-sm text-center opacity-75">
        © {new Date().getFullYear()} Quiz App - Todos os direitos reservados
      </footer>
    </div>
  );
};

export default QuizForm;