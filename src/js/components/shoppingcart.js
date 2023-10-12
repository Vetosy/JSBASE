// const goods = document.querySelector('button[data-tab-id="goods"]')
// const cart = document.querySelector('button[data-tab-id="cart"]')

// const clickHandler = (event) => {
//   // ищем а какую же кнопку мы нажили
//   // 1) Вариант  console.log(event.target.dataset.id); // вариант как можем достать нашу кнопку
//   // 2) Вариант  console.log(event.target.getAttribute('data-tab-id')); // вариант по дата аттрибуту

//   //Можно так но слишком много кода
//   // const id = event.target.dataset.id

//   // if (id === 'goods') {
//   //   goods.classList.add('active')
//   //   cart.classList.remove('active')
//   // } else if (id === 'cart') {
//   //   goods.classList.remove('active')
//   //   cart.classList.add('active')
//   // }

//   goods.classList.toggle('active')
//   cart.classList.toggle('active')
// }

// goods.addEventListener('click', clickHandler)
// cart.addEventListener('click', clickHandler)


/// Второй вариант делаем в цикле чтобы по два раза не использовать логику на кнопки
// let activeTabId = 'goods'
// const getActiveTab = () => document.querySelector(`button[data-tab-id="${activeTabId}"]`)
// const initialTabs = getActiveTab()
// initialTabs.classList.add('active')
// const tabs = document.querySelectorAll('.tab')
// const tabsContainer = document.querySelector('.tabs')

// const renderGoods = () => {
//   return `
//    <div data-active-tab-content="true" class="product-items">
//   <div class="product-item">
//     <img src="img/html.png">
//     <div class="product-list">
//       <h3>Уроки по HTML</h3>
//       <p class="price">₽ 300</p>
//       <button class="button">В корзину</button>
//     </div>
//   </div>

//   <div class="product-item">
//     <img src="img/css.png">
//     <div class="product-list">
//       <h3>Уроки по CSS</h3>
//       <p class="price">₽ 150</p>
//       <button class="button">В корзину</button>
//     </div>
//   </div>

//   <div class="product-item">
//     <img src="img/js.png">
//     <div class="product-list">
//       <h3>Уроки по JS</h3>
//       <p class="price">₽ 260</p>
//       <button class="button">В корзину</button>
//     </div>
//   </div>
// </div>
//    `
// }


// const renderCart = () => {
//   return `
//     <div data-active-tab-content="true" class="cart-items" >
//   <div class="cart-item">
//     <div class="cart-item-title">Уроки по HTML</div>
//     <div class="cart-item-count">3шт.</div>
//     <div class="cart-item-price">₽ 150</div>
//   </div>

//   <div class="cart-item">
//     <div class="cart-item-title">Уроки по CSS</div>
//     <div class="cart-item-count">1шт.</div>
//     <div class="cart-item-price">₽ 450</div>
//   </div>

//   <div class="cart-item">
//     <div class="cart-item-title">Уроки по JS</div>
//     <div class="cart-item-count">6шт.</div>
//     <div class="cart-item-price">₽ 550</div>
//   </div>
// </div>
//   `
// }


// const clickHandler = (event) => {
//   const activeTab = getActiveTab()
//   activeTab.classList.remove('active')
//   event.target.classList.add('active')
//   activeTabId = event.target.dataset.tabId

//   const activeContent = document.querySelector(`[data-active-tab-content="true"]`)
//   activeContent.remove()

//   if (activeTabId === 'goods') {
//     tabsContainer.insertAdjacentHTML('afterend', renderGoods())
//   } else {
//     tabsContainer.insertAdjacentHTML('afterend', renderCart())
//   }

// }

// tabs.forEach(tab => tab.addEventListener('click', clickHandler))
