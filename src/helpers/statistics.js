const INITIAL_STATS = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
  distribution: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },
};

const increment = (num) => num + 1;

// only if current streak is larger than max streak, do we update max streak
const calculateMaxStreak = (currentStreak, maxStreak) =>
  currentStreak > maxStreak ? currentStreak : maxStreak;

const calculateDistribution = (prevDistribution, numAttempts) => {
  const prev = prevDistribution[numAttempts];
  return {
    ...prevDistribution,
    [numAttempts]: increment(prev),
  };
};

function calculateStatistics(prevStats, isGameWon, numAttempts) {
  const played = increment(prevStats.played);

  if (!isGameWon) {
    return {
      ...prevStats,
      played,
      // reset current streak
      // TODO: include time?
      currentStreak: 0,
    };
  }

  const wins = increment(prevStats.wins);
  const currentStreak = increment(prevStats.currentStreak);
  const maxStreak = calculateMaxStreak(currentStreak, prevStats.maxStreak);
  const distribution = calculateDistribution(
    prevStats.distribution,
    numAttempts
  );

  return {
    played,
    wins,
    currentStreak,
    maxStreak,
    distribution,
  };
}

export { INITIAL_STATS, calculateStatistics };
