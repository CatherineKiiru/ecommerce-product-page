const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('nav_links');
const overlay = document.querySelector('.overlay');
const mainThumbnail = document.querySelector('.main-thumbnail');
const mainThumbnailLightBox = document.querySelector('.lightbox-container .main-thumbnail');
const images = document.querySelectorAll('.preview img');
const plusBtn = documenr.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const amount = document.querySelector('.amount');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const slider = document.querySelector('mobile-thumb');
const thumbMob = document.querySelector('thummb-mob');
const cartBtn = document.querySelector('cart-btn');
const cart = document.querySelector('.cart-wrp');
const closeLightboxBtn = document.querySelector('.close-lightbox');
const lightbox = document.querySelector('.lightbox');
const addBtn = document.querySelector('.add_btn');
const indicator = document.querySelector('.indicator');
const wrp = document.querySelector('cart-content');
let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";
function openMenu(){
    menu.classList.add('active');
    overlay.classList.add('active');
}
function closeMenu(){
    menu.classList.remove('active');
    overlay.classList.remove('active');
}
function handleMinus(){
    if (amountValue > 0){
        amountValue--;
    }
    amount.innerText = amountValue
}
function nextImage(){
    if (currentImg == 4){
        currentImg = 1;
    } else {
        currrentImg++
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`
}
function prevImage(){
    if (currentImg == 1){
        currentImg = 4;
    } else {
        currentImg--;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}
function toggleCart(){
    cart.classList.toggle('invisible')
}
function closeLightBox(){
    lightbox.classList.add('invisible');
}
function openLightbox(){
    lightbox.classList.remove('Invisible');
} 
function addItem(){
    if (amountValue > 0){
        const total = 125.00 * amountValue;
    wrp.classList.remove('empty');
    wrp.innerHTML = `<div class="product">
    <div>
      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
      <div class="product-info">
        <p class="product-title">Fall Limited Edition Sneakers</p>
       <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
      </div>
      <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
    </div>
    <button class="checkout-btn">Checkout</button>
  </div>`;
  indicator.style.display = "block";
  indicator.innerText = amountValue;
    }
}
function deleteItem(){
    wrp.classList.add('empty');
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}
images.forEach((image) => {
    image.addEventListener('click', () => {
        const lastImg = document.querySelectorAll('.selected');
        if (lastImg) {
            lastImg[0].classList.remove('selected');
        }
        image.classList.add('selected');
        const selectedImg = document.querySelector('.selected');
        switch (selectedImg.getAttribute('src')) {
            case './images/image-product-1-thumbnail.jpg':
                mainThumbnail.src = './images/image-product-1.jpg';
                mainThumbnailLightBox.src = './images/image-product-1.jpg';
                break;
            case './images/image-product-2-thumbnail.jpg':
                mainThumbnail.src = './images/image-product-2.jpg';
                mainThumbnailLightBox.src = './images/image-product-2.jpg';
                break;
            case './images/image-product-3-thumbnail.jpg':
                mainThumbnail.src = './images/image-product-3.jpg';
                mainThumbnailLightBox.src = './images/image-product-3.jpg';
                break;
            case './images/image-product-4-thumbnail.jpg':
                mainThumbnail.src = './images/image-product-4.jpg';
                mainThumbnailLightBox.src = './images/image-product-4.jpg';
                break;
        };
    });
});

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
plusBtn.addEventListener('click', closeMenu);
minusBtn.addEventListener('click', handleMinus);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
cartBtn.addEventListener('click', toggleCart);
closeLightboxBtn.addEventListener('click', closeLightBox);
mainThumbnail.addEventListener('click', openLightbox);
addBtn.addEventListener('click', addItem);

