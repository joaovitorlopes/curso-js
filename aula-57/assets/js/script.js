function createCalculator() {
    return {
        //atributos
        display: document.querySelector('.display'),
        //métodos
        start() {
            this.pressButton();
            this.pressEnter();
        },

        pressButton() {
            document.addEventListener('click', (event) => {
                const element = event.target;

                if(element.classList.contains('btn-num')) {
                    this.insertOnDisplay(element.innerText);
                }

                if(element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(element.classList.contains('btn-del')) {
                    this.deleteElement();
                }

                if(element.classList.contains('btn-eq')) {
                    this.results();
                }

                this.display.focus();
            });
        },

        pressEnter() {
            this.display.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    this.results();
                }
            });
        },

        insertOnDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteElement() {
            this.display.value = this.display.value.slice(0, -1);
        },

        results() {
            let result = this.display.value;

            try {
                result = eval(result);

                if(!result) {
                    alert('Invalid Operation');
                    return;
                }

                this.display.value = String(result);
            } catch (e) {
                alert('Invalid Operation');
                return;
            }
        },
    };
}

const calculator = createCalculator();
calculator.start();