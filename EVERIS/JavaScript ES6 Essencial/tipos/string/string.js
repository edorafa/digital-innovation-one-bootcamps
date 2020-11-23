// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(textSize);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

// Busca por um valor e sbstitui por outro
const replacedText = 'Texto'.replace('Texto', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeria letra menos a última: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondToEnd);

// Retorna N CARACTERS A PARTIR DE UMA POSIÇÃO
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);
