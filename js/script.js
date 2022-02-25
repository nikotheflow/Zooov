const body = document.querySelector('body'),
      header = document.querySelector('.section-header'),
      anchors = document.querySelectorAll('.nav-wrapper_link'),
      catalogImages = document.querySelectorAll('.catalog_item-image'),
      catalogTitles = document.querySelectorAll('.catalog_item-title'),
      confirmOrderButton = document.querySelector('.confirm-order-button'),
      countButton = document.querySelector('.section-rations_count-button'),
      orderButtons = document.querySelectorAll('.catalog_item-button'),
      popupCloseButtons = document.querySelectorAll('.popup_close-button'),
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

window.addEventListener('DOMContentLoaded', () => {
  showCompositions();
  showCatalog()
})

window.addEventListener('resize', () => {
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

catalogImages.forEach((catalogImage) => {
  catalogImage.addEventListener('click', () => {
    openPopup(catalogPopup);
    hideAllInfo();
    showItemInfo();    
  })
})

catalogTitles.forEach((catalogTitle) => {
  catalogTitle.addEventListener('click', () => {
    openPopup(catalogPopup);
    hideAllInfo();
    showItemInfo();    
  })
})

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openPopup(catalogPopup);
    hideAllInfo();
    showOrderInfo();
  })
})

confirmOrderButton.addEventListener('click', () => {
  hideAllInfo();
  showThanksInfo();   
})

countButton.addEventListener('click', () => {
  openPopup(countPopup);
})


popupCloseButtons.forEach((button) => {
  button.addEventListener('click', (e) => {    
    let currentPopupClass = e.currentTarget.dataset.popupClass;
    let currentPopup = document.querySelector(currentPopupClass);
    closePopup(currentPopup);
  })
})

accordionHeaders.forEach(header => header.addEventListener('click', toggleAccordion));

//seamless.polyfill(); //smooth scroll for safari

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
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

function openPopup(popup) {
  popup.classList.add('popup__open');
  body.style.overflow = 'hidden';
}

function closePopup(popup) {
  popup.classList.remove('popup__open');
  body.style.overflow = 'scroll';
}

function hideAllInfo() {
  popupHeader.style.display = "none";
  popupItem.style.display = "none";
  popupOrder.style.display = "none";
  popupThanks.style.display = "none";
}

function showItemInfo() {
  popupHeader.style.display = "block";
  popupItem.style.display = "block";
}

function showOrderInfo() {
  popupHeader.style.display = "block";
  popupOrder.style.display = "block";
}

function showThanksInfo() {
  popupThanks.style.display = "flex"; 
}

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

function toggleAccordion() {
  let thisItem = this.parentNode;

  thisItem.classList.toggle('accordion_item__active');
}

