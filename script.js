document.addEventListener("DOMContentLoaded", () => {

  if (typeof gsap === "undefined") {
    console.error("ALMORA: GSAP could not load.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);


  /* ======================================
     GLOBAL
  ====================================== */

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const isMobile =
    window.matchMedia(
      "(max-width: 760px)"
    ).matches;

  let currentLanguage =
    localStorage.getItem(
      "almora-language"
    ) || "az";

  let quoteTween = null;


  /* ======================================
     TRANSLATIONS
  ====================================== */

  const translations = {

    az: {

      cursorView: "Bax",

      navHome: "Ana səhifə",
      navStory: "Hekayəmiz",
      navOrchard: "Bağımız",
      navPeople: "İnsanlar",
      navVarieties: "Sortlarımız",
      navPremium: "Premium",
      navContact: "Əlaqə",

      headerContact: "Bizimlə əlaqə",

      heroEyebrow: "QUBA • AZƏRBAYCAN",
      heroTitleMain: "Bağımızdan",
      heroTitleScript: "sizə",

      heroSubtitle:
        "Təbiətin ən təmiz dadı. Sevgi ilə yetişdirilir, qayğı ilə sizə çatdırılır.",

      heroProducts:
        "Məhsullarımızı kəşf et",

      heroStory:
        "Hekayəmiz",

      scroll:
        "Aşağı",

      marquee:
        "TƏZƏ • TƏBİİ • SEVGİ İLƏ • NƏSİLDƏN NƏSLƏ • PREMIUM KEYFİYYƏT •",

      storyNumber:
        "01 — HEKAYƏMİZ",

      storyTitle:
        "Sevgi qayğı ilə ötürülür, nəsildən nəslə…",

      storyLine1:
        "Bəzi şeylər öyrədilmir. Onlar yaşanır.",

      storyLine2:
        "Torpağa hörmət hər mövsüm yenidən başlayır.",

      storyLine3:
        "Hər meyvə səbir və qayğı ilə seçilir.",

      storyLine4:
        "Hər alma özündə bir xatirə daşıyır.",

      orchardNumber:
        "02 — BAĞIMIZ",

      orchardTitle:
        "Hər şey torpaqdan başlayır.",

      orchardCard1Title:
        "Torpaq",

      orchardCard1Text:
        "Qubanın torpağı hər mövsümün ilk imzasıdır.",

      orchardCard2Title:
        "Əllər",

      orchardCard2Text:
        "Hər alma yetişdiyi anda diqqətlə seçilir.",

      orchardCard3Title:
        "Qayğı",

      orchardCard3Text:
        "Yığım son deyil. Keyfiyyətin davamıdır.",

      peopleNumber:
        "03 — ƏLLƏRİN ZƏHMƏTİ",

      peopleTitle:
        "Bir mövsümün arxasında insanlar var.",

      peopleIntro:
        "Hər meyvəyə toxunan əllər, hər ağaca ayrılan vaxt, hər gün təkrarlanan qayğı.",

      peopleCaption:
        "ALMORA komandası • Quba",

      counter1:
        "əl ilə seçim",

      counter2:
        "nəsil qayğı",

      counter3:
        "gün diqqət",

      varietiesNumber:
        "04 — SORTLARIMIZ",

      varietiesTitle:
        "Hər rəngin öz xarakteri var.",

      tasteSweet: "Şirin",
      tasteJuicy: "Şirəli",
      tasteCrisp: "Xırtıldayan",
      tasteFresh: "Təravətli",
      tasteTart: "Turşməzə",
      tasteDelicate: "Zərif",
      tasteAromatic: "Aromatik",

      sweetness: "Şirinlik",
      acidity: "Turşuluq",
      crunch: "Xırtıltı",

      premiumNumber:
        "05 — PREMIUM HƏDİYYƏ",

      premiumSmall:
        "xüsusi anlar üçün",

      premiumTitle:
        "Hər alma — bir hədiyyə.",

      premiumText:
        "Təbiətin sadəliyi premium təqdimatda.",

      premiumButton:
        "Bizimlə əlaqə",

      quote:
        "Hər alma bir hekayədir. Hər dişləmə — bir xatirə.",

      childhoodNumber:
        "06 — UŞAQLIQ DADI",

      childhoodTitle:
        "Bəzi dadlar heç vaxt unudulmur.",

      childhoodText:
        "Bir dişləmə. Bir yay günü. Bir xatirə.",

      contactNumber:
        "07 — ƏLAQƏ",

      contactTitle:
        "Bağımızdan sizə.",

      contactIntro:
        "ALMORA ilə əlaqə saxlayın.",

      addressLabel:
        "Ünvan",

      address:
        "Aşağı Atuc, Quba, Azərbaycan",

      phoneLabel:
        "Telefon",

      hoursLabel:
        "İş saatları",

      hours:
        "Hər gün 09:00–18:00",

      whatsapp:
        "WhatsApp ilə yaz",

      formName:
        "Adınız",

      formNamePlaceholder:
        "Adınızı yazın",

      formPhone:
        "Telefon",

      formPhonePlaceholder:
        "+994",

      formMessage:
        "Mesaj",

      formMessagePlaceholder:
        "Mesajınızı yazın",

      formSubmit:
        "Mesaj göndər",

      directions:
        "Yol tarifi",

      footerTagline:
        "Bağımızdan sizə",

      copyright:
        "© 2026 ALMORA. Bütün hüquqlar qorunur.",

      altStory:
        "ALMORA bağında ailə və nəsillərin hekayəsi",

      altOrchard1:
        "ALMORA alma bağı",

      altOrchard2:
        "ALMORA işçiləri alma yığarkən",

      altOrchard3:
        "ALMORA alma yeşiyi ilə bağ işçisi",

      altPeople:
        "ALMORA komandası Quba bağında",

      altFuji:
        "ALMORA Fuji alması",

      altGranny:
        "ALMORA Granny Smith alması",

      altGolden:
        "ALMORA Golden Delicious alması",

      altPremium:
        "ALMORA premium almaları",

      altChild:
        "Bağda alma yeyən uşaq",

      altFarm:
        "ALMORA bağımızdan sizə"

    },


    ru: {

      cursorView: "Смотреть",

      navHome: "Главная",
      navStory: "Наша история",
      navOrchard: "Наш сад",
      navPeople: "Люди",
      navVarieties: "Сорта",
      navPremium: "Premium",
      navContact: "Контакты",

      headerContact:
        "Связаться с нами",

      heroEyebrow:
        "ГУБА • АЗЕРБАЙДЖАН",

      heroTitleMain:
        "Из нашего сада",

      heroTitleScript:
        "к вам",

      heroSubtitle:
        "Самый чистый вкус природы. Выращено с любовью, доставлено с заботой.",

      heroProducts:
        "Открыть наши сорта",

      heroStory:
        "Наша история",

      scroll:
        "Вниз",

      marquee:
        "СВЕЖЕЕ • НАТУРАЛЬНОЕ • С ЛЮБОВЬЮ • ИЗ ПОКОЛЕНИЯ В ПОКОЛЕНИЕ • ПРЕМИУМ КАЧЕСТВО •",

      storyNumber:
        "01 — НАША ИСТОРИЯ",

      storyTitle:
        "Любовь и забота передаются из поколения в поколение…",

      storyLine1:
        "Некоторым вещам не учат. Их просто проживают.",

      storyLine2:
        "Уважение к земле начинается заново с каждым сезоном.",

      storyLine3:
        "Каждый плод выбирают с терпением и заботой.",

      storyLine4:
        "Каждое яблоко хранит в себе воспоминание.",

      orchardNumber:
        "02 — НАШ САД",

      orchardTitle:
        "Всё начинается с земли.",

      orchardCard1Title:
        "Земля",

      orchardCard1Text:
        "Земля Губы задаёт характер каждому сезону.",

      orchardCard2Title:
        "Руки",

      orchardCard2Text:
        "Каждое яблоко собирают в момент его зрелости.",

      orchardCard3Title:
        "Забота",

      orchardCard3Text:
        "Сбор урожая — не финал. Это продолжение качества.",

      peopleNumber:
        "03 — ЛЮДИ",

      peopleTitle:
        "За каждым сезоном стоят люди.",

      peopleIntro:
        "Руки, которые касаются каждого плода. Время, отданное каждому дереву. Забота, повторяющаяся каждый день.",

      peopleCaption:
        "Команда ALMORA • Губа",

      counter1:
        "ручной отбор",

      counter2:
        "поколения заботы",

      counter3:
        "дней внимания",

      varietiesNumber:
        "04 — НАШИ СОРТА",

      varietiesTitle:
        "У каждого цвета свой характер.",

      tasteSweet: "Сладкое",
      tasteJuicy: "Сочное",
      tasteCrisp: "Хрустящее",
      tasteFresh: "Свежее",
      tasteTart: "С кислинкой",
      tasteDelicate: "Нежное",
      tasteAromatic: "Ароматное",

      sweetness: "Сладость",
      acidity: "Кислотность",
      crunch: "Хруст",

      premiumNumber:
        "05 — ПРЕМИАЛЬНЫЙ ПОДАРОК",

      premiumSmall:
        "для особенных моментов",

      premiumTitle:
        "Каждое яблоко — как подарок.",

      premiumText:
        "Естественная простота в премиальном исполнении.",

      premiumButton:
        "Связаться с нами",

      quote:
        "Каждое яблоко — это история. Каждый укус — воспоминание.",

      childhoodNumber:
        "06 — ВКУС ДЕТСТВА",

      childhoodTitle:
        "Некоторые вкусы остаются навсегда.",

      childhoodText:
        "Один укус. Один летний день. Одно воспоминание.",

      contactNumber:
        "07 — КОНТАКТЫ",

      contactTitle:
        "Из нашего сада — к вам.",

      contactIntro:
        "Свяжитесь с ALMORA.",

      addressLabel:
        "Адрес",

      address:
        "Ашагы Атудж, Губа, Азербайджан",

      phoneLabel:
        "Телефон",

      hoursLabel:
        "Часы работы",

      hours:
        "Ежедневно 09:00–18:00",

      whatsapp:
        "Написать в WhatsApp",

      formName:
        "Имя",

      formNamePlaceholder:
        "Введите ваше имя",

      formPhone:
        "Телефон",

      formPhonePlaceholder:
        "+994",

      formMessage:
        "Сообщение",

      formMessagePlaceholder:
        "Напишите сообщение",

      formSubmit:
        "Отправить сообщение",

      directions:
        "Построить маршрут",

      footerTagline:
        "Из нашего сада — к вам",

      copyright:
        "© 2026 ALMORA. Все права защищены.",

      altStory:
        "Семейная история сада ALMORA",

      altOrchard1:
        "Яблоневый сад ALMORA",

      altOrchard2:
        "Работники ALMORA собирают яблоки",

      altOrchard3:
        "Работница ALMORA с ящиком яблок",

      altPeople:
        "Команда ALMORA в саду",

      altFuji:
        "Яблоко ALMORA Fuji",

      altGranny:
        "Яблоко ALMORA Granny Smith",

      altGolden:
        "Яблоко ALMORA Golden Delicious",

      altPremium:
        "Премиальные яблоки ALMORA",

      altChild:
        "Ребёнок ест яблоко в саду",

      altFarm:
        "ALMORA из нашего сада к вам"

    },


    en: {

      cursorView: "View",

      navHome: "Home",
      navStory: "Our Story",
      navOrchard: "Our Orchard",
      navPeople: "People",
      navVarieties: "Varieties",
      navPremium: "Premium",
      navContact: "Contact",

      headerContact:
        "Contact us",

      heroEyebrow:
        "QUBA • AZERBAIJAN",

      heroTitleMain:
        "From our orchard",

      heroTitleScript:
        "to you",

      heroSubtitle:
        "Nature at its purest. Grown with love, delivered with care.",

      heroProducts:
        "Discover our varieties",

      heroStory:
        "Our story",

      scroll:
        "Scroll",

      marquee:
        "FRESH • NATURAL • WITH LOVE • FROM GENERATION TO GENERATION • PREMIUM QUALITY •",

      storyNumber:
        "01 — OUR STORY",

      storyTitle:
        "Love and care are passed from generation to generation…",

      storyLine1:
        "Some things are not taught. They are lived.",

      storyLine2:
        "Respect for the land begins again every season.",

      storyLine3:
        "Every fruit is selected with patience and care.",

      storyLine4:
        "Every apple carries a memory.",

      orchardNumber:
        "02 — OUR ORCHARD",

      orchardTitle:
        "Everything begins with the soil.",

      orchardCard1Title:
        "Soil",

      orchardCard1Text:
        "The soil of Quba gives every season its character.",

      orchardCard2Title:
        "Hands",

      orchardCard2Text:
        "Every apple is carefully picked at the right moment.",

      orchardCard3Title:
        "Care",

      orchardCard3Text:
        "Harvest is not the end. It is the continuation of quality.",

      peopleNumber:
        "03 — THE PEOPLE",

      peopleTitle:
        "Behind every season are people.",

      peopleIntro:
        "Hands touching every fruit. Time given to every tree. Care repeated every day.",

      peopleCaption:
        "ALMORA team • Quba",

      counter1:
        "hand selected",

      counter2:
        "generations of care",

      counter3:
        "days of attention",

      varietiesNumber:
        "04 — OUR VARIETIES",

      varietiesTitle:
        "Every colour has its own character.",

      tasteSweet: "Sweet",
      tasteJuicy: "Juicy",
      tasteCrisp: "Crisp",
      tasteFresh: "Fresh",
      tasteTart: "Tart",
      tasteDelicate: "Delicate",
      tasteAromatic: "Aromatic",

      sweetness: "Sweetness",
      acidity: "Acidity",
      crunch: "Crunch",

      premiumNumber:
        "05 — PREMIUM GIFT",

      premiumSmall:
        "for special moments",

      premiumTitle:
        "Every apple is a gift.",

      premiumText:
        "Natural simplicity in a premium presentation.",

      premiumButton:
        "Contact us",

      quote:
        "Every apple is a story. Every bite is a memory.",

      childhoodNumber:
        "06 — TASTE OF CHILDHOOD",

      childhoodTitle:
        "Some flavours are never forgotten.",

      childhoodText:
        "One bite. One summer day. One memory.",

      contactNumber:
        "07 — CONTACT",

      contactTitle:
        "From our orchard to you.",

      contactIntro:
        "Get in touch with ALMORA.",

      addressLabel:
        "Address",

      address:
        "Ashagi Atuj, Quba, Azerbaijan",

      phoneLabel:
        "Phone",

      hoursLabel:
        "Working hours",

      hours:
        "Daily 09:00–18:00",

      whatsapp:
        "Message on WhatsApp",

      formName:
        "Name",

      formNamePlaceholder:
        "Your name",

      formPhone:
        "Phone",

      formPhonePlaceholder:
        "+994",

      formMessage:
        "Message",

      formMessagePlaceholder:
        "Write your message",

      formSubmit:
        "Send message",

      directions:
        "Get directions",

      footerTagline:
        "From our orchard to you",

      copyright:
        "© 2026 ALMORA. All rights reserved.",

      altStory:
        "ALMORA family orchard story",

      altOrchard1:
        "ALMORA apple orchard",

      altOrchard2:
        "ALMORA workers picking apples",

      altOrchard3:
        "ALMORA worker holding a crate of apples",

      altPeople:
        "ALMORA team in the orchard",

      altFuji:
        "ALMORA Fuji apple",

      altGranny:
        "ALMORA Granny Smith apple",

      altGolden:
        "ALMORA Golden Delicious apple",

      altPremium:
        "Premium ALMORA apples",

      altChild:
        "Child enjoying an apple in the orchard",

      altFarm:
        "ALMORA from our orchard to you"

    }

  };


  /* ======================================
     FALLBACK IMAGES
  ====================================== */

  document
    .querySelectorAll(
      "img[data-fallback]"
    )
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          const fallback =
            image.dataset.fallback;

          if (
            fallback &&
            image.src !== fallback
          ) {
            image.src = fallback;
          }

        },
        {
          once: true
        }
      );

    });


  /* ======================================
     QUOTE
  ====================================== */

  function rebuildQuote() {

    const quote =
      document.querySelector(
        ".scroll-quote"
      );

    if (!quote) return;

    if (quoteTween) {
      quoteTween.kill();
      quoteTween = null;
    }

    const text =
      translations[
        currentLanguage
      ].quote;

    quote.innerHTML =
      text
        .split(/\s+/)
        .map(
          word =>
            `<span class="quote-word">${word}</span>`
        )
        .join(" ");

    quoteTween =
      gsap.to(
        quote.querySelectorAll(
          ".quote-word"
        ),
        {

          color: "#6E1423",

          stagger: .06,

          scrollTrigger: {

            trigger:
              quote,

            start:
              "top 72%",

            end:
              "bottom 42%",

            scrub:
              true

          }

        }
      );

  }


  /* ======================================
     LANGUAGE
  ====================================== */

  const languageButtons =
    document.querySelectorAll(
      ".language-button"
    );


  function applyLanguage(
    language
  ) {

    if (
      !translations[language]
    ) {
      language = "az";
    }

    currentLanguage =
      language;


    document
      .querySelectorAll(
        "[data-i18n]"
      )
      .forEach(element => {

        const key =
          element.dataset.i18n;

        if (
          translations[language][key] !==
          undefined
        ) {

          element.textContent =
            translations[language][key];

        }

      });


    document
      .querySelectorAll(
        "[data-i18n-placeholder]"
      )
      .forEach(element => {

        const key =
          element.dataset.i18nPlaceholder;

        if (
          translations[language][key] !==
          undefined
        ) {

          element.placeholder =
            translations[language][key];

        }

      });


    document
      .querySelectorAll(
        "[data-i18n-alt]"
      )
      .forEach(element => {

        const key =
          element.dataset.i18nAlt;

        if (
          translations[language][key] !==
          undefined
        ) {

          element.alt =
            translations[language][key];

        }

      });


    languageButtons.forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.language ===
          language
        );

      }
    );


    document.documentElement.lang =
      language;


    localStorage.setItem(
      "almora-language",
      language
    );


    const metaDescriptions = {

      az:
        "ALMORA — Qubadan premium almalar. Sevgi ilə yetişdirilir, qayğı ilə sizə çatdırılır.",

      ru:
        "ALMORA — премиальные яблоки из Губы. Выращено с любовью, доставлено с заботой.",

      en:
        "ALMORA — premium apples from Quba. Grown with love and delivered with care."

    };


    const meta =
      document.getElementById(
        "metaDescription"
      );

    const og =
      document.getElementById(
        "ogDescription"
      );


    if (meta) {

      meta.setAttribute(
        "content",
        metaDescriptions[language]
      );

    }


    if (og) {

      og.setAttribute(
        "content",
        metaDescriptions[language]
      );

    }


    rebuildQuote();

  }


  applyLanguage(
    currentLanguage
  );


  languageButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const language =
            button.dataset.language;

          gsap.to(
            "main, footer",
            {

              opacity: .30,

              duration: .14,

              onComplete() {

                applyLanguage(
                  language
                );


                gsap.to(
                  "main, footer",
                  {

                    opacity: 1,

                    duration: .22

                  }
                );

              }

            }
          );

        }
      );

    }
  );


  /* ======================================
     PRELOADER
  ====================================== */

  const preloader =
    document.getElementById(
      "preloader"
    );

  const liquid =
    document.getElementById(
      "preloaderLiquid"
    );

  const percentage =
    document.getElementById(
      "preloaderPercent"
    );

  let preloaderClosed =
    false;

  const loaderState = {
    value: 0
  };


  function updateLoader() {

    const number =
      Math.round(
        loaderState.value
      );

    if (percentage) {
      percentage.textContent =
        number;
    }

    if (liquid) {

      liquid.setAttribute(
        "y",
        String(
          110 -
          number * 1.1
        )
      );

    }

  }


  gsap.to(
    loaderState,
    {

      value: 92,

      duration: 1.6,

      ease: "power2.out",

      onUpdate:
        updateLoader

    }
  );


  function closePreloader() {

    if (
      preloaderClosed
    ) return;

    preloaderClosed =
      true;


    gsap.to(
      loaderState,
      {

        value: 100,

        duration: .22,

        onUpdate:
          updateLoader

      }
    );


    const intro =
      gsap.timeline();


    intro
      .to(
        ".preloader-content",
        {

          opacity: 0,

          y: -15,

          duration: .28

        }
      )

      .to(
        ".preloader-panel-left",
        {

          xPercent: -100,

          duration: .82,

          ease:
            "power4.inOut"

        }
      )

      .to(
        ".preloader-panel-right",
        {

          xPercent: 100,

          duration: .82,

          ease:
            "power4.inOut"

        },
        "<"
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

          opacity: 0,

          y: 20,

          duration: .4

        },
        "-=.38"
      )

      .from(
        ".hero-title-main",
        {

          opacity: 0,

          yPercent: 100,

          duration: .85,

          ease:
            "power4.out"

        },
        "-=.28"
      )

      .from(
        ".hero-title-script",
        {

          opacity: 0,

          x: -30,

          duration: .72,

          ease:
            "power3.out"

        },
        "-=.54"
      )

      .to(
        "#scriptDrawPath",
        {

          strokeDashoffset: 0,

          duration: 1,

          ease:
            "power2.inOut"

        },
        "-=.48"
      )

      .from(
        ".hero-subtitle, .hero-buttons",
        {

          opacity: 0,

          y: 20,

          stagger: .1,

          duration: .5

        },
        "-=.55"
      );

  }


  const heroImage =
    new Image();

  heroImage.onload =
    closePreloader;

  heroImage.onerror =
    closePreloader;

  heroImage.src =
    "assets/images/hero.jpg";


  setTimeout(
    closePreloader,
    2500
  );


  /* ======================================
     DEFER HERO VIDEO
  ====================================== */

  function loadHeroVideo() {

    const video =
      document.getElementById(
        "heroVideo"
      );

    if (!video) return;

    const source =
      video.querySelector(
        "source[data-src]"
      );

    if (!source) return;

    source.src =
      source.dataset.src;

    source.removeAttribute(
      "data-src"
    );

    video.load();

    const promise =
      video.play();

    if (promise) {
      promise.catch(
        () => {}
      );
    }

  }


  if (
    "requestIdleCallback" in window
  ) {

    requestIdleCallback(
      loadHeroVideo,
      {
        timeout: 1800
      }
    );

  } else {

    setTimeout(
      loadHeroVideo,
      900
    );

  }


  /* ======================================
     LENIS
  ====================================== */

  let lenis = null;

  let scrollVelocity = 0;


  if (
    typeof Lenis !== "undefined" &&
    !reduceMotion
  ) {

    lenis =
      new Lenis({

        duration: 1.0,

        smoothWheel: true,

        wheelMultiplier: .9

      });


    lenis.on(
      "scroll",
      event => {

        ScrollTrigger.update();

        scrollVelocity =
          event.velocity || 0;

      }
    );


    gsap.ticker.add(
      time => {

        lenis.raf(
          time * 1000
        );

      }
    );


    gsap.ticker.lagSmoothing(
      0
    );

  }


  /* ======================================
     VELOCITY IMAGE SKEW
  ====================================== */

  const velocityImages =
    document.querySelectorAll(
      ".velocity-image"
    );


  if (
    !reduceMotion
  ) {

    gsap.ticker.add(
      () => {

        const skew =
          Math.max(
            -1.2,
            Math.min(
              1.2,
              scrollVelocity * .08
            )
          );


        velocityImages.forEach(
          element => {

            gsap.to(
              element,
              {

                skewY:
                  skew,

                duration:
                  .22,

                overwrite:
                  true

              }
            );

          }
        );

      }
    );

  }


  /* ======================================
     HEADER
  ====================================== */

  const header =
    document.getElementById(
      "siteHeader"
    );

  let previousScroll =
    window.scrollY;


  function updateHeader() {

    const y =
      window.scrollY;


    header.classList.toggle(
      "scrolled",
      y > 60
    );


    if (
      y > previousScroll &&
      y > 250
    ) {

      header.classList.add(
        "header-hidden"
      );

    } else {

      header.classList.remove(
        "header-hidden"
      );

    }


    previousScroll =
      y;

  }


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  updateHeader();


  /* ======================================
     MOBILE MENU
  ====================================== */

  const burger =
    document.getElementById(
      "burgerButton"
    );

  const mobileMenu =
    document.getElementById(
      "mobileMenu"
    );


  burger.addEventListener(
    "click",
    () => {

      const active =
        mobileMenu.classList.toggle(
          "active"
        );


      burger.setAttribute(
        "aria-expanded",
        String(active)
      );


      mobileMenu.setAttribute(
        "aria-hidden",
        String(!active)
      );


      document.body.classList.toggle(
        "menu-open",
        active
      );


      if (lenis) {

        if (active) {
          lenis.stop();
        } else {
          lenis.start();
        }

      }

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove(
            "active"
          );

          burger.setAttribute(
            "aria-expanded",
            "false"
          );

          mobileMenu.setAttribute(
            "aria-hidden",
            "true"
          );

          document.body.classList.remove(
            "menu-open"
          );

          if (lenis) {
            lenis.start();
          }

        }
      );

    });


  /* ======================================
     MARQUEE
  ====================================== */

  if (!reduceMotion) {

    gsap.to(
      ".marquee-track",
      {

        xPercent: -50,

        duration: 24,

        repeat: -1,

        ease: "none"

      }
    );

  }


  /* ======================================
     HERO LEAVES
  ====================================== */

  const heroLeaves =
    document.getElementById(
      "heroLeaves"
    );


  if (
    heroLeaves &&
    !reduceMotion
  ) {

    const amount =
      isMobile ? 4 : 9;


    for (
      let i = 0;
      i < amount;
      i++
    ) {

      const leaf =
        document.createElement(
          "span"
        );


      leaf.style.position =
        "absolute";

      leaf.style.width =
        `${7 + Math.random() * 11}px`;

      leaf.style.height =
        `${4 + Math.random() * 7}px`;

      leaf.style.borderRadius =
        "100% 0 100% 0";

      leaf.style.background =
        Math.random() > .45
          ? "rgba(127,168,58,.42)"
          : "rgba(201,162,75,.30)";

      leaf.style.left =
        `${Math.random() * 100}%`;

      leaf.style.top =
        `${-20 - Math.random() * 40}%`;

      leaf.style.filter =
        Math.random() > .5
          ? "blur(.6px)"
          : "none";


      heroLeaves.appendChild(
        leaf
      );


      gsap.to(
        leaf,
        {

          y:
            window.innerHeight * 1.45,

          x:
            (
              Math.random() -
              .5
            ) * 190,

          rotation:
            Math.random() * 520,

          duration:
            10 +
            Math.random() * 9,

          delay:
            Math.random() * 8,

          repeat:
            -1,

          ease:
            "none"

        }
      );

    }

  }


  /* ======================================
     STORY
  ====================================== */

  const storyLines =
    gsap.utils.toArray(
      ".story-line"
    );


  storyLines.forEach(
    (line, index) => {

      gsap.to(
        line,
        {

          color:
            "#6E1423",

          scrollTrigger: {

            trigger:
              line,

            start:
              "top 68%",

            end:
              "bottom 48%",

            toggleActions:
              "play reverse play reverse"

          }

        }
      );

    }
  );


  gsap.to(
    "#storyGoldPath",
    {

      strokeDashoffset: 0,

      ease: "none",

      scrollTrigger: {

        trigger:
          ".story-section",

        start:
          "top top",

        end:
          "bottom bottom",

        scrub:
          true

      }

    }
  );


  gsap.from(
    ".story-picture",
    {

      clipPath:
        "inset(0 0 100% 0)",

      scale: 1.08,

      duration: 1.15,

      ease:
        "power4.inOut",

      scrollTrigger: {

        trigger:
          ".story-visual",

        start:
          "top 82%"

      }

    }
  );


  /* ======================================
     ORCHARD HORIZONTAL
  ====================================== */

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
    orchardTrack &&
    !isMobile
  ) {

    const distance = () =>
      Math.max(
        0,
        orchardTrack.scrollWidth -
        window.innerWidth
      );


    gsap.to(
      orchardTrack,
      {

        x: () =>
          -distance(),

        ease:
          "none",

        scrollTrigger: {

          trigger:
            orchardSection,

          start:
            "top top",

          end: () =>
            `+=${distance() + window.innerHeight}`,

          scrub:
            1,

          invalidateOnRefresh:
            true

        }

      }
    );

  }


  /* ======================================
     COUNTERS
  ====================================== */

  document
    .querySelectorAll(
      ".counter-number"
    )
    .forEach(counter => {

      const target =
        Number(
          counter.dataset.count
        );


      const state = {
        value: 0
      };


      gsap.to(
        state,
        {

          value:
            target,

          duration:
            1.8,

          ease:
            "power2.out",

          scrollTrigger: {

            trigger:
              counter,

            start:
              "top 85%",

            once:
              true

          },

          onUpdate() {

            counter.textContent =
              Math.floor(
                state.value
              );

          }

        }
      );

    });


  /* ======================================
     TASTE BARS
  ====================================== */

  gsap.utils
    .toArray(
      ".variety-card"
    )
    .forEach(card => {

      gsap.to(
        card.querySelectorAll(
          ".taste-bar i"
        ),
        {

          scaleX: 1,

          duration: .9,

          stagger: .08,

          ease:
            "power3.out",

          scrollTrigger: {

            trigger:
              card,

            start:
              "top 78%"

          }

        }
      );

    });


  /* ======================================
     3D TILT CARDS
  ====================================== */

  document
    .querySelectorAll(
      ".variety-card"
    )
    .forEach(card => {

      const glare =
        card.querySelector(
          ".card-glare"
        );


      card.addEventListener(
        "pointermove",
        event => {

          if (
            window.innerWidth <
            900
          ) return;


          const rect =
            card.getBoundingClientRect();


          const x =
            (
              event.clientX -
              rect.left
            ) /
            rect.width;


          const y =
            (
              event.clientY -
              rect.top
            ) /
            rect.height;


          gsap.to(
            card,
            {

              rotateY:
                (x - .5) * 5,

              rotateX:
                (y - .5) * -5,

              scale:
                1.012,

              transformPerspective:
                1000,

              duration:
                .25,

              overwrite:
                true

            }
          );


          if (glare) {

            glare.style.background =
              `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,.55), transparent 35%)`;


            gsap.to(
              glare,
              {

                opacity: .65,

                duration: .2

              }
            );

          }

        }
      );


      card.addEventListener(
        "pointerleave",
        () => {

          gsap.to(
            card,
            {

              rotateX: 0,

              rotateY: 0,

              scale: 1,

              duration: .4,

              ease:
                "power3.out"

            }
          );


          if (glare) {

            gsap.to(
              glare,
              {

                opacity: 0,

                duration: .2

              }
            );

          }

        }
      );

    });


  /* ======================================
     PREMIUM
  ====================================== */

  gsap.to(
    "#premiumRibbonPath",
    {

      strokeDashoffset:
        0,

      ease:
        "none",

      scrollTrigger: {

        trigger:
          ".premium-section",

        start:
          "top 80%",

        end:
          "center center",

        scrub:
          1

      }

    }
  );


  gsap.to(
    ".premium-background",
    {

      scale:
        1.075,

      ease:
        "none",

      scrollTrigger: {

        trigger:
          ".premium-section",

        start:
          "top bottom",

        end:
          "bottom top",

        scrub:
          true

      }

    }
  );


  const premiumSection =
    document.querySelector(
      ".premium-section"
    );

  const premiumSpotlight =
    document.getElementById(
      "premiumSpotlight"
    );


  if (
    premiumSection &&
    premiumSpotlight &&
    !isMobile
  ) {

    premiumSection.addEventListener(
      "pointermove",
      event => {

        const rect =
          premiumSection
            .getBoundingClientRect();


        gsap.to(
          premiumSpotlight,
          {

            x:
              event.clientX -
              rect.left,

            y:
              event.clientY -
              rect.top,

            duration:
              .35,

            ease:
              "power2.out"

          }
        );

      }
    );

  }


  /* ======================================
     CHILDHOOD PARALLAX
  ====================================== */

  gsap.to(
    ".childhood-background",
    {

      scale:
        1.07,

      ease:
        "none",

      scrollTrigger: {

        trigger:
          ".childhood-section",

        start:
          "top bottom",

        end:
          "bottom top",

        scrub:
          true

      }

    }
  );


  /* ======================================
     CUSTOM CURSOR
  ====================================== */

  const cursorDot =
    document.querySelector(
      ".cursor-dot"
    );

  const cursorRing =
    document.querySelector(
      ".cursor-ring"
    );


  if (
    cursorDot &&
    cursorRing &&
    window.matchMedia(
      "(pointer:fine)"
    ).matches
  ) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    window.addEventListener(
      "pointermove",
      event => {

        mouseX =
          event.clientX;

        mouseY =
          event.clientY;


        gsap.set(
          cursorDot,
          {

            x:
              mouseX,

            y:
              mouseY

          }
        );

      }
    );


    gsap.ticker.add(
      () => {

        ringX +=
          (
            mouseX -
            ringX
          ) * .13;


        ringY +=
          (
            mouseY -
            ringY
          ) * .13;


        gsap.set(
          cursorRing,
          {

            x:
              ringX,

            y:
              ringY

          }
        );

      }
    );


    document
      .querySelectorAll(
        ".image-hover"
      )
      .forEach(element => {

        element.addEventListener(
          "mouseenter",
          () => {

            cursorRing.classList.add(
              "view-mode"
            );

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            cursorRing.classList.remove(
              "view-mode"
            );

          }
        );

      });


    document
      .querySelectorAll(
        ".product-card"
      )
      .forEach(element => {

        element.addEventListener(
          "mouseenter",
          () => {

            cursorRing.classList.add(
              "apple-mode"
            );

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            cursorRing.classList.remove(
              "apple-mode"
            );

          }
        );

      });

  }


  /* ======================================
     MAGNETIC BUTTONS
  ====================================== */

  document
    .querySelectorAll(
      ".magnetic"
    )
    .forEach(element => {

      element.addEventListener(
        "pointermove",
        event => {

          if (
            window.innerWidth <
            900
          ) return;


          const rect =
            element
              .getBoundingClientRect();


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

              x:
                x * .12,

              y:
                y * .12,

              duration:
                .25

            }
          );

        }
      );


      element.addEventListener(
        "pointerleave",
        () => {

          gsap.to(
            element,
            {

              x: 0,

              y: 0,

              duration:
                .4,

              ease:
                "elastic.out(1,.45)"

            }
          );

        }
      );

    });


  /* ======================================
     THREE.JS REAL APPLE
  ====================================== */

  const appleCanvas =
    document.getElementById(
      "appleCanvas"
    );

  const webglStage =
    document.getElementById(
      "globalWebgl"
    );


  if (
    appleCanvas &&
    webglStage &&
    typeof THREE !== "undefined" &&
    !isMobile &&
    !reduceMotion
  ) {

    console.log(
      "ALMORA 3D: scene starting"
    );


    const scene =
      new THREE.Scene();


    const camera =
      new THREE.PerspectiveCamera(
        31,
        window.innerWidth /
        window.innerHeight,
        .1,
        100
      );


    camera.position.set(
      0,
      0,
      7.6
    );


    const renderer =
      new THREE.WebGLRenderer({

        canvas:
          appleCanvas,

        alpha:
          true,

        antialias:
          true,

        powerPreference:
          "high-performance"

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


    renderer.toneMapping =
      THREE.ACESFilmicToneMapping;


    renderer.toneMappingExposure =
      1.06;


    renderer.physicallyCorrectLights =
      true;


    /* ------------------------------
       ENVIRONMENT
    ------------------------------ */

    if (
      typeof THREE.RoomEnvironment !==
      "undefined"
    ) {

      try {

        const pmrem =
          new THREE.PMREMGenerator(
            renderer
          );


        const room =
          new THREE.RoomEnvironment();


        scene.environment =
          pmrem
            .fromScene(
              room,
              .04
            )
            .texture;


        room.dispose();

        pmrem.dispose();

      } catch (error) {

        console.warn(
          "ALMORA 3D: RoomEnvironment unavailable",
          error
        );

      }

    }


    /* ------------------------------
       ROOT
    ------------------------------ */

    const appleRoot =
      new THREE.Group();


    const modelHolder =
      new THREE.Group();


    scene.add(
      appleRoot
    );


    appleRoot.add(
      modelHolder
    );


    appleRoot.position.set(
      2.15,
      -.08,
      0
    );


    appleRoot.scale.setScalar(
      .86
    );


    /* ------------------------------
       MATERIAL STORAGE
    ------------------------------ */

    const appleMaterials =
      [];


    function rememberMaterial(
      material
    ) {

      if (
        material &&
        material.color
      ) {

        appleMaterials.push(
          material
        );

      }

    }


    /* ------------------------------
       NORMALIZE MODEL
    ------------------------------ */

    function normalizeModel(
      model
    ) {

      const box =
        new THREE.Box3()
          .setFromObject(
            model
          );


      const size =
        new THREE.Vector3();


      const center =
        new THREE.Vector3();


      box.getSize(
        size
      );


      box.getCenter(
        center
      );


      model.position.sub(
        center
      );


      const largest =
        Math.max(
          size.x,
          size.y,
          size.z
        );


      if (
        largest > 0
      ) {

        model.scale.setScalar(
          2.35 /
          largest
        );

      }

    }


    /* ------------------------------
       REAL MODEL MATERIAL UPGRADE
    ------------------------------ */

    function upgradeRealModel(
      model
    ) {

      model.traverse(
        child => {

          if (
            !child.isMesh
          ) return;


          const meshName =
            (
              child.name || ""
            ).toLowerCase();


          const original =
            child.material;


          const materialName =
            (
              original &&
              original.name
                ? original.name
                : ""
            ).toLowerCase();


          const combinedName =
            `${meshName} ${materialName}`;


          const isLeaf =
            combinedName.includes(
              "leaf"
            ) ||
            combinedName.includes(
              "green"
            );


          const isStem =
            combinedName.includes(
              "stem"
            ) ||
            combinedName.includes(
              "branch"
            ) ||
            combinedName.includes(
              "wood"
            );


          if (
            isLeaf ||
            isStem
          ) {

            if (original) {

              original.needsUpdate =
                true;

            }

            return;

          }


          const material =
            new THREE.MeshPhysicalMaterial({

              color:
                0xB3202F,

              map:
                original &&
                original.map
                  ? original.map
                  : null,

              normalMap:
                original &&
                original.normalMap
                  ? original.normalMap
                  : null,

              roughnessMap:
                original &&
                original.roughnessMap
                  ? original.roughnessMap
                  : null,

              aoMap:
                original &&
                original.aoMap
                  ? original.aoMap
                  : null,

              roughness:
                .23,

              metalness:
                0,

              clearcoat:
                1,

              clearcoatRoughness:
                .08,

              reflectivity:
                .9

            });


          child.material =
            material;


          rememberMaterial(
            material
          );

        }
      );

    }


    /* ------------------------------
       PROCEDURAL FALLBACK
    ------------------------------ */

    function createFallbackApple() {

      const group =
        new THREE.Group();


      const profile = [

        new THREE.Vector2(.05,-1.10),
        new THREE.Vector2(.38,-1.06),
        new THREE.Vector2(.72,-.90),
        new THREE.Vector2(.98,-.56),
        new THREE.Vector2(1.10,-.14),
        new THREE.Vector2(1.08,.28),
        new THREE.Vector2(.96,.63),
        new THREE.Vector2(.72,.91),
        new THREE.Vector2(.44,1.02),
        new THREE.Vector2(.22,.97),
        new THREE.Vector2(.10,.86)

      ];


      const appleGeometry =
        new THREE.LatheGeometry(
          profile,
          96
        );


      const appleMaterial =
        new THREE.MeshPhysicalMaterial({

          color:
            0xB3202F,

          roughness:
            .21,

          metalness:
            0,

          clearcoat:
            1,

          clearcoatRoughness:
            .08,

          reflectivity:
            .9

        });


      rememberMaterial(
        appleMaterial
      );


      const appleMesh =
        new THREE.Mesh(
          appleGeometry,
          appleMaterial
        );


      group.add(
        appleMesh
      );


      const stem =
        new THREE.Mesh(

          new THREE.CylinderGeometry(
            .05,
            .075,
            .55,
            18
          ),

          new THREE.MeshStandardMaterial({

            color:
              0x3b2416,

            roughness:
              .78

          })

        );


      stem.position.y =
        1.17;


      stem.rotation.z =
        -.15;


      group.add(
        stem
      );


      const leafShape =
        new THREE.Shape();


      leafShape.moveTo(
        0,
        0
      );


      leafShape.bezierCurveTo(
        .55,
        .10,
        .78,
        .62,
        .18,
        .84
      );


      leafShape.bezierCurveTo(
        -.22,
        .61,
        -.28,
        .18,
        0,
        0
      );


      const leaf =
        new THREE.Mesh(

          new THREE.ShapeGeometry(
            leafShape
          ),

          new THREE.MeshPhysicalMaterial({

            color:
              0x4c732f,

            roughness:
              .52,

            side:
              THREE.DoubleSide

          })

        );


      leaf.scale.set(
        .58,
        .58,
        .58
      );


      leaf.position.set(
        .06,
        1.20,
        0
      );


      leaf.rotation.set(
        .25,
        .35,
        -.82
      );


      group.add(
        leaf
      );


      return group;

    }


    /* ------------------------------
       DROPLETS
    ------------------------------ */

    function addDroplets() {

      const geometry =
        new THREE.SphereGeometry(
          .019,
          8,
          8
        );


      const material =
        new THREE.MeshPhysicalMaterial({

          color:
            0xffffff,

          transparent:
            true,

          opacity:
            .28,

          roughness:
            .03,

          transmission:
            .65,

          clearcoat:
            1,

          depthWrite:
            false

        });


      const count =
        26;


      const droplets =
        new THREE.InstancedMesh(
          geometry,
          material,
          count
        );


      const dummy =
        new THREE.Object3D();


      for (
        let i = 0;
        i < count;
        i++
      ) {

        const theta =
          Math.random() *
          Math.PI *
          2;


        const phi =
          Math.acos(
            2 *
            Math.random() -
            1
          );


        const radius =
          .82 +
          Math.random() *
          .08;


        dummy.position.set(

          Math.sin(phi) *
          Math.cos(theta) *
          radius,

          Math.cos(phi) *
          radius *
          1.04,

          Math.sin(phi) *
          Math.sin(theta) *
          radius

        );


        dummy.scale.setScalar(
          .55 +
          Math.random() *
          .75
        );


        dummy.updateMatrix();


        droplets.setMatrixAt(
          i,
          dummy.matrix
        );

      }


      droplets.instanceMatrix.needsUpdate =
        true;


      modelHolder.add(
        droplets
      );

    }


    /* ------------------------------
       SOFT CONTACT SHADOW
    ------------------------------ */

    function createShadowTexture() {

      const canvas =
        document.createElement(
          "canvas"
        );


      canvas.width =
        256;

      canvas.height =
        256;


      const context =
        canvas.getContext(
          "2d"
        );


      const gradient =
        context.createRadialGradient(
          128,
          128,
          8,
          128,
          128,
          120
        );


      gradient.addColorStop(
        0,
        "rgba(0,0,0,.38)"
      );

      gradient.addColorStop(
        .55,
        "rgba(0,0,0,.16)"
      );

      gradient.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );


      context.fillStyle =
        gradient;


      context.fillRect(
        0,
        0,
        256,
        256
      );


      return new THREE.CanvasTexture(
        canvas
      );

    }


    const contactShadow =
      new THREE.Mesh(

        new THREE.PlaneGeometry(
          2.3,
          .68
        ),

        new THREE.MeshBasicMaterial({

          map:
            createShadowTexture(),

          transparent:
            true,

          opacity:
            .52,

          depthWrite:
            false

        })

      );


    contactShadow.rotation.x =
      -Math.PI / 2;


    contactShadow.position.set(
      2.15,
      -1.43,
      -.2
    );


    scene.add(
      contactShadow
    );


    /* ------------------------------
       LIGHTS
    ------------------------------ */

    const keyLight =
      new THREE.DirectionalLight(
        0xffd8b1,
        2.6
      );


    keyLight.position.set(
      4,
      5,
      5
    );


    scene.add(
      keyLight
    );


    const rimLight =
      new THREE.DirectionalLight(
        0xC9A24B,
        2.7
      );


    rimLight.position.set(
      -4,
      2,
      -4
    );


    scene.add(
      rimLight
    );


    const warmFill =
      new THREE.PointLight(
        0xB3202F,
        .8,
        10
      );


    warmFill.position.set(
      3,
      -1,
      2
    );


    scene.add(
      warmFill
    );


    scene.add(
      new THREE.AmbientLight(
        0xffffff,
        .36
      )
    );


    /* ------------------------------
       SOFT GOLD DUST SPRITE
    ------------------------------ */

    function createParticleTexture() {

      const canvas =
        document.createElement(
          "canvas"
        );


      canvas.width =
        64;

      canvas.height =
        64;


      const context =
        canvas.getContext(
          "2d"
        );


      const gradient =
        context.createRadialGradient(
          32,
          32,
          1,
          32,
          32,
          30
        );


      gradient.addColorStop(
        0,
        "rgba(255,231,171,1)"
      );

      gradient.addColorStop(
        .25,
        "rgba(201,162,75,.8)"
      );

      gradient.addColorStop(
        1,
        "rgba(201,162,75,0)"
      );


      context.fillStyle =
        gradient;


      context.fillRect(
        0,
        0,
        64,
        64
      );


      return new THREE.CanvasTexture(
        canvas
      );

    }


    const particleCount =
      120;


    const positions =
      new Float32Array(
        particleCount * 3
      );


    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      positions[
        i * 3
      ] =
        (
          Math.random() -
          .5
        ) * 12;


      positions[
        i * 3 + 1
      ] =
        (
          Math.random() -
          .5
        ) * 8;


      positions[
        i * 3 + 2
      ] =
        -2 +
        Math.random() *
        6;

    }


    const dustGeometry =
      new THREE.BufferGeometry();


    dustGeometry.setAttribute(

      "position",

      new THREE.BufferAttribute(
        positions,
        3
      )

    );


    const goldDust =
      new THREE.Points(

        dustGeometry,

        new THREE.PointsMaterial({

          color:
            0xC9A24B,

          map:
            createParticleTexture(),

          size:
            .075,

          transparent:
            true,

          opacity:
            .52,

          depthWrite:
            false,

          blending:
            THREE.AdditiveBlending

        })

      );


    scene.add(
      goldDust
    );


    /* ------------------------------
       GLB LOADER
    ------------------------------ */

    let realModelLoaded =
      false;

    let fallbackAdded =
      false;


    function addFallback() {

      if (
        fallbackAdded ||
        realModelLoaded
      ) return;


      fallbackAdded =
        true;


      const fallback =
        createFallbackApple();


      normalizeModel(
        fallback
      );


      modelHolder.add(
        fallback
      );


      addDroplets();


      console.warn(
        "ALMORA 3D: procedural fallback active"
      );

    }


    if (
      typeof THREE.GLTFLoader !==
      "undefined"
    ) {

      const loader =
        new THREE.GLTFLoader();


      loader.load(

        "assets/models/apple.glb",

        gltf => {

          realModelLoaded =
            true;


          const model =
            gltf.scene;


          upgradeRealModel(
            model
          );


          normalizeModel(
            model
          );


          modelHolder.add(
            model
          );


          addDroplets();


          console.log(
            "ALMORA 3D: apple.glb loaded successfully"
          );

        },

        xhr => {

          if (
            xhr.total
          ) {

            const progress =
              Math.round(
                xhr.loaded /
                xhr.total *
                100
              );


            console.log(
              `ALMORA 3D model: ${progress}%`
            );

          }

        },

        error => {

          console.error(
            "ALMORA 3D: apple.glb failed",
            error
          );


          addFallback();

        }

      );


      setTimeout(
        () => {

          if (
            !realModelLoaded
          ) {

            addFallback();

          }

        },
        5000
      );

    } else {

      console.error(
        "ALMORA 3D: GLTFLoader missing"
      );


      addFallback();

    }


    /* ------------------------------
       COLOR MORPH
    ------------------------------ */

    function tweenAppleColor(
      hex,
      duration = .8
    ) {

      const target =
        new THREE.Color(
          hex
        );


      appleMaterials.forEach(
        material => {

          gsap.to(
            material.color,
            {

              r:
                target.r,

              g:
                target.g,

              b:
                target.b,

              duration,

              ease:
                "power2.inOut"

            }
          );

        }
      );

    }


    document
      .querySelectorAll(
        ".product-card"
      )
      .forEach(card => {

        card.addEventListener(
          "mouseenter",
          () => {

            tweenAppleColor(
              card.dataset.appleColor
            );

          }
        );

      });


    /* ------------------------------
       SECTION JOURNEY
    ------------------------------ */

    ScrollTrigger.create({

      trigger:
        ".hero",

      start:
        "top top",

      end:
        "bottom top",

      scrub:
        true,

      onUpdate(self) {

        const p =
          self.progress;


        appleRoot.position.x =
          2.15 -
          p * .55;


        appleRoot.position.y =
          -.08 -
          p * .25;


        appleRoot.rotation.y =
          p *
          Math.PI *
          .72;

      }

    });


    ScrollTrigger.create({

      trigger:
        "#story",

      start:
        "top 70%",

      end:
        "bottom 25%",

      onEnter() {

        gsap.to(
          appleRoot.position,
          {

            x: 2.75,

            y: .15,

            z: -.7,

            duration: 1.15,

            ease:
              "power3.inOut"

          }
        );


        gsap.to(
          appleRoot.scale,
          {

            x: .72,
            y: .72,
            z: .72,

            duration: 1

          }
        );

      },

      onEnterBack() {

        tweenAppleColor(
          "#B3202F"
        );

      },

      onLeaveBack() {

        gsap.to(
          appleRoot.position,
          {

            x: 2.15,

            y: -.08,

            z: 0,

            duration: 1.1

          }
        );


        gsap.to(
          appleRoot.scale,
          {

            x: .86,
            y: .86,
            z: .86,

            duration: 1

          }
        );

      }

    });


    ScrollTrigger.create({

      trigger:
        "#varieties",

      start:
        "top 72%",

      end:
        "bottom 30%",

      onEnter() {

        tweenAppleColor(
          "#B3202F"
        );


        gsap.to(
          appleRoot.position,
          {

            x: 2.60,

            y: -.10,

            z: -.30,

            duration: 1

          }
        );


        gsap.to(
          appleRoot.scale,
          {

            x: .78,
            y: .78,
            z: .78,

            duration: 1

          }
        );

      },

      onEnterBack() {

        tweenAppleColor(
          "#B3202F"
        );

      }

    });


    ScrollTrigger.create({

      trigger:
        "#premium",

      start:
        "top 72%",

      end:
        "bottom 25%",

      onEnter() {

        tweenAppleColor(
          "#991827",
          1
        );


        gsap.to(
          appleRoot.position,
          {

            x: 2.1,

            y: .15,

            z: -.25,

            duration: 1.15

          }
        );


        gsap.to(
          appleRoot.scale,
          {

            x: .94,
            y: .94,
            z: .94,

            duration: 1.15

          }
        );

      },

      onEnterBack() {

        tweenAppleColor(
          "#991827"
        );

      }

    });


    /* ------------------------------
       VISIBILITY
    ------------------------------ */

    const premiumSectionElement =
      document.getElementById(
        "premium"
      );


    let shouldRender =
      true;


    function updateRenderState() {

      const premiumBottom =
        premiumSectionElement
          ? premiumSectionElement
              .getBoundingClientRect()
              .bottom
          : window.innerHeight;


      shouldRender =
        !document.hidden &&
        premiumBottom >
          -window.innerHeight;


      gsap.to(
        webglStage,
        {

          opacity:
            shouldRender
              ? 1
              : 0,

          duration:
            .25

        }
      );

    }


    window.addEventListener(
      "scroll",
      updateRenderState,
      {
        passive: true
      }
    );


    document.addEventListener(
      "visibilitychange",
      updateRenderState
    );


    updateRenderState();


    /* ------------------------------
       MOUSE INERTIA
    ------------------------------ */

    let mouseTargetX = 0;
    let mouseTargetY = 0;

    let mouseSmoothX = 0;
    let mouseSmoothY = 0;


    window.addEventListener(
      "pointermove",
      event => {

        mouseTargetX =
          event.clientX /
          window.innerWidth -
          .5;


        mouseTargetY =
          event.clientY /
          window.innerHeight -
          .5;

      },
      {
        passive: true
      }
    );


    /* ------------------------------
       RENDER
    ------------------------------ */

    const clock =
      new THREE.Clock();


    function render() {

      requestAnimationFrame(
        render
      );


      if (
        !shouldRender
      ) return;


      const time =
        clock.getElapsedTime();


      mouseSmoothX +=
        (
          mouseTargetX -
          mouseSmoothX
        ) * .035;


      mouseSmoothY +=
        (
          mouseTargetY -
          mouseSmoothY
        ) * .035;


      modelHolder.position.y =
        Math.sin(
          time * .82
        ) * .035;


      modelHolder.rotation.y +=
        .00115;


      modelHolder.rotation.x +=
        (
          mouseSmoothY *
          .11 -
          modelHolder.rotation.x
        ) * .025;


      modelHolder.rotation.z +=
        (
          mouseSmoothX *
          .13 -
          modelHolder.rotation.z
        ) * .025;


      goldDust.rotation.y +=
        .00035;


      contactShadow.material.opacity =
        .42 +
        Math.sin(
          time * .82
        ) * .04;


      renderer.render(
        scene,
        camera
      );

    }


    render();


    /* ------------------------------
       RESIZE
    ------------------------------ */

    window.addEventListener(
      "resize",
      () => {

        camera.aspect =
          window.innerWidth /
          window.innerHeight;


        camera.updateProjectionMatrix();


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

      }
    );

  }


  /* ======================================
     CONTACT FORM
  ====================================== */

  const form =
    document.getElementById(
      "contactForm"
    );


  if (form) {

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const data =
          new FormData(
            form
          );


        const name =
          data.get("name") || "";

        const phone =
          data.get("phone") || "";

        const message =
          data.get("message") || "";


        const messages = {

          az:
            `Salam, ALMORA!\n\nAd: ${name}\nTelefon: ${phone}\nMesaj: ${message}`,

          ru:
            `Здравствуйте, ALMORA!\n\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`,

          en:
            `Hello, ALMORA!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`

        };


        const text =
          messages[
            currentLanguage
          ] ||
          messages.az;


        const url =
          `https://wa.me/994557525353?text=${encodeURIComponent(text)}`;


        window.open(
          url,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* ======================================
     FINAL REFRESH
  ====================================== */

  window.addEventListener(
    "load",
    () => {

      ScrollTrigger.refresh();

    }
  );

});