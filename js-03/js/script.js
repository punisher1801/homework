// 1
function newFunction() {
  console.log(newFunction);
  for (let key of arguments) {
    console.log(key);
  }
}
newFunction(10, false, "google");

// 2
let man = {
  name: "Vlad",
  reg: false,
  date: "22.07.2010",
  getInfo: userInfo,
};

let woman = {
  name: "Maria",
  reg: true,
  date: "23.07.2010",
  getInfo: userInfo,
};

function userInfo() {
  if (this.reg === true) {
    console.log("Дата регистрации: " + this.date);
  } else {
    console.log("Незарегистрированный пользователь: " + this.name);
  }
}

man.getInfo();
woman.getInfo();
