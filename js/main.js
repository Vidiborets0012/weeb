'use stict';

const iconMenu = document.querySelector('.icon-menu');

let documentActions = e => {
  const targetElement = e.target;
  if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('open-menu');
  }
};

document.addEventListener('click', documentActions);
