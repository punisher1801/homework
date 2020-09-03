let priceCond = 5000; //Цена кондиционера

let priceInstallation = 1500; //Цена монтажа кондиционера

let priceLine = 200; //Цена за 1м.п. магистрали

do {
  cond = prompt("How much air conditionings do you want?"); //Количество кондиционеров

  if (cond !== null) {
    let lineLength = prompt("How long is the line for a one air conditioning?"); //Длина соединительной магистрали

    if (lineLength !== null) {
      let fullPriceInstallation = priceLine * lineLength + priceInstallation; //Полная стоимость монтажа с магистралью

      let fullPrice = priceCond + fullPriceInstallation; //Стоимость кондиционера с монтажом

      let allPrice = cond * fullPrice; //Стоимость всех кондиционеров с монтажом

      let allPriceUAH = allPrice + "UAH"; //Стоимость грн

      alert(allPriceUAH);
    }
  }
} while (cond !== null);

alert("okay");
