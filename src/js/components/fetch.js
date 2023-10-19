//// Пример fetch c промисами получение данных по API
//https://www.cbr-xml-daily.ru/daily_json.js наш API

//1) Получить данные с сервера

// async function getCurrencies() {
//   const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
//   const response = await fetch(url)
//   const data = await response.json()

//   const usdRate = data.Valute.USD.Value.toFixed(1)
//   const eurRate = data.Valute.EUR.Value.toFixed(1)

//   //2) Отобразим эти данные на странице
//   const usdElement = document.querySelector('.fetch__usd')
//   const eurElement = document.querySelector('.fetch__eur')

//   usdElement.innerText = usdRate
//   eurElement.innerText = eurRate

// }

// getCurrencies()
