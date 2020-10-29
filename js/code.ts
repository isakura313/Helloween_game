import Door from './door'; // загружает нашу дверку, точнее ее класс
import Textarea from './textarea'
import data from "./data.json"; // загружаем всю информацию из JSON

let root = document.getElementById("root"); // основной корневой элемент


const house = document.createElement("div");
let wrap_code = document.createElement("div");
wrap_code.classList.add("wrap_code")
let textarea = new Textarea("textarea",5, 5, "code_space" )
const btn = document.createElement("button")
let text_area = textarea.createEl();
root.appendChild(house);
root.appendChild(wrap_code)

wrap_code.append(text_area)
wrap_code.appendChild(btn)
house.classList.add("wrapper");
btn.innerText = "Отправить";

const codemirrorEditor = CodeMirror.fromTextArea(text_area, {
    lineNumbers: true,
    mode: "javascript",
    theme: "base16-dark",
});

class RegExp1 extends RegExp {
    [Symbol.split](str, limit) {
        const result = RegExp.prototype[Symbol.split].call(this, str, limit);
        return result.map(x => `(${x})`);
    }
}


// document.getElementsByClassName("CodeMirror-scroll")[0].fontSize = "20px"


btn.onclick = () =>{
    try {
        // house.style.justifyContent = "center";
        let codeMirror = document.querySelector(".CodeMirror-code");
        let codes = codeMirror.querySelectorAll("pre");
        let codes_arr = [...codes];
        let str_code = "";
        codes_arr.map((el)=>{
            str_code += el.textContent;
        })
        console.log(str_code);
        eval(str_code);


    } catch (er){
        console.log(er);
    }
}




for (let i = 0; i < 3; i++) {
    let door = new Door("img",`img/${data.img[i]}`, "просто дверь", "door") // генерация двери
    house.insertAdjacentElement("afterbegin", door.createEl());
}

