import GenerateCPF from './modules/GenerateCPF';

import './assets/css/style.css';

// Função auto-executável
(function() {
    const generate = new GenerateCPF();
    const generatedCPF = document.querySelector('.generated-cpf');
    generatedCPF.innerHTML = generate.generateNewCPF();
})();