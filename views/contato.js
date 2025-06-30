export function iniciarFormulario() {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("nomeError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mensagemError").textContent = "";
    formStatus.textContent = "";
    formStatus.className = "form-status-message";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    let isValid = true;

    if (nome === "") {
      document.getElementById("nomeError").textContent = "Por favor, preencha seu nome.";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("emailError").textContent = "Por favor, preencha seu e-mail.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").textContent = "Por favor, insira um e-mail válido.";
      isValid = false;
    }

    if (mensagem === "") {
      document.getElementById("mensagemError").textContent = "Por favor, escreva sua mensagem.";
      isValid = false;
    }

    if (isValid) {
      formStatus.textContent = "Mensagem enviada com sucesso!";
      formStatus.classList.add("success");
      contactForm.reset();
    } else {
      formStatus.textContent = "Por favor, corrija os erros no formulário.";
      formStatus.classList.add("error");
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}