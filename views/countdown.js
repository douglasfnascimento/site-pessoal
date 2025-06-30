export function atualizarCountdown(displayElements, timeLeft) {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (displayElements.days) displayElements.days.textContent = days < 10 ? "0" + days : days;
  if (displayElements.hours) displayElements.hours.textContent = hours < 10 ? "0" + hours : hours;
  if (displayElements.minutes) displayElements.minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
  if (displayElements.seconds) displayElements.seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
}

export function encerrarOferta(displayElements) {
  displayElements.countdownElement.innerHTML = "Oferta Encerrada!";
  displayElements.countdownElement.style.color = "red";
  displayElements.countdownElement.style.backgroundColor = "transparent";
}