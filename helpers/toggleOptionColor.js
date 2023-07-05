export function toggleOptionColor(planet) {
  document.querySelectorAll('.underline').forEach((underline) => {
    underline.style.backgroundColor = `var(--${planet})`;
  });
}

export function toggleBodyOptionColor(planet) {
  document.querySelectorAll('.body-option').forEach((option) => {
    if (option.classList.contains('selected')) {
      option.style.backgroundColor = `var(--${planet})`;
    } else {
      option.style.backgroundColor = 'transparent';
    }
  });
}
