
let body = document.querySelector('body');
let catalogImages = document.querySelectorAll('.catalog_item-image');
let catalogTitles = document.querySelectorAll('.catalog_item-title');
let orderButtons = document.querySelectorAll('.catalog_item-button');
let confirmOrderButton = document.querySelector('.confirm-order-button');
let popup = document.querySelector('.popup');
let popupHeader = document.querySelector('.popup_header')
let popupItem = document.querySelector('.popup_description__item-info');
let popupOrder = document.querySelector('.popup_description__order');
let popupThanks = document.querySelector('.popup_description__thanks');
let popupCloseButtons = document.querySelectorAll('.popup_close-button');

catalogImages.forEach((catalogImage) => {
  catalogImage.addEventListener('click', () => {
    openPopup();
    hideAllInfo();
    showItemInfo();    
  })
})

catalogTitles.forEach((catalogTitle) => {
  catalogTitle.addEventListener('click', () => {
    openPopup();
    hideAllInfo();
    showItemInfo();    
  })
})

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openPopup();
    hideAllInfo();
    showOrderInfo();
  })
})

confirmOrderButton.addEventListener('click', () => {
  hideAllInfo();
  showThanksInfo();   
})

popupCloseButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    let currentPopupClass = e.currentTarget.dataset.popupClass;
    console.log(currentPopupClass);
    let currentPopup = document.querySelector(currentPopupClass);
    console.log(currentPopup);
    closePopup(currentPopup);
  })
})

function openPopup() {
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


