
export const calculateScore = (correctAnswers, totalQuestions, timeSpent) => {
  const accuracyScore = (correctAnswers / totalQuestions) * 70;
  const timeBonus = Math.max(0, 30 - (timeSpent / 1000));
  return Math.round(accuracyScore + timeBonus);
};

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const generateQuizQuestions = (vocabulary, count = 10) => {
  const shuffled = shuffleArray(vocabulary);
  const selected = shuffled.slice(0, Math.min(count, vocabulary.length));
  
  return selected.map(word => {
    const wrongAnswers = shuffled
      .filter(w => w.id !== word.id)
      .slice(0, 3)
      .map(w => w.thai);
    
    const allChoices = shuffleArray([word.thai, ...wrongAnswers]);
    
    return {
      ...word,
      choices: allChoices,
      correctAnswer: word.thai
    };
  });
};

export const saveQuizResult = (level, category, score, userId = 'guest') => {
  const key = `leaderboard_${level}_${category}`;
  const leaderboard = JSON.parse(localStorage.getItem(key) || '[]');
  
  const result = {
    userId,
    score,
    timestamp: new Date().toISOString(),
    userName: userId === 'guest' ? 'Guest' : JSON.parse(localStorage.getItem('user'))?.name || 'User'
  };
  
  leaderboard.push(result);
  leaderboard.sort((a, b) => b.score - a.score);
  
  localStorage.setItem(key, JSON.stringify(leaderboard.slice(0, 100)));
};

export const getLeaderboard = (level, category) => {
  const key = `leaderboard_${level}_${category}`;
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const saveEncounteredWord = (wordId, userId) => {
  if (userId === 'guest') return;
  
  const key = `encountered_${userId}`;
  const encountered = JSON.parse(localStorage.getItem(key) || '[]');
  
  if (!encountered.includes(wordId)) {
    encountered.push(wordId);
    localStorage.setItem(key, JSON.stringify(encountered));
  }
};

export const getEncounteredWords = (userId) => {
  if (userId === 'guest') return [];
  const key = `encountered_${userId}`;
  return JSON.parse(localStorage.getItem(key) || '[]');
};
