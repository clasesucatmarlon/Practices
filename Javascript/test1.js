/* Lenguaje: Javascript
Program that: 
add 2 for every odd number   / +2 por cada num impar
add 6 for every even number  / +6 por cada num par
add 6 for every 9 you find   / +8 por cada 9 encontrado
*/

//let valores = [ 1, 5, 7, 8, 14 ]
let valores = [ 9, 2, 5, 19 ];

function Recorrer (valores) {
    let suma = 0;
    total = valores.length

    for (let i = 0; i < total; i++) {
        if (valores[i] === 9) {
            suma += 8;
        } 
        else if (valores[i] % 2 === 1) {
            suma += 2;
        } 
        else if (valores[i] % 2 === 0) {
            suma += 6;
        }
    }
    return suma;
}

total = Recorrer(valores);
console.log("El total da: ", total); // 8 + 6 + 2 + 2
