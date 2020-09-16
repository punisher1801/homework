// 1

let handbag = {
  lipstick: 1,
  mirror: 1,
  phone: 1,
  addItem: function (item, itemValue) {
    this[item] = itemValue;
  },
  deleteItem: function (item) {
    delete this[item];
  },
};
handbag.addItem("keys", 1);
handbag.deleteItem("mirror");
console.log(handbag);

// 2

let LibraryBook = function (
  _title = "Без названия",
  _year = "нет данных",
  _author = "нет данных"
) {
  let title = _title;
  let year = _year;
  let author = _author;
  let readerName = null;
  let readerData = null;
  function giveTheBook(client, data = new Date()) {
    readerName = client;
    readerData = data;
  }
  this.getBookInfo = function () {
    let text = readerName ? "выдана на руки" : "есть в наличии";
    console.info(`${author}, ${title} (${year}): ${text}`);
  };
  this.getTheBook = function (client, data) {
    if (readerName) {
      this.getBookInfo();
      return null;
    } else {
      giveTheBook(client, data);
      return {
        title: title,
        year: year,
        author: author,
      };
    }
  };
  this.returnBook = function () {
    readerName = null;
    readerData = null;
  };
};

let books = [];
books[0] = new LibraryBook("Князь Серебряный", "2000", "Лев Толстой");
books[1] = new LibraryBook("Шантарам", "2015", "Грегори Дэвид Робертс");
books[3] = new LibraryBook("Одиссея", "2005", "Гомер");

console.log(books);

books[0].getBookInfo();
books[0].getTheBook("Влад Давыдов", new Date(2019, 9, 17));
books[0].getBookInfo();
books[0].returnBook();
books[0].getBookInfo();

// 3

function Car() {
  Car.prototype.addProtopype = function (carName, carModel) {
    this[carName] = carModel;
  };
}
let car = new Car();
car.addProtopype("Lexus", "LX 570");
console.log(car);
