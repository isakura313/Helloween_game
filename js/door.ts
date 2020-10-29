export default class Door{
    constructor(name, src, alt, classText) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.classText = classText;
    }
    createEl(){
        let el = document.createElement(this.name);
        el.src = this.src;
        el.alt = this.alt;
        el.classList.add(this.classText);
        return el;
    }
}
