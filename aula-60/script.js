// FUNÇÕES RECURSIVAS
// A função chama si mesma ao fim de sua execução;
function recursiva(max) {
    console.log(max);
    if (max > 10) return; // IMPORTANTE DEFINIR QUANDO PARAR!
    max++;
    recursiva(max);
}

recursiva(0);