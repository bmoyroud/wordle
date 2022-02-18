const STATUS = {
  absent: 1,
  present: 2,
  correct: 3,
};

// example:
// current letter is 'absent', new letter is 'present' or 'correct'
// return 'present' or 'correct'
function getHighestStatus(currentStatus, newStatus) {
  if (!currentStatus || STATUS[currentStatus] < STATUS[newStatus]) {
    return newStatus;
  }
  return currentStatus;
}

function checkStatuses(allStatuses, statuses) {
  const updated = { ...allStatuses };
  const entries = Object.entries(statuses);
  for (const [letter, newStatus] of entries) {
    const currentStatus = updated[letter];
    const updatedStatus = getHighestStatus(currentStatus, newStatus);
    updated[letter] = updatedStatus;
  }
  return updated;
}

export { getHighestStatus, checkStatuses };
