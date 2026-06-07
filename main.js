/* ── CARD EXPAND / COLLAPSE ── */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const panel = card.querySelector('.card-expand');
    const isOpen = !panel.hidden;

    // Close all open cards
    document.querySelectorAll('.card').forEach(c => {
      c.querySelector('.card-expand').hidden = true;
      c.classList.remove('open');
    });

    // Toggle clicked card
    if (!isOpen) {
      panel.hidden = false;
      card.classList.add('open');
    }
  });

  // Prevent expand-link clicks from toggling the card
  card.querySelectorAll('.expand-btn, .expand-links a').forEach(link => {
    link.addEventListener('click', e => e.stopPropagation());
  });
});

/* ── FILTER BUTTONS ── */
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tag = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      const tags = (card.dataset.tags || '').toLowerCase();
      const show = tag === 'all' || tags.split(' ').includes(tag.toLowerCase());
      card.style.display = show ? '' : 'none';
    });
  });
});