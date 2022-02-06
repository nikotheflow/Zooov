
let body = document.querySelector('body');
let header = document.querySelector('.section-header');
let anchors = document.querySelectorAll('.nav-wrapper_link')
let catalogImages = document.querySelectorAll('.catalog_item-image');
let catalogTitles = document.querySelectorAll('.catalog_item-title');
let confirmOrderButton = document.querySelector('.confirm-order-button');
let countButton = document.querySelector('.section-rations_count-button');
let orderButtons = document.querySelectorAll('.catalog_item-button');
let popupCloseButtons = document.querySelectorAll('.popup_close-button');
let accordionHeaders = document.querySelectorAll('.accordion_header');
let catalogPopup = document.querySelector('.popup__catalog');
let countPopup = document.querySelector('.popup__count');
let popupHeader = document.querySelector('.popup_header')
let popupItem = document.querySelector('.popup_description__item-info');
let popupOrder = document.querySelector('.popup_description__order');
let popupThanks = document.querySelector('.popup_description__thanks');

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 798) {
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

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()

    let sectionID = anchor.getAttribute('href');


    if (sectionID === '#barf') {
      window.scrollTo({
        top: 798,
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

function toggleAccordion() {
  let thisItem = this.parentNode;

  thisItem.classList.toggle('accordion_item__active');
}

