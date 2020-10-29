export default class Textarea{
    constructor(name, cols, rows, classText) {
        this.name = name;
        this.cols = cols;
        this.rows = rows;
        this.classText = classText;
    }
    createEl(){
        let el = document.createElement(this.name);
        el.cols = this.cols;
        el.rows = this.rows;
        el.classList.add(this.classText);
        return el;
    }
}
