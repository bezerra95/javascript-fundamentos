// Exportando um objeto em formato CommonJS
module.exports = {
    saudacao: 'Olá do CommonJS!',
    somar: (a, b) => a + b,
};


// === INTEROPERABILIDADE ENTRE COMMONJS E ES MODULES ===

console.log('=== INTEROPERABILIDADE ENTRE COMMONJS E ES MODULES ===');

// Importando um módulo CommonJS em um módulo ES
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const commonjsModule = require('./commonjs-module.js');

// Usando os dados do módulo CommonJS
console.log(commonjsModule.saudacao); // Saída: Olá do CommonJS!
console.log('Soma:', commonjsModule.somar(3, 5)); // Saída: Soma: 8
