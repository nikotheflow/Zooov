const body = document.querySelector('body'),
      anchors = document.querySelectorAll('.anchor'),
      header = document.querySelector('.section-header'),
      navigation = document.querySelector('.nav'),
      catalogImages = document.querySelectorAll('.catalog_item-image'),
      catalogTitles = document.querySelectorAll('.catalog_item-title'),
      burgerButton = document.querySelector('.button__burger'),
      confirmOrderButton = document.querySelector('.confirm-order-button'),
      countButton = document.querySelector('.section-rations_count-button'),
      orderButtons = document.querySelectorAll('.catalog_item-button'),      
      accordionHeaders = document.querySelectorAll('.accordion_header'),
      compositionsDesktop = document.querySelector('.section-barf_compositions__desktop'),
      compositionsMobile = document.querySelector('.section-barf_compositions__mobile'),
      catalogDesktop = document.querySelector('.section-rations_catalog__desktop'),
      catalogMobile = document.querySelector('.section-rations_catalog__mobile'),
      catalogPopup = document.querySelector('.popup__catalog'),
      countPopup = document.querySelector('.popup__count'),
      popupHeader = document.querySelector('.popup_header'),
      popupItem = document.querySelector('.popup_description__item-info'),
      popupOrder = document.querySelector('.popup_description__order'),
      popupThanks = document.querySelector('.popup_description__thanks');

const popupLinks = document.querySelectorAll('.popup-link'),
      contentLinks = document.querySelectorAll('.content-link'),
      lockPadding = document.querySelectorAll('.lock-padding'),
      popupCloseButtons = document.querySelectorAll('.popup_close-button');

const timeout = 200; // time to open popup

// popups

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.dataset.popupClass;
      const currentPopup = document.querySelector('.' + popupName);

      openPopup(currentPopup);
      e.preventDefault();
    })
  }
}

if (popupCloseButtons.length > 0) {
  for (let index = 0; index < popupCloseButtons.length; index++) {
    const popupCloseButton = popupCloseButtons[index];
    popupCloseButton.addEventListener('click', function () {

      closePopup(popupCloseButton.closest('.popup'));
    })
  }
}

if (contentLinks.length > 0) {
  for (let index = 0; index < contentLinks.length; index++) {
    const contentLink = contentLinks[index];
    contentLink.addEventListener('click', function () {
      const popupContent = contentLink.dataset.popupContent;
      checkContent(popupContent);
    })
  }
}


function checkContent(popupContent) {
  hideAllInfo()
  if (popupContent === 'item') {
    popupHeader.style.display = "block";
    popupItem.style.display = "flex";
    popupOrder.style.display = "none";
  } else if (popupContent === 'order') {
    popupHeader.style.display = "block";
    popupOrder.style.display = "flex";
  } else if (popupContent === 'thanks') {
    popupThanks.style.display = "flex"; 
  }
}

function openPopup(currentPopup) {
  bodyLock();

  currentPopup.classList.add('popup__open');
  currentPopup.addEventListener('click', function (e) {
    if (!e.target.closest('.popup_content')) {
      closePopup(currentPopup);
    }
  })
}

function closePopup(currentPopup) {
  bodyUnlock();

  currentPopup.classList.remove('popup__open');
}


function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
  
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
}

function bodyUnlock() {
  setTimeout(function () {    
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = 0;
      }
    }
    
    body.style.paddingRight = 0;
    body.classList.remove('lock');
  }, timeout);
}

// create swipers

const compositionSwiper = new Swiper('.section-barf_compositions__mobile', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination'
  }
});

const catalogSwiper = new Swiper('.section-rations_catalog__mobile', {  
  slidesPerView: "auto",
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// add listeners

window.addEventListener('DOMContentLoaded', () => {
  closeBurgerMenu()
  showCompositions();
  showCatalog()
})

window.addEventListener('resize', () => {
  closeBurgerMenu()
  showCompositions();
  showCatalog()
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= document.documentElement.clientHeight) {
    header.classList.add('section-header__fixed');
  } else {
    header.classList.remove('section-header__fixed');
  }
})

burgerButton.addEventListener('click', function() {
  navigation.classList.toggle('active');
  burgerButton.classList.toggle('active');
  body.classList.toggle('lock');

  document.querySelection()
})

accordionHeaders.forEach(header => header.addEventListener('click', toggleAccordion));
// anchors navigation

// seamless.polyfill(); //smooth scroll for safari

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    closeBurgerMenu()

    let sectionID = anchor.getAttribute('href');

    if (sectionID === '#barf') {
      window.scrollTo({
        top: document.documentElement.clientHeight,
        behavior: 'smooth'
      })
    } else {
      document.querySelector(sectionID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'    
      })
    }
  })
})

function hideAllInfo() {
  popupHeader.style.display = "none";
  popupItem.style.display = "none";
  popupOrder.style.display = "none";
  popupThanks.style.display = "none";
}

// compositions and catalog sections variants for mobile and desktop

function showCompositions() {
  if (document.documentElement.clientWidth >= 575.98) {
    compositionsMobile.style.display = "none";
    compositionsDesktop.style.display = "flex";
  } else {    
    compositionsDesktop.style.display = "none";
    compositionsMobile.style.display = "flex";
  }
}

function showCatalog() {
  if (document.documentElement.clientWidth >= 575.98) {
    catalogMobile.style.display = "none";
    catalogDesktop.style.display = "flex";
  } else {    
    catalogDesktop.style.display = "none";
    catalogMobile.style.display = "flex";
  }
}

function closeBurgerMenu() {
  navigation.classList.remove('active');
  burgerButton.classList.remove('active');
  body.classList.remove('lock');
}

function toggleAccordion() {
  let thisItem = this.parentNode;

  thisItem.classList.toggle('accordion_item__active');
}

