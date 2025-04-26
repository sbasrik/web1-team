// SolanaQuiz.tsx
import { useState } from 'react';
import { solanaQuestions } from './SolanaQuestions';

const SolanaQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  const handleChoice = (questionIndex: number, choice: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: choice }));
  };

  return (
    <div className="p-6">
      <div className="h-[600px] overflow-y-auto border rounded-xl border-gray-400 shadow-md p-6 text-left font-sans space-y-10">
        {solanaQuestions.map((q, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{index + 1}. {q.question}</h2>
            <div className="flex flex-col space-y-3">
              {q.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChoice(index, choice)}
                  className={`px-4 py-2 rounded-lg border text-left
                    ${selectedAnswers[index] === choice 
                      ? 'bg-blue-500 text-green-500' 
                      : 'bg-white hover:bg-blue-100'}
                  `}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolanaQuiz;
