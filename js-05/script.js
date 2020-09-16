// 1

function sampleFunc() {
  console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`);
}

function modificator(func) {
  return () => func("test", "sample");
}

testFunc = modificator(sampleFunc);

testFunc();

// 2

function sampleFunc() {
  console.info ( `Symbols in my code: ${arguments.callee + 0}` );
}

function modificator(func) {
  func.valueOf = function () {
    return this.toString().length;
  };
}
modificator(sampleFunc);
sampleFunc();

// 3
