document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  /* =========================================
     TRANSLATIONS
  ========================================= */

  const translations = {
    az: {
      cursorView: "Bax",
      navHome: "Ana səhifə",
      navStory: "Hekayəmiz",
      navOrchard: "Bağımız",
      navVarieties: "Sortlarımız",
      navContact: "Əlaqə",
      headerContact: "Bizimlə əlaqə",

      heroEyebrow: "QUBA • AZƏRBAYCAN",
      heroTitleMain: "Bağımızdan",
      heroTitleScript: "sizə",
      heroSubtitle:
        "Təbiətin ən təmiz dadı. Sevgi ilə yetişdirilir, qayğı ilə sizə çatdırılır.",
      heroProducts: "Məhsullarımızı kəşf et",
      heroStory: "Hekayəmiz",
      scroll: "Aşağı",

      marquee:
        "TƏZƏ • TƏBİİ • SEVGİ İLƏ • NƏSİLDƏN NƏSLƏ • PREMIUM KEYFİYYƏT •",

      storyNumber: "01 — HEKAYƏMİZ",
      storyTitle: "Sevgi qayğı ilə ötürülür, nəsildən nəslə…",
      storyLead: "Bəzi şeylər öyrədilmir. Onlar yaşanır.",
      storyText:
        "Torpağa hörmət, məhsula qayğı və hər mövsüm yenidən başlayan səbir. ALMORA üçün alma sadəcə meyvə deyil — bağla insan arasında illərlə qurulan bir bağdır.",
      storyButton: "Bağımızı kəşf et",

      orchardNumber: "02 — BAĞIMIZ",
      orchardTitle: "Hər şey torpaqdan başlayır.",
      orchardCard1Title: "Torpaq",
      orchardCard1Text:
        "Qubanın torpağı hər mövsümün ilk imzasıdır.",
      orchardCard2Title: "Əllər",
      orchardCard2Text:
        "Hər alma diqqətlə, yetişdiyi anda seçilir.",
      orchardCard3Title: "Qayğı",
      orchardCard3Text:
        "Yığım son deyil. Keyfiyyətin davamıdır.",

      peopleNumber: "03 — ƏLLƏRİN ZƏHMƏTİ",
      peopleTitle: "Bir mövsümün arxasında insanlar var.",
      peopleIntro:
        "Hər meyvəyə toxunan əllər, hər ağaca ayrılan vaxt, hər gün təkrarlanan qayğı.",
      peopleCaption: "ALMORA komandası • Quba",
      counter1: "diqqətli seçim",
      counter2: "nəsil qayğı",
      counter3: "gün diqqət",

      varietiesNumber: "04 — SORTLARIMIZ",
      varietiesTitle: "Hər rəngin öz xarakteri var.",
      tasteSweet: "Şirin",
      tasteJuicy: "Şirəli",
      tasteCrisp: "Xırtıldayan",
      tasteFresh: "Təravətli",
      tasteTart: "Turşməzə",
      tasteDelicate: "Zərif",
      tasteAromatic: "Aromatik",

      premiumNumber: "05 — ALMORA SELECT",
      premiumSmall: "xüsusi anlar üçün",
      premiumTitle: "Hər alma — bir hədiyyə.",
      premiumText:
        "Təbiətin sadəliyini premium təqdimatda hiss edin.",
      premiumButton: "Bizimlə əlaqə",

      quote:
        "Hər alma bir hekayədir. Hər dişləmə — bir xatirə.",

      childhoodNumber: "06 — UŞAQLIQ DADI",
      childhoodTitle: "Bəzi dadlar heç vaxt unudulmur.",
      childhoodText:
        "Bir dişləmə. Bir yay günü. Bir xatirə.",

      contactNumber: "07 — ƏLAQƏ",
      contactTitle: "Bağımızdan sizə.",
      contactIntro: "ALMORA ilə əlaqə saxlayın.",

      contactAddressLabel: "Ünvan",
      contactAddress: "Aşağı Atuc, Quba, Azərbaycan",
      contactPhoneLabel: "Telefon",
      contactHoursLabel: "Əlaqə vaxtı",
      contactHours: "Əvvəlcədən əlaqə saxlayın",
      whatsappButton: "WhatsApp ilə yaz",

      formName: "Adınız",
      formNamePlaceholder: "Adınızı yazın",
      formPhone: "Telefon",
      formPhonePlaceholder: "+994",
      formMessage: "Mesaj",
      formMessagePlaceholder: "Mesajınızı yazın",
      formSubmit: "Mesaj göndər",

      directions: "Yol tarifi",
      footerTagline: "Bağımızdan sizə",
      copyright:
        "© 2026 ALMORA. Bütün hüquqlar qorunur."
    },

    ru: {
      cursorView: "Смотреть",
      navHome: "Главная",
      navStory: "Наша история",
      navOrchard: "Наш сад",
      navVarieties: "Сорта",
      navContact: "Контакты",
      headerContact: "Связаться с нами",

      heroEyebrow: "ГУБА • АЗЕРБАЙДЖАН",
      heroTitleMain: "Из нашего сада",
      heroTitleScript: "к вам",
      heroSubtitle:
        "Самый чистый вкус природы. Выращено с любовью, доставлено с заботой.",
      heroProducts: "Открыть наши сорта",
      heroStory: "Наша история",
      scroll: "Вниз",

      marquee:
        "СВЕЖЕЕ • НАТУРАЛЬНОЕ • С ЛЮБОВЬЮ • ИЗ ПОКОЛЕНИЯ В ПОКОЛЕНИЕ • ПРЕМИУМ КАЧЕСТВО •",

      storyNumber: "01 — НАША ИСТОРИЯ",
      storyTitle:
        "Любовь и забота передаются из поколения в поколение…",
      storyLead:
        "Некоторым вещам не учат. Их просто проживают.",
      storyText:
        "Уважение к земле, забота о каждом плоде и терпение, которое начинается заново с каждым сезоном. Для ALMORA яблоко — не просто фрукт. Это связь между садом, людьми и временем.",
      storyButton: "Открыть наш сад",

      orchardNumber: "02 — НАШ САД",
      orchardTitle: "Всё начинается с земли.",
      orchardCard1Title: "Земля",
      orchardCard1Text:
        "Почва Губы задаёт характер каждому сезону.",
      orchardCard2Title: "Руки",
      orchardCard2Text:
        "Каждое яблоко собирают в момент полной зрелости.",
      orchardCard3Title: "Забота",
      orchardCard3Text:
        "Сбор урожая — не финал, а продолжение качества.",

      peopleNumber: "03 — ЛЮДИ",
      peopleTitle: "За каждым сезоном стоят люди.",
      peopleIntro:
        "Руки, которые касаются каждого плода. Время, отданное каждому дереву. Забота, повторяющаяся каждый день.",
      peopleCaption: "Команда ALMORA • Губа",
      counter1: "внимательный отбор",
      counter2: "поколения заботы",
      counter3: "дней внимания",

      varietiesNumber: "04 — НАШИ СОРТА",
      varietiesTitle: "У каждого цвета свой характер.",
      tasteSweet: "Сладкое",
      tasteJuicy: "Сочное",
      tasteCrisp: "Хрустящее",
      tasteFresh: "Свежее",
      tasteTart: "С кислинкой",
      tasteDelicate: "Нежное",
      tasteAromatic: "Ароматное",

      premiumNumber: "05 — ALMORA SELECT",
      premiumSmall: "для особенных моментов",
      premiumTitle: "Каждое яблоко — как подарок.",
      premiumText:
        "Почувствуйте простоту природы в премиальном исполнении.",
      premiumButton: "Связаться с нами",

      quote:
        "Каждое яблоко — это история. Каждый укус — воспоминание.",

      childhoodNumber: "06 — ВКУС ДЕТСТВА",
      childhoodTitle: "Некоторые вкусы остаются навсегда.",
      childhoodText:
        "Один укус. Один летний день. Одно воспоминание.",

      contactNumber: "07 — КОНТАКТЫ",
      contactTitle: "Из нашего сада — к вам.",
      contactIntro: "Свяжитесь с ALMORA.",

      contactAddressLabel: "Адрес",
      contactAddress: "Ашагы Атудж, Губа, Азербайджан",
      contactPhoneLabel: "Телефон",
      contactHoursLabel: "Связь",
      contactHours: "Свяжитесь с нами заранее",
      whatsappButton: "Написать в WhatsApp",

      formName: "Имя",
      formNamePlaceholder: "Введите ваше имя",
      formPhone: "Телефон",
      formPhonePlaceholder: "+994",
      formMessage: "Сообщение",
      formMessagePlaceholder: "Напишите сообщение",
      formSubmit: "Отправить сообщение",

      directions: "Построить маршрут",
      footerTagline: "Из нашего сада — к вам",
      copyright:
        "© 2026 ALMORA. Все права защищены."
    },

    en: {
      cursorView: "View",
      navHome: "Home",
      navStory: "Our Story",
      navOrchard: "Our Orchard",
      navVarieties: "Varieties",
      navContact: "Contact",
      headerContact: "Contact us",

      heroEyebrow: "QUBA • AZERBAIJAN",
      heroTitleMain: "From our orchard",
      heroTitleScript: "to you",
      heroSubtitle:
        "Nature at its purest. Grown with love, delivered with care.",
      heroProducts: "Discover our varieties",
      heroStory: "Our story",
      scroll: "Scroll",

      marquee:
        "FRESH • NATURAL • WITH LOVE • FROM GENERATION TO GENERATION • PREMIUM QUALITY •",

      storyNumber: "01 — OUR STORY",
      storyTitle:
        "Love and care are passed from generation to generation…",
      storyLead:
        "Some things are not taught. They are lived.",
      storyText:
        "Respect for the land, care for every fruit and patience renewed with every season. For ALMORA, an apple is more than fruit — it is a connection between the orchard, people and time.",
      storyButton: "Discover our orchard",

      orchardNumber: "02 — OUR ORCHARD",
      orchardTitle: "Everything begins with the soil.",
      orchardCard1Title: "Soil",
      orchardCard1Text:
        "The soil of Quba gives every season its first signature.",
      orchardCard2Title: "Hands",
      orchardCard2Text:
        "Every apple is picked carefully at the right moment.",
      orchardCard3Title: "Care",
      orchardCard3Text:
        "Harvest is not the end. It is the continuation of quality.",

      peopleNumber: "03 — THE PEOPLE",
      peopleTitle: "Behind every season are people.",
      peopleIntro:
        "Hands that touch every fruit. Time given to every tree. Care repeated every day.",
      peopleCaption: "ALMORA team • Quba",
      counter1: "careful selection",
      counter2: "generations of care",
      counter3: "days of attention",

      varietiesNumber: "04 — OUR VARIETIES",
      varietiesTitle: "Every colour has its own character.",
      tasteSweet: "Sweet",
      tasteJuicy: "Juicy",
      tasteCrisp: "Crisp",
      tasteFresh: "Fresh",
      tasteTart: "Tart",
      tasteDelicate: "Delicate",
      tasteAromatic: "Aromatic",

      premiumNumber: "05 — ALMORA SELECT",
      premiumSmall: "for special moments",
      premiumTitle: "Every apple is a gift.",
      premiumText:
        "Experience the simplicity of nature in a premium presentation.",
      premiumButton: "Contact us",

      quote:
        "Every apple is a story. Every bite is a memory.",

      childhoodNumber: "06 — TASTE OF CHILDHOOD",
      childhoodTitle: "Some flavours are never forgotten.",
      childhoodText:
        "One bite. One summer day. One memory.",

      contactNumber: "07 — CONTACT",
      contactTitle: "From our orchard to you.",
      contactIntro: "Get in touch with ALMORA.",

      contactAddressLabel: "Address",
      contactAddress: "Ashagi Atuj, Quba, Azerbaijan",
      contactPhoneLabel: "Phone",
      contactHoursLabel: "Contact",
      contactHours: "Please contact us in advance",
      whatsappButton: "Message on WhatsApp",

      formName: "Name",
      formNamePlaceholder: "Your name",
      formPhone: "Phone",
      formPhonePlaceholder: "+994",
      formMessage: "Message",
      formMessagePlaceholder: "Write your message",
      formSubmit: "Send message",

      directions: "Get directions",
      footerTagline: "From our orchard to you",
      copyright:
        "© 2026 ALMORA. All rights reserved."
    }
  };



  /* =========================================
     I18N
  ========================================= */

  const languageButtons =
    document.querySelectorAll(".language-button");

  const setLanguage = (language, animate = true) => {

    if (!translations[language]) return;

    const apply = () => {

      document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

          const key =
            element.dataset.i18n;

          if (translations[language][key] !== undefined) {
            element.textContent =
              translations[language][key];
          }

        });


      document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

          const key =
            element.dataset.i18nPlaceholder;

          if (translations[language][key] !== undefined) {
            element.placeholder =
              translations[language][key];
          }

        });


      languageButtons.forEach((button) => {

        button.classList.toggle(
          "active",
          button.dataset.language === language
        );

      });


      document.documentElement.lang = language;

      localStorage.setItem(
        "almora-language",
        language
      );


      const meta =
        document.getElementById("metaDescription");

      const og =
        document.getElementById("ogDescription");


      const descriptionMap = {
        az:
          "ALMORA — Qubadan seçilmiş premium alma dadı. Təbiətin ən təmiz dadı, sevgi ilə yetişdirilir və qayğı ilə sizə çatdırılır.",

        ru:
          "ALMORA — премиальные яблоки из Губы. Чистый вкус природы, выращенный с любовью и доставленный с заботой.",

        en:
          "ALMORA — premium apples from Quba. Pure natural flavour, grown with love and delivered with care."
      };


      if (meta) {
        meta.setAttribute(
          "content",
          descriptionMap[language]
        );
      }


      if (og) {
        og.setAttribute(
          "content",
          descriptionMap[language]
        );
      }

    };


    if (!animate) {

      apply();

    } else {

      gsap.to("main, footer", {
        opacity: 0.3,
        duration: 0.18,

        onComplete: () => {

          apply();

          gsap.to("main, footer", {
            opacity: 1,
            duration: 0.25
          });

        }
      });

    }

  };


  const savedLanguage =
    localStorage.getItem("almora-language") || "az";

  setLanguage(savedLanguage, false);


  languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

      setLanguage(
        button.dataset.language
      );

    });

  });



  /* =========================================
     PRELOADER
  ========================================= */

  const preloader =
    document.getElementById("preloader");

  const progress =
    document.getElementById("preloaderProgress");


  const loaderTimeline =
    gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });


  loaderTimeline
    .to(progress, {
      width: "100%",
      duration: 1.25
    })

    .to(
      ".loader-logo",
      {
        scale: 1.08,
        duration: 0.35
      },
      "-=.2"
    )

    .to(
      preloader,
      {
        clipPath:
          "inset(0 0 100% 0)",
        duration: 1.05,
        ease: "power4.inOut"
      }
    )

    .set(
      preloader,
      {
        display: "none"
      }
    )

    .from(
      ".hero-eyebrow",
      {
        y: 30,
        opacity: 0,
        duration: 0.6
      },
      "-=.35"
    )

    .from(
      ".hero-title-main",
      {
        y: 80,
        opacity: 0,
        duration: 0.9
      },
      "-=.35"
    )

    .from(
      ".hero-title-script",
      {
        y: 50,
        opacity: 0,
        duration: 0.7
      },
      "-=.55"
    )

    .from(
      ".hero-subtitle, .hero-buttons",
      {
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6
      },
      "-=.4"
    );



  /* =========================================
     LENIS SMOOTH SCROLL
  ========================================= */

  let lenis = null;

  if (
    typeof Lenis !== "undefined" &&
    !window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    lenis =
      new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.9
      });


    lenis.on(
      "scroll",
      ScrollTrigger.update
    );


    gsap.ticker.add(
      (time) => {
        lenis.raf(time * 1000);
      }
    );


    gsap.ticker.lagSmoothing(0);

  }



  /* =========================================
     HEADER
  ========================================= */

  const header =
    document.getElementById("siteHeader");


  const updateHeader = () => {

    header.classList.toggle(
      "scrolled",
      window.scrollY > 70
    );

  };


  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );



  /* =========================================
     MOBILE MENU
  ========================================= */

  const burgerButton =
    document.getElementById("burgerButton");

  const mobileMenu =
    document.getElementById("mobileMenu");


  burgerButton.addEventListener(
    "click",
    () => {

      const active =
        mobileMenu.classList.toggle("active");

      document.body.classList.toggle(
        "menu-open",
        active
      );


      if (active && lenis) {
        lenis.stop();
      } else if (lenis) {
        lenis.start();
      }

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove("active");

          document.body.classList.remove(
            "menu-open"
          );

          if (lenis) {
            lenis.start();
          }

        }
      );

    });



  /* =========================================
     MARQUEE
  ========================================= */

  gsap.to(
    ".marquee-track",
    {
      xPercent: -50,
      duration: 24,
      repeat: -1,
      ease: "none"
    }
  );



  /* =========================================
     TEXT / IMAGE REVEALS
  ========================================= */

  gsap.utils
    .toArray(
      ".section-number, .story-lead, .story-text, .people-heading > p, .premium-description"
    )
    .forEach((element) => {

      gsap.from(
        element,
        {
          scrollTrigger: {
            trigger: element,
            start: "top 88%"
          },

          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out"
        }
      );

    });


  gsap.utils
    .toArray(".image-reveal")
    .forEach((element) => {

      gsap.from(
        element,
        {
          scrollTrigger: {
            trigger: element,
            start: "top 85%"
          },

          clipPath:
            "inset(0 0 100% 0)",

          duration: 1.2,
          ease: "power4.inOut"
        }
      );

    });



  /* =========================================
     STORY PARALLAX
  ========================================= */

  gsap.to(
    ".story-visual img",
    {
      yPercent: 8,
      ease: "none",

      scrollTrigger: {
        trigger: ".story-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );



  /* =========================================
     HORIZONTAL ORCHARD
  ========================================= */

  const orchardSection =
    document.querySelector(
      ".orchard-section"
    );

  const orchardTrack =
    document.getElementById(
      "orchardTrack"
    );


  if (
    orchardSection &&
    orchardTrack
  ) {

    const getDistance = () =>
      Math.max(
        0,
        orchardTrack.scrollWidth -
        window.innerWidth
      );


    gsap.to(
      orchardTrack,
      {
        x: () =>
          -getDistance(),

        ease: "none",

        scrollTrigger: {
          trigger: orchardSection,
          start: "top top",
          end: () =>
            `+=${getDistance() + window.innerHeight}`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      }
    );

  }



  /* =========================================
     PEOPLE IMAGE PARALLAX
  ========================================= */

  gsap.to(
    ".people-image img",
    {
      scale: 1.08,
      ease: "none",

      scrollTrigger: {
        trigger: ".people-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );



  /* =========================================
     COUNTERS
  ========================================= */

  document
    .querySelectorAll(".counter-number")
    .forEach((counter) => {

      const target =
        Number(counter.dataset.count);

      const state = {
        value: 0
      };


      gsap.to(
        state,
        {
          value: target,
          duration: 1.8,
          ease: "power2.out",

          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            once: true
          },

          onUpdate: () => {
            counter.textContent =
              Math.floor(state.value);
          }
        }
      );

    });



  /* =========================================
     VARIETY TILT
  ========================================= */

  document
    .querySelectorAll(".tilt-card")
    .forEach((card) => {

      card.addEventListener(
        "mousemove",
        (event) => {

          if (
            window.innerWidth < 900
          ) return;


          const rect =
            card.getBoundingClientRect();


          const x =
            event.clientX -
            rect.left;


          const y =
            event.clientY -
            rect.top;


          const rotateY =
            ((x / rect.width) - 0.5) * 7;


          const rotateX =
            ((y / rect.height) - 0.5) * -7;


          gsap.to(
            card,
            {
              rotateX,
              rotateY,
              scale: 1.015,
              duration: 0.3,
              transformPerspective: 900,
              ease: "power2.out"
            }
          );

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          gsap.to(
            card,
            {
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.45,
              ease: "power3.out"
            }
          );

        }
      );

    });



  /* =========================================
     PREMIUM BACKGROUND
  ========================================= */

  gsap.to(
    ".premium-background img",
    {
      scale: 1.08,
      ease: "none",

      scrollTrigger: {
        trigger: ".premium-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );



  /* =========================================
     QUOTE WORD HIGHLIGHT
  ========================================= */

  const quote =
    document.querySelector(
      ".scroll-quote"
    );


  if (quote) {

    const words =
      quote.textContent
        .trim()
        .split(/\s+/);


    quote.innerHTML =
      words
        .map(
          (word) =>
            `<span class="quote-word">${word}</span>`
        )
        .join(" ");


    const quoteWords =
      quote.querySelectorAll(
        ".quote-word"
      );


    gsap.to(
      quoteWords,
      {
        color: "#6E1423",
        stagger: 0.08,

        scrollTrigger: {
          trigger: quote,
          start: "top 70%",
          end: "bottom 42%",
          scrub: true
        }
      }
    );

  }



  /* =========================================
     CHILDHOOD PARALLAX
  ========================================= */

  gsap.to(
    ".childhood-image img",
    {
      scale: 1.1,
      ease: "none",

      scrollTrigger: {
        trigger: ".childhood-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );



  /* =========================================
     CUSTOM CURSOR
  ========================================= */

  const dot =
    document.querySelector(".cursor-dot");

  const ring =
    document.querySelector(".cursor-ring");


  if (
    dot &&
    ring &&
    window.matchMedia(
      "(pointer:fine)"
    ).matches
  ) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    window.addEventListener(
      "mousemove",
      (event) => {

        mouseX =
          event.clientX;

        mouseY =
          event.clientY;


        gsap.set(
          dot,
          {
            x: mouseX,
            y: mouseY
          }
        );

      }
    );


    gsap.ticker.add(
      () => {

        ringX +=
          (mouseX - ringX) * 0.13;

        ringY +=
          (mouseY - ringY) * 0.13;


        gsap.set(
          ring,
          {
            x: ringX,
            y: ringY
          }
        );

      }
    );


    document
      .querySelectorAll(
        ".image-hover"
      )
      .forEach((element) => {

        element.addEventListener(
          "mouseenter",
          () => {
            ring.classList.add(
              "view-mode"
            );
          }
        );


        element.addEventListener(
          "mouseleave",
          () => {
            ring.classList.remove(
              "view-mode"
            );
          }
        );

      });

  }



  /* =========================================
     MAGNETIC BUTTONS
  ========================================= */

  document
    .querySelectorAll(".magnetic")
    .forEach((element) => {

      element.addEventListener(
        "mousemove",
        (event) => {

          if (
            window.innerWidth < 900
          ) return;


          const rect =
            element.getBoundingClientRect();


          const x =
            event.clientX -
            rect.left -
            rect.width / 2;


          const y =
            event.clientY -
            rect.top -
            rect.height / 2;


          gsap.to(
            element,
            {
              x: x * 0.14,
              y: y * 0.14,
              duration: 0.3,
              ease: "power2.out"
            }
          );

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          gsap.to(
            element,
            {
              x: 0,
              y: 0,
              duration: 0.4,
              ease: "elastic.out(1, .45)"
            }
          );

        }
      );

    });



  /* =========================================
     HERO PARTICLES
  ========================================= */

  const particlesContainer =
    document.getElementById(
      "heroParticles"
    );


  if (particlesContainer) {

    const particleCount =
      window.innerWidth < 700
        ? 5
        : 10;


    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      const leaf =
        document.createElement("span");


      leaf.style.position =
        "absolute";

      leaf.style.width =
        `${8 + Math.random() * 11}px`;

      leaf.style.height =
        `${4 + Math.random() * 6}px`;

      leaf.style.borderRadius =
        "100% 0 100% 0";

      leaf.style.background =
        Math.random() > 0.45
          ? "rgba(127,168,58,.5)"
          : "rgba(201,162,75,.32)";

      leaf.style.left =
        `${Math.random() * 100}%`;

      leaf.style.top =
        `${-10 - Math.random() * 30}%`;


      particlesContainer.appendChild(
        leaf
      );


      gsap.to(
        leaf,
        {
          y:
            window.innerHeight * 1.4,

          x:
            (Math.random() - 0.5) * 240,

          rotation:
            Math.random() * 600,

          duration:
            9 + Math.random() * 10,

          delay:
            Math.random() * 8,

          repeat: -1,

          ease: "none"
        }
      );

    }

  }



  /* =========================================
     THREE.JS APPLE
  ========================================= */

  const canvas =
    document.getElementById(
      "appleCanvas"
    );


  if (
    canvas &&
    typeof THREE !== "undefined" &&
    window.innerWidth > 860 &&
    !window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    const scene =
      new THREE.Scene();


    const camera =
      new THREE.PerspectiveCamera(
        35,
        window.innerWidth /
        window.innerHeight,
        0.1,
        100
      );


    camera.position.z = 7;



    const renderer =
      new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
      });


    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        2
      )
    );


    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );


    renderer.outputEncoding =
      THREE.sRGBEncoding;



    /* APPLE SHAPE */

    const appleGroup =
      new THREE.Group();


    scene.add(
      appleGroup
    );


    const appleGeometry =
      new THREE.SphereGeometry(
        1.18,
        64,
        64
      );


    const positions =
      appleGeometry.attributes.position;


    const vertex =
      new THREE.Vector3();


    for (
      let i = 0;
      i < positions.count;
      i++
    ) {

      vertex.fromBufferAttribute(
        positions,
        i
      );


      const y =
        vertex.y;


      const middleBulge =
        1 +
        0.13 *
        Math.exp(
          -Math.pow(y * 1.5, 2)
        );


      const topIndent =
        1 -
        0.12 *
        Math.exp(
          -Math.pow(
            (y - 0.9) * 4,
            2
          )
        );


      const bottomIndent =
        1 -
        0.07 *
        Math.exp(
          -Math.pow(
            (y + 1) * 5,
            2
          )
        );


      vertex.x *=
        middleBulge *
        topIndent *
        bottomIndent;


      vertex.z *=
        middleBulge *
        topIndent *
        bottomIndent;


      vertex.y *= 1.05;


      positions.setXYZ(
        i,
        vertex.x,
        vertex.y,
        vertex.z
      );

    }


    appleGeometry
      .computeVertexNormals();



    const appleMaterial =
      new THREE.MeshPhysicalMaterial({
        color: 0xb51c2d,
        roughness: 0.22,
        metalness: 0.05,
        clearcoat: 0.75,
        clearcoatRoughness: 0.16
      });


    const appleMesh =
      new THREE.Mesh(
        appleGeometry,
        appleMaterial
      );


    appleGroup.add(
      appleMesh
    );



    /* STEM */

    const stemGeometry =
      new THREE.CylinderGeometry(
        0.07,
        0.1,
        0.7,
        20
      );


    const stemMaterial =
      new THREE.MeshStandardMaterial({
        color: 0x3b2416,
        roughness: 0.72
      });


    const stem =
      new THREE.Mesh(
        stemGeometry,
        stemMaterial
      );


    stem.position.y = 1.45;
    stem.rotation.z = -0.12;


    appleGroup.add(
      stem
    );



    /* LEAF */

    const leafShape =
      new THREE.Shape();


    leafShape.moveTo(
      0,
      0
    );

    leafShape
      .bezierCurveTo(
        0.6,
        0.2,
        0.85,
        0.72,
        0.2,
        0.95
      );

    leafShape
      .bezierCurveTo(
        -0.25,
        0.7,
        -0.35,
        0.25,
        0,
        0
      );


    const leafGeometry =
      new THREE.ShapeGeometry(
        leafShape
      );


    const leafMaterial =
      new THREE.MeshPhysicalMaterial({
        color: 0x486f28,
        roughness: 0.55,
        side: THREE.DoubleSide
      });


    const leaf =
      new THREE.Mesh(
        leafGeometry,
        leafMaterial
      );


    leaf.scale.set(
      0.7,
      0.7,
      0.7
    );


    leaf.position.set(
      0.12,
      1.5,
      0
    );


    leaf.rotation.set(
      0.35,
      0.4,
      -0.85
    );


    appleGroup.add(
      leaf
    );



    /* LIGHTS */

    const keyLight =
      new THREE.DirectionalLight(
        0xffd7aa,
        2.4
      );


    keyLight.position.set(
      4,
      5,
      4
    );


    scene.add(
      keyLight
    );


    const fillLight =
      new THREE.DirectionalLight(
        0x6c8450,
        1
      );


    fillLight.position.set(
      -4,
      1,
      2
    );


    scene.add(
      fillLight
    );


    const ambient =
      new THREE.AmbientLight(
        0xffffff,
        0.75
      );


    scene.add(
      ambient
    );



    appleGroup.position.set(
      2.6,
      0.2,
      0
    );


    appleGroup.rotation.x =
      0.12;



    /* MOUSE PARALLAX */

    let targetX = 0;
    let targetY = 0;


    window.addEventListener(
      "mousemove",
      (event) => {

        targetX =
          (event.clientX /
          window.innerWidth -
          0.5) * 0.28;


        targetY =
          (event.clientY /
          window.innerHeight -
          0.5) * 0.2;

      }
    );



    /* SCROLL ANIMATION */

    gsap.to(
      appleGroup.position,
      {
        x: 1.1,
        y: -0.4,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );


    gsap.to(
      appleGroup.rotation,
      {
        y: Math.PI * 1.3,
        x: 0.45,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );



    const animate = () => {

      requestAnimationFrame(
        animate
      );


      appleGroup.rotation.y +=
        0.0018;


      appleGroup.rotation.x +=
        (
          targetY -
          appleGroup.rotation.x
        ) * 0.025;


      appleGroup.rotation.z +=
        (
          targetX -
          appleGroup.rotation.z
        ) * 0.02;


      renderer.render(
        scene,
        camera
      );

    };


    animate();



    window.addEventListener(
      "resize",
      () => {

        camera.aspect =
          window.innerWidth /
          window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
          window.innerWidth,
          window.innerHeight
        );

      }
    );

  }



  /* =========================================
     CONTACT FORM
  ========================================= */

  const form =
    document.getElementById(
      "contactForm"
    );


  if (form) {

    form.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const data =
          new FormData(form);


        const name =
          data.get("name") || "";


        const phone =
          data.get("phone") || "";


        const message =
          data.get("message") || "";


        const text =
          `Salam, ALMORA!\n\nAd: ${name}\nTelefon: ${phone}\nMesaj: ${message}`;


        const whatsappURL =
          `https://wa.me/994557525353?text=${encodeURIComponent(text)}`;


        window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }



  /* =========================================
     FLOATING WHATSAPP PULSE
  ========================================= */

  gsap.to(
    ".floating-whatsapp::after",
    {}
  );


  gsap.to(
    ".floating-whatsapp",
    {
      scale: 1.04,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }
  );



  /* =========================================
     SCROLL REFRESH
  ========================================= */

  window.addEventListener(
    "load",
    () => {

      ScrollTrigger.refresh();

    }
  );

});