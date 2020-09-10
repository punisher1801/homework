// Первое задание

let letters = []; // Пустой массив
let string = "Backend As A Service".split(" "); // Разбиваем строку на массив строк

for (let i = 0; i < string.length; i++) {
  letters.push(string[i].substring(0, 1)); // Пушим первую букву каждой строки
}

console.log(letters);
console.log(letters.join("")); // Объединяем в одну строку

// Второе задание

function showMassedge(massege) {
  // Объявление функции
  massege = prompt("Введите любое число"); // Пользователь вводит любое число или буквы
  num = Number(massege); // Приводим к типу Number
  str = '"Неверный тип данных"';
  now = new Date(); // Переменная с текущей датой
  day = now.getDate();
  month = now.getMonth() + 1; // Добавляем +1 так как отсчет начинается с нуля
  year = now.getFullYear();
  hour = now.getHours() + 3;
  minute = now.getMinutes();
  second = now.getSeconds();

  day = day < 10 ? "0" + day : day; // Если число меньше 10 добавляем к нему строку '0'
  month = month < 10 ? "0" + month : month;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  time =
    '"' +
    day +
    "." +
    month +
    "." +
    year +
    "," +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second +
    '"'; // Складываем все переменные для получения необходимой даты

  if (num || num === 0) {
    // Если num === true или 0 выводит текущую дату
    console.log(time);
  } else {
    console.log(str); // Если falce виводит строку "Неверный тип данных"
  }
}

showMassege(); // Вызов функции

// let myDate = new Date().toLocaleString();

// let time = myDate.split('/').join('.');  // Разбил на массив строк по знаку '/' и обЪединил их через '.'

// console.log(time)

// Третье задание

function testUserText(userText) {
  return userText.split("<").join("&lt;");
}
