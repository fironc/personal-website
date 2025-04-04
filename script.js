document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to Top Button
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.id = "topBtn";
topBtn.title = "Back to top";
topBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #f39c12;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(topBtn);

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
