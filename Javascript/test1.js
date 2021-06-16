/* Languaje: Javascript
Program that: 
add 2 for every odd number   / +2 por cada num impar
add 6 for every even number  / +6 por cada num par
add 6 for every 9 you find   / +8 por cada 9 encontrado
*/

//let valores = [ 1, 5, 7, 8, 14 ]
let values = [ 9, 2, 5, 19 ];

function Run (values) {
    let add = 0;
    total = values.length

    for (let i = 0; i < total; i++) {
        if (values[i] === 9) {
            add += 8;
        } 
        else if (values[i] % 2 === 1) {
            add += 2;
        } 
        else if (values[i] % 2 === 0) {
            add += 6;
        }
    }
    return add;
}

total = Run(values);
console.log("Total = ", total); // 8 + 6 + 2 + 2
