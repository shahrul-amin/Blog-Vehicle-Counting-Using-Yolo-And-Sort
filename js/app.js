document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };
  
  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
  };
  
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
  })
  
  sr.reveal('.banner-content, .newsletter, .blog-header', {delay: 200, origin: 'left'})
  sr.reveal('.featured-left, .featured-right, .blog-card', {delay: 200, origin: 'top'})

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
