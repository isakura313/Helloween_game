class Img {
  constructor(name, src, alt, classText) {
    this.name = name;
    this.src = src;
    this.alt = alt;
    this.classText = classText;
  }
  createEl() {
    const el = document.createElement(this.name);
    el.src = this.src;
    el.alt = this.alt;
    el.classList.add(this.classText);
    return el;
  }
}

const instructions = [
  "Перед вами игра Halloween JavaScript, изучите внимательно инструкцию. Эта игра может выполнить любую JS команду, здесь есть некоторая свобода. Постарайтесь выполнить инструкции и выполните как можно больше квестов. Для начала выполните alert с любым сообщением)",
  "Совсем скоро будет Halloween, а в городе еще не готовo к нему. Надпись наверху совсем не раскрашена в цвета праздника. С помощью JavaScript назначьте тегу h1 красный цвет",
  "На элемент wrapper уже назначены flex. Назначьте ему свойство space-around c помощью свойства style, чтобы расставить элементы по центру",
  "Теперь вам нужно написать код, который назначит каждой двери в виде последнего предка Монстрика из массива monsters_on_doors.  Используйте insertAdjacentElement, и не забудьте получить псевдколлекцию элементов с классом .door",
  "Теперь вам нужно на тыковке повесить обработчик, чтобы при клике на элемент с классом pumkin раздавался зловещий смех witch.mp3",
  "Запустите музыку на странице, использовав интерфейс Audio, использовав песню  music.mp3",
  "Кликайте по тыковке в такт музыки! Вы смогли выполнить некоторые манипуляции на странице. Создателю лень писать php скрипты для обратной связи, так что скриншотьте что  у вас получилось, и кидайте в телегу c обратной связью @isakura4",
];

const images = ["door_red.png", "door_purple.png", "door_yellow.png"];
const monsters = ["pumkin", "lollipop", "bat"];
const monsters_on_doors = [];

for (let i = 0; i < 3; i++) {
  const monster = document.createElement("img");
  monster.src = `img/${monsters[i]}.png`;
  monster.className = monsters[i];

  monster.style.width = "60px";
  monster.style.height = "60px";
  monsters_on_doors.push(monster);
}
const [pumkin, lollipop, bat] = monsters_on_doors;

// const doors = document.querySelectorAll(".door");
// for(let i = 0; i<3; i++){
//     doors[i].insertAdjacentElement("afterend", monsters_on_doors[i]);
// }

const wrapper = document.querySelector(".wrapper"); // обертка этой штуки
const code_field = document.querySelector("textarea");
const button = document.querySelector(".add_code");
const advise = document.querySelector(".advise");

let counter = 0;
advise.textContent = instructions[counter];

button.onclick = () => {
  try {
    let code = code_field.value;
    eval(code);
    let audio = new Audio("sounds/heartbeat.mp3");
    audio.play();
    advise.textContent = instructions[++counter];
  } catch (er) {
    let audio = new Audio("sounds/witch_2.mp3");
    audio.play().then((r) => alert("Произошла ошибка"));
  }
};

for (let i = 0; i < 3; i++) {
  let door = new Img("img", `img/${images[i]}`, "просто дверь", "door"); // генерация двери
  wrapper.insertAdjacentElement("afterbegin", door.createEl());
}
