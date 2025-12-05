window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.padding = "20px 10px";
    document.getElementById("navbar").style.backgroundColor = "white";

  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgba(250, 241, 241, 0)";


  }
}
  
  



/*#########################################################################################*/

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element-to-animate');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Ajoute la classe "visible"
        observer.unobserve(entry.target); // Stop l'observation après l'animation
      }
    });
  }, { threshold: 0.1 }); // 10% de visibilité suffit pour déclencher

  elements.forEach(el => observer.observe(el));
});

  
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element-to-animate-right');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Ajoute la classe "visible"
        observer.unobserve(entry.target); // Stop l'observation après l'animation
      }
    });
  }, { threshold: 0.1 }); // 10% de visibilité suffit pour déclencher

  elements.forEach(el => observer.observe(el));
});
  

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element-to-animate-left');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Ajoute la classe "visible"
        observer.unobserve(entry.target); // Stop l'observation après l'animation
      }
    });
  }, { threshold: 0.1 }); // 10% de visibilité suffit pour déclencher

  elements.forEach(el => observer.observe(el));
});


/*#########################################################################################*/


  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');

    function updateActiveSection() {
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index].classList.add('active');
        }
      });
    }

    document.addEventListener('scroll', updateActiveSection);
  });






function openModal() {
  var modal = document.getElementById("myModal");
  var img = document.querySelector("img");
  var modalImg = document.getElementById("img01");
  
  modal.style.display = "block";
  modalImg.src = img.src; // Change l'image affichée dans la modale
}









