class ValidateForm {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkFields();
        const validPasswords = this.checkPasswords();

        if (validFields && validPasswords) {
            alert('Formulário enviado.');
            this.form.submit();
        }
    }

    checkFields() {
        let valid = true; 

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText.replace(':', '');
            if(!field.value) {
                this.createError(field, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }
            
            if(field.classList.contains('input-cpf')) {
                if(!this.validateCPF(field)) valid = false;
            }

            if(field.classList.contains('input-user')) {
                if(!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    checkPasswords() {
        let valid = true;

        const password = this.form.querySelector('.input-password');
        const confirmPassword = this.form.querySelector('.input-confirm-password');

        if(password.value !== confirmPassword.value) {
            valid = false;
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais');
            this.createError(confirmPassword, 'Campos senha e repetir senha precisam ser iguais');
        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'Senha precisa ter entre 6 e 12 caracteres.');
        } 

        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

    validateCPF(field) {
        const cpf = new ValidateCPF(field.value);
        if(!cpf.validate()) {
            this.createError(field, 'CPF inválido.');
            return false;
        }
        return true;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;
        if(user.length < 3 || user.length > 12) {
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Usuário só pode conter letras e/ou números');
            valid = false;
        }
        return true;
    }
}

const valida = new ValidateForm();