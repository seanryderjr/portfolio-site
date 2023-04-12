

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

  const contactButton = document.getElementById('contact-me-button');
  
  document.getElementById('contact-me-button').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default link behavior
    contact.scrollIntoView({ behavior: 'smooth' }); 
});



const projects = document.querySelector('.projects');

document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
  e.preventDefault(); // prevent default link behavior
  projects.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
});




const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {
   event.preventDefault();

   emailjs.sendForm("service_t95xo0s", "template_ggnlq1i", ".contact-form")
      .then(() => {
         alert("Your message was sent successfully!");
      }, (error) => {
         alert("There was an error sending your message:", error);
      });
});

var images = document.querySelectorAll(".pop-out-img");


images.forEach(function(image) {
  image.addEventListener("click", function() {
    var popout = document.createElement("div");
    popout.className = "popout";
    var popoutImg = document.createElement("img");
    popoutImg.src = this.src;
    popoutImg.alt = this.alt;
    popoutImg.className = "popout-image";
    popout.appendChild(popoutImg);
    document.body.appendChild(popout);
    popout.onclick = function() {
      this.remove();
    }
  });
});
