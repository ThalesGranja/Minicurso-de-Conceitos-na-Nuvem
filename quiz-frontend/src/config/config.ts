const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://aws-pool-backend-front-end.onrender.com';

export const API_ENDPOINTS = {
  START_QUIZ: `${API_BASE_URL}/quiz/start`,
  NEXT_QUESTION: (sessionId: string) => `${API_BASE_URL}/quiz/next/${sessionId}`,
  ANSWER_QUESTION: (sessionId: string) => `${API_BASE_URL}/quiz/answer/${sessionId}`,
  GET_RESULTS: (sessionId: string) => `${API_BASE_URL}/quiz/results/${sessionId}`,
};
