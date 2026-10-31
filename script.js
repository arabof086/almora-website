document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".header");
  const languageButtons = document.querySelectorAll(".lang-btn");

  // LANGUAGE SYSTEM
  function changeLanguage(language) {

    const elements =
      document.querySelectorAll(
        "[data-az][data-en][data-ru]"
      );

    elements.forEach((element) => {

      const translation =
        element.getAttribute(
          `data-${language}`
        );

      if (translation !== null) {
        element.textContent = translation;
      }

    });

    languageButtons.forEach((button) => {
      button.classList.remove("active");
    });

    const activeButton =
      document.querySelector(
        `.lang-btn[data-lang="${language}"]`
      );

    if (activeButton) {
      activeButton.classList.add("active");
    }

    document.documentElement.lang = language;

    localStorage.setItem(
      "almora-language",
      language
    );
  }

  languageButtons.forEach((button) => {

    button.addEventListener("click", () => {
      changeLanguage(button.dataset.lang);
    });

  });

  const savedLanguage =
    localStorage.getItem("almora-language") || "az";

  changeLanguage(savedLanguage);


  // HEADER
  function updateHeader() {

    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();


  // SCROLL REVEAL
  const revealElements =
    document.querySelectorAll(".reveal");

  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  // HERO PARALLAX
  const hero = document.querySelector(".hero");

  if (hero) {

    window.addEventListener("scroll", () => {

      const y = window.scrollY;

      if (y < window.innerHeight) {

        hero.style.backgroundPosition =
          `center calc(50% + ${y * 0.10}px)`;

      }

    });

  }

});