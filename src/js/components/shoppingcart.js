const goods = document.querySelector('button[data-tab-id="goods"]')
const cart = document.querySelector('button[data-tab-id="cart"]')

const clickHandler = (event) => {
  // console.log(event.target.dataset.id); // вариант как можем достать нашу кнопку
  console.log(event.target.getAttribute('data-tab-id'));
}

goods.addEventListener('click', clickHandler)
cart.addEventListener('click', clickHandler)
