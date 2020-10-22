import Door from './door';
let root = document.getElementById("root");
let door = new Door("img","img/door.png", "просто дверь")
const town = document.createElement("div");
let input = document.createElement("textarea")
const btn   = document.createElement("button")
input.rows = 10;
input.cols = 30;
town.classList.add("wrapper");
btn.innerText = "Отправить";
town.appendChild(btn)
btn.onclick = () =>{
    try {
        // town.style.justifyContent = "space-around";
        console.log(input.value)
        eval(input.value);
    } catch (er){
        console.log(er);
    }
}



root.appendChild(town);
for (let i = 0; i < 3; i++) {
    town.insertAdjacentElement("afterbegin", door.createEl());
}
root.appendChild(input);
