export default class Door{
    constructor(name, src, alt) {
        this.name = name;
        this.src = src;
        this.alt = alt;
    }
    createEl(){
        console.log("СОздаю элемент")
        let el = document.createElement(this.name);
        el.src = this.src;
        el.alt = this.alt;
        return el;
    }
}
