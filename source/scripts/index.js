// Выпадающий список
const parents = document.querySelectorAll('.advantages__item-text');
for (const parent of parents) {
  parent.onclick = function () {
    const child = parent.nextSibling.nextSibling;
    child.classList.toggle('hidden');
    parent.classList.toggle('advantages__item-text--rotate');
  };
}

// Модальные окна
const paper = document.querySelector('.questionnaire');
const success = document.querySelector('.questionnaire--success');
const close = document.querySelectorAll('.questionnaire__button');
const open = document.querySelector('.hero-section__button');
const submit = document.querySelector('.questionnaire__submit-button');
const submitSuccess = document.querySelector('.questionnaire__submit-button--success');

open.onclick = function () {
  paper.classList.remove('hidden');
};

for (const closeButton of close) {
  closeButton.onclick = function () {
    paper.classList.add('hidden');
    success.classList.add('hidden');
  };
}

submit.addEventListener('click',
  (evt) => {
    evt.preventDefault();
    paper.classList.add('hidden');
    success.classList.remove('hidden');
  }
);

submitSuccess.onclick = function () {
  success.classList.add('hidden');
};
