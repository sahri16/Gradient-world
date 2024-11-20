let btn1 = document.querySelector(".myBtn1");
let btn2 = document.querySelector(".myBtn2");
let cssCode = document.querySelector(".copycode");

let rgb1 = "000000";
let rgb2 = "#f3f3f3";

const hexValue = () => {
  let myHXvalue = "0123456789abcdef";
  let hexColor = "#";
  for (let a = 0; a < 6; a++) {
    hexColor = hexColor + myHXvalue[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};

const handleButton1 = () => {
  rgb1 = hexValue();
  console.log(rgb1);
 
  btn1.innerHTML = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2})`;
  btn1.style.backgroundColor = `${rgb1}`
  cssCode.innerHTML = `background-image=  linear-gradient(to right , ${rgb1}, ${rgb2})`;

};
const handleButton2 = () => {
  rgb2 = hexValue();
  console.log(rgb2);
  btn2.innerHTML = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2})`;
 btn2.style.backgroundColor = `${rgb2}`
  cssCode.innerHTML = `background-image=  linear-gradient(to right , ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

cssCode.addEventListener("click", () => {
  // Copy the text inside the text field
  navigator.clipboard.writeText(cssCode.textContent);

  // Alert the copied text
  alert("Copied the text: " + cssCode.textContent);
});

// for(let b=0; b<10; b++){
//     return cssCode
// }
