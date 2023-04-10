

const home = document.querySelector('.jumbotron');

document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
  e.preventDefault(); // prevent default link behavior
  home.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});

const aboutSection = document.querySelector('.about');

document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
  e.preventDefault(); // prevent default link behavior
  aboutSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});

const contact = document.querySelector('.contact');

document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
  e.preventDefault(); // prevent default link behavior
  contact.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});

