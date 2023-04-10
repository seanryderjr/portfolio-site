const aboutSection = document.querySelector('.about');

document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
  e.preventDefault(); // prevent default link behavior
  aboutSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});

