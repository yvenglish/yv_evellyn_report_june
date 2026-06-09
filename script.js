document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-card').forEach(card => {
    const percent = card.dataset.percent || 0;
    const bar = card.querySelector('.bar span');
    if (bar) bar.style.width = `${percent}%`;
  });

  const printBtn = document.querySelector('#printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
});
