export function getTargetEndTime(initialDays) {
  const localStorageKey = "countdownTargetEndTime";
  let targetEndTime = localStorage.getItem(localStorageKey);

  if (!targetEndTime || parseInt(targetEndTime) < Date.now()) {
    targetEndTime = Date.now() + initialDays * 24 * 60 * 60 * 1000;
    localStorage.setItem(localStorageKey, targetEndTime);
  } else {
    targetEndTime = parseInt(targetEndTime);
  }

  return targetEndTime;
}