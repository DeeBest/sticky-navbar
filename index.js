const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const header = document.querySelector('header');
const container = document.getElementById('container');

window.addEventListener('scroll', () => {
  if (window.scrollY > container.offsetTop - header.offsetHeight - 60) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
