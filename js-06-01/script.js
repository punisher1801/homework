// 1

let tags = ["div", "p", "ul"];

let classes = ["box", "text", "list"];

let style = document.createElement("style");
document.head.appendChild(style);
style.innerHTML = `.box { background-color: red; width: 100%; height: 100px; } .text { border: 2px solid; width: 100%; height: 100px; } .list { list-style: none; background-color: black; width: 100%; height: 100px; }`;

for (i = 0; i < classes.length; i++) {
  let dok = document.createElement(tags[i]);
  dok.classList.add(classes[i]);
  document.body.appendChild(dok);
}
