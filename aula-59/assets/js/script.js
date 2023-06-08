function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.pressButon();
        this.pressEnter();
    };

    this.pressButon = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.insertOnDisplay(element); 
            if (element.classList.contains('btn-clear')) this.clearDisplay(); 
            if (element.classList.contains('btn-del')) this.removeElement(); 
            if (element.classList.contains('btn-eq')) this.results(); 
        });
    };

    this.pressEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.results();
            }
        });
    };

    this.insertOnDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    }

    this.clearDisplay = () => this.display.value = '';
    this.removeElement = () => this.display.value = this.display.value.slice(0, -1);

    this.results = () => {
        try {
            const result = eval(this.display.value);
            
            if(!result) {
                alert('Invalid Operation');
                return;
            }

            this.display.value = result;
        } catch(e) {
            alert('Invalid Operation');
            return;
        }
    };
}

const calculator = new Calculator();
calculator.start();