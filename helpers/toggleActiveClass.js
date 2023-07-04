export function toggleActiveClass(e, planet) {
  document.querySelectorAll('.link-top-line').forEach((line) => {
    line.classList.remove('active');
  });

  const linkTopLine = e.target.parentElement.querySelector('.link-top-line');
  if (linkTopLine) {
    linkTopLine.classList.add('active');
    linkTopLine.style.backgroundColor = `var(--${planet})`;
  }
}
