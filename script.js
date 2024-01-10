const buttons = document.querySelectorAll(".faq-button");
const questions = document.querySelectorAll(".faq-question");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.closest(".faq");
    faq.classList.toggle("active");
  });
});

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const faq = question.closest(".faq");
    faq.classList.toggle("active");
  });
});
