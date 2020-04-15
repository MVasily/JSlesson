class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    createDiv() {
        let div = document.createElement('div');

        div.innerText = 'Lorem Ipsum Dolor';
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;

        document.querySelector('body').appendChild(div);
        console.log(this);
    }
}

let opt1 = new Options('120px', '140px', 'purple', '20px', 'center');

opt1.createDiv();