// switch.js

// === SWITCH ===
// Usado para comparar um valor contra vários casos possíveis.

console.log('=== SWITCH ===');

// Verificar o dia da semana com base em um número
let diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log('Hoje é Segunda-feira.');
        break;
    case 2:
        console.log('Hoje é Terça-feira.');
        break;
    case 3:
        console.log('Hoje é Quarta-feira.');
        break;
    case 4:
        console.log('Hoje é Quinta-feira.');
        break;
    case 5:
        console.log('Hoje é Sexta-feira.');
        break;
    case 6:
        console.log('Hoje é Sábado.');
        break;
    case 7:
        console.log('Hoje é Domingo.');
        break;
    default:
        console.log('Dia inválido!');
}
