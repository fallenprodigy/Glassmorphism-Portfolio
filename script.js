// About Tabs
const tabsContaienr = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContaienr.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContaienr.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// ------------- Portfolio Item Design Popup ....//

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);
