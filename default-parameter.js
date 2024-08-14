function add(num1, num2=33) {
    // oftion 2
    // num2 = num2 || 0;
    // oftion 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 0);
console.log(result);

const fullName(first, last='Chowdhury'){
    const name = first + '' + last;