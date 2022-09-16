/* 
    변수 variable
    var, let 키워드
*/

//변수 선언 
var peach;
console.log(peach);
//변수 선언만 하고 값을 부여받지 못하여 Run code시 undefined 라고 뜬다.

//변수 선언 후 대입
var peach;//변수 선언
peach = 2000//변수 peach에 숫자 2000을 대입
console.log(peach);//변수의 값 2000출력

//변수 선언 동시에 대입
var peach;
peach = 2000;
console.log(peach);
peach = 5000;//console.log를 하지 않았기에 선언된 2000만 run code에 출력
console.log(peach);//값은 합쳐지지 않고 같이 출력

//여러 개의 변수를 동시에 선언
let ab, cd, ef;
ab = 2, cd = 5, ef = ab + cd;
console.log(ab);
console.log(cd);
console.log(ef);

//한 줄에 여러 개의 변수 선언과 동시에 값 대입
let 변수1 = 11, 변수2 = 22, 합계 = 변수1 + 변수2;
let num1 = 123, num2 = 234, sum = num1 + num2;
console.log(합계);
console.log(sum);
console.log(sum + 합계);

// 상수 변하지 않는 값 
// const 키워드 선언