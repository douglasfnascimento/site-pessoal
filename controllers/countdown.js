import { getTargetEndTime } from "../models/countdown.js";
import { atualizarCountdown, encerrarOferta } from "../views/countdown.js";

export function iniciarCountdown() {
  const displayElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    countdownElement: document.getElementById("countdown-timer"),
  };

  const targetEndTime = getTargetEndTime(8);

  function update() {
    const now = Date.now();
    const timeLeft = targetEndTime - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      encerrarOferta(displayElements);
      return;
    }

    atualizarCountdown(displayElements, timeLeft);
  }

  update();
  const interval = setInterval(update, 1000);
}