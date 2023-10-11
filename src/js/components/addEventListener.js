//// События JS
// самые популярные click,input,scroll,keydown,resize,mousecenter,mouseleave

/// Событие click
// const btn = document.querySelector(".btn-test");

// let i = 0;

// const btnHandler = () => {
//   i++;
//   console.log("click", i);

//   switch (i) {
//     case 1:
//       btn.style.background = "red";
//       break;
//     case 2:
//       btn.style.background = "green";
//       break;
//     case 3:
//       btn.style.background = "blue";
//       btn.removeEventListener("click", btnHandler); /// после того как действие закончилось нет больше смысла его отслеживать,поэтому мы используем removeEventListener чтобы не нагружать наш браузер лишний раз
//       break;
//   }
// };

// btn.addEventListener("click", btnHandler);

/// Событие input
// const input = document.querySelector(".input-test");
// let prevValue = input.value;

// const inputHandler = (event) => {
//   const userData = event.target.value;

//   if (userData.includes("(") || userData.includes(")")) {
//     input.value = prevValue;
//     return;
//   }

//   input.value = userData;
//   prevValue = userData;
// };

// input.addEventListener("input", inputHandler);

/// Событие scroll

// document.addEventListener("scroll", (event) => {
//   console.log(event);
// });

/// Отслеживает событие нажатие кнопок
// document.addEventListener("keydown", (event) => {
//   console.log(event);
// });

// Отслеживает события изменения экрана

// window.addEventListener("resize", (event) => {
//   console.log(event);
// });
