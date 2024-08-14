let input = document.querySelector("input");
let button = document.querySelector("#btn1");
let ul = document.querySelector("ul");
// add li
button.addEventListener("click", function () {
  let li = document.createElement("li");
  let value = input.value;
  li.innerText = input.value;
  ul.appendChild(li);
  input.value = "";
  // add del button
  let btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerText = "Delete";
  btn.style.marginLeft = "12px";
  li.style.marginTop = "10px";
  btn.addEventListener("click", function () {
    li.remove();
  });
});
