const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("button");
const party = document.querySelector("h1");
const bg = document.querySelector("body");
let arrHex;
let hexGen;
let interval, interval2; 
let counter = 0;

button.addEventListener("click", ()=>{
  party.id = "partyClass";
  party.textContent = "";
  button.textContent = "PARTY";
  button.className = "off";
  button.addEventListener("click", () => location.reload());
  clearInterval(interval);
  interval = setInterval(() => {
    counter++;
    if(counter == 11) {
      counter = 0;
      party.textContent = "";
    }else if(counter == 2 || counter == 4) party.textContent += "Party! ";

    hexGen = "";
    for(let i = 0; i < 6; i++)hexGen += hex[ranNum()];
    button.style.backgroundColor = bg.style.backgroundColor = "#"+hexGen;

  }, 175);
});

ranNum = () => Math.floor(Math.random() * hex.length);
