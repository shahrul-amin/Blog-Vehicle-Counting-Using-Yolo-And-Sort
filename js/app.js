document.addEventListener('DOMContentLoaded', function() {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
  });

  sr.reveal('.banner-content, .newsletter, .blog-header', {delay: 150, origin: 'left'});
  sr.reveal('.featured-left, .featured-right, .blog-card', {delay: 150, origin: 'top'});

  const readMoreBtn = document.querySelector('.readme-btn');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');

  if (readMoreBtn && popup && closeBtn) {
    readMoreBtn.addEventListener('click', function(event) {
      event.preventDefault();
      popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target == popup) {
        popup.style.display = 'none';
      }
    });
  }
});
