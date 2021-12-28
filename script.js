//Write a function findMax that takes three arguments and returns their maximum.

let number1 = 24;
let number2 = 18;
let number3 = 21;

function findMax(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;

  } else if (number2 > number1 && number2 > number3) {
    return number2;

  } else {
    return number3;
  }

}
console.log(findMax(number1, number2, number3));


//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.

let integer = prompt("Pozitif bir sayı giriniz:");

function evensAndOdds(integer) {
  if (integer % 2 === 0) {
    return console.log(`Sayı ${integer}: Çift sayıdır.`)

  } else {
    return console.log(`Sayı ${integer}: Tek sayıdır.`)
  }
}
evensAndOdds(integer);


//Write a function which generates a randomUserIp. Ex: 168.127.25.2

function randum(minVal, maxVal) {
  let randVal= minVal + (Math.random() * (maxVal - minVal));
  return Math.round(randVal);
}

console.log(randum(101,999)+"."+randum(101,999)+"."+randum(11,99)+"."+randum(1,9));

//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

function namet(firstName, lastName){
  console.log(firstName+" "+lastName+","+" "+"Adınızdaki karakter sayısı:"+firstName.length);
}
namet("Kerem", "Çalışkan");