let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the Great';

// default parameter
function getName(first, last ='Chowdhury') {
    return first + ' ' + last;
}

// template string
const myPeaple = `My lovely person is ${hubby} and his full name is ${getName('Akbar')}. My name is ${priyoPerson}.

`
console.log(myPeaple);

// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrow = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers)
