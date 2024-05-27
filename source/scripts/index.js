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

// let currentIndex = 3;

// Получаем из нашего контейнера список всех элементов и забираем по индексу нужный, чтобы затем добавить / убрать с него класс активного
// const slider = document.querySelector('.slider__list--rect');
// const dots = document.querySelector('.slider-dots__list');
// const imageWidth = 180;
// const getImageByIndex = (index) => {

//   return slider.querySelectorAll('li')[index];
// };

// const getDotByIndex = (index) => {
//   return dots.querySelectorAll('li')[index].firstElementChild;
// }

// Стрелочка влево
// const previous = () => {
//   const previousIndex = currentIndex - 1
//   const currentElement = getImageByIndex(currentIndex);
//   const previousElement = getImageByIndex(previousIndex);
//   const currentDot = getDotByIndex(currentIndex);
//   const previousDot = getDotByIndex(previousIndex);
//   currentElement.classList.remove('slider__item--rect-active');
//   previousElement.classList.add('slider__item--rect-active');
//   currentDot.classList.remove('slider-dots__dot--active');
//   previousDot.classList.add('slider-dots__dot--active');
//   slider.style.transform = ('translateX(180px)');
// Здесь у контейнера именяем transform: translateX на положительную ширину одной картинки (с учётом одного гэпа)
// Здесь убираем активный класс с текущего элемента и ставим на предыдущий
// };

// Стрелочка вправо
// const next = () => {
//   const nextIndex = currentIndex + 1
//   const currentElement = getImageByIndex(currentIndex);
//   const nextElement = getImageByIndex(nextIndex);
//   const currentDot = getDotByIndex(currentIndex);
//   const nextDot = getDotByIndex(nextIndex);
//   currentElement.classList.remove('slider__item--rect-active');
//   nextElement.classList.add('slider__item--rect-active');
//   currentDot.classList.remove('slider-dots__dot--active');
//   nextDot.classList.add('slider-dots__dot--active');
//   slider.style.transform = ('translateX(-180px)');
// Здесь у контейнера именяем transform: translateX на отрицательную ширину одной картинки (с учётом одного гэпа)
// Здесь убираем активный класс с текущего элемента и ставим на следующий
// };

// В индекс отдаём индекс точки или картинки. При клике на точку или картинку вызываем одну и ту же функцию (эту)
// const setActive = (index) => {
//   const difference = index - currentIndex;
//   const isIncrease = difference > 0;
//   const iterations = Math.abs(difference);

//   // let i = 0;
//   for (let i = 0; i < iterations; i++) {
//     (isIncrease ? next : previous)();
//   }
//   (function iterate () {
//     (isIncrease ? next : previous)();

//   //   if (++i < iterations) setTimeout(iterate, 100);
//   // })();
// };

// slider.addEventListener('click', (evt) => {
//   setActive(Array.from(slider.children).findIndex((el) => evt.target === el));
// });

// dots.addEventListener('click', (evt) => {
//   setActive(Array.from(dots.children).findIndex((el) => evt.target === el));
//   console.log(Array.from(dots.children).findIndex((el) => evt.target === el));
// });
