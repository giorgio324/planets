export function toggleOptionColor(planet) {
  document.querySelectorAll('.underline').forEach((underline) => {
    underline.style.backgroundColor = `var(--${planet})`;
  });
}
