import { updateUI } from './fetch.js';
export let activeOptionText = 'overview';
export const toggleOption = (e) => {
  document.querySelectorAll('.underline').forEach((underline) => {
    underline.classList.remove('active');
  });
  const targetElement = e.target;

  const parentElement = targetElement.classList.contains('head-option')
    ? targetElement
    : targetElement.parentElement;

  const underline = parentElement.querySelector('.underline');

  underline.classList.add('active');
  const pTag = parentElement.querySelector('p');
  activeOptionText = pTag.textContent || pTag.innerText;
  updateUI();
};
export const toggleBodyOption = (e) => {
  document.querySelectorAll('.body-option').forEach((option) => {
    option.classList.remove('selected');
  });
  const targetElement = e.target;

  const parentElement = targetElement.classList.contains('body-option')
    ? targetElement
    : targetElement.parentElement;

  parentElement.classList.add('selected');
  const pTag = parentElement.querySelector('h2');
  activeOptionText = pTag.textContent || pTag.innerText;
  console.log(activeOptionText);
  updateUI();
};
export const resetActiveOption = () => {
  activeOptionText = 'overview';
  console.log(activeOptionText);
};
