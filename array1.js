const arrEven = [6, 10, 4, 8, 2];
const arrOdd = [5, 11, 9, 1, 7, 3];

let minEven = arrEven[0];
let maxOdd = arrOdd[0];
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < arrEven.length; i++){
    if (arrEven[i] < minEven) {
        minEven = arrEven[i];
    }
    sumEven += arrEven[i];
}

for (let i = 0; i < arrOdd.length; i++) {
    if ( arrOdd[i] > maxOdd) {
        maxOdd = arrOdd[i];
    }
    sumOdd += arrOdd[i];
}

const avgEven = sumEven / arrEven.length;
const avgOdd = sumOdd / arrOdd.length;

console.log("Nilai maksimum lebih besar pada array ganjil: " + sumEven);
console.log("Total lebih besar pada array ganjil: " + sumOdd);
console.log("Rata-Rata lebih besar pada array ganjil: " + avgOdd)