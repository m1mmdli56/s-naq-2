/*  
Yazılı

1. data type-lar haqqında danışmaq
a. primitive , non-primitive
b. value , reference

data type-lar bizə məlumatın növünü bildirir 

data type-lar 2 yerə bölünür 
1. primitive - number, string, boolean, null, undefined, NaN
2. non-primitive - object, array, function

primitive data type-lar value tipindədir
non-primitive data type-lar reference tipindədir

2. value və reference type-lar yaddaşda saxlanmağına görə necə işləyir? heap və stack mövzusunu izah edin.

value type-lar stack yaddaşda saxlanılır
reference type-lar heap yaddaşda saxlanılır

stack yaddaşda kiçik ölçülü məlumatlar saxlanılır - number, string, boolean, null, undefined, NaN 

heap yaddaşda böyük ölçülü məlumatlar saxlanılır - object, array, function

3. hansı tipdə funksiyalar tanıyırsınız, kod nümünələri ilə göstərin.
1. function declaration
2. function expression
3. arrow function
4. callback function

kod nümünələri:
1.function declaration
function i() {
    console.log("Hello");
}
i();

2.function expression
const i = function() {
    console.log("Hello");
}   
i();

3.arrow function
const i = () => {
    console.log("Hello");
}
i();

4.callback function
const i = (callback) => {
    console.log("Hello");
    callback();
}   
i();

4. obyektlərin kopyalanmağı barəsində danışın.
bir obyektin başqa bir dəyişkənə təyin edilməsi ilə həmin obyektin dəyəri dəyişdirildikdə, 
hər iki dəyişkən də həmin dəyişiklikdən təsirlənir.

5. rest və spread izah edin və kod nümünələri göstərin.
rest operatoru - toplayır, yığır
spread operatoru - ayırır, genişləndirir

kod nümünələri:
rest operatoru
const number = (...numbers) => { 
    console.log(numbers);
}
number(1,2,3,4,5);

spread operatoru
*/

/*
Coding

1. bir ədəd daxil et. əgər ədəd müsbətdirsə "Müsbət", mənfidirsə "Mənfi", 0-dırsa "Sıfır" yazdır.

const number = prompt("Bir ədəd daxil edin:");
if (number > 0) {
    console.log("Müsbət");
} else if (number < 0) {
    console.log("Mənfi");
} else {
    console.log("Sıfır");
}

2. istifadəçidən rəng adını soruş. switch-case ilə həmin rəngin "əla seçimdir!" mesajını yazdır. əgər tanımırsa "naməlum rəng" yazdır.

const color = prompt("Rəng adını daxil edin:");
switch (color.toLowerCase()) {
  case "qırmızı":
    console.log("Əla seçimdir!");
    break;
  default:
    console.log("Naməlum rəng");
    break;
}

3. istifadəçinin avtomobil markası daxil etməsini istə. switch-case ilə həmin markanın hansı ölkəyə məxsus olduğunu göstər.

const carBrand = prompt("Avtomobil markasını daxil edin:");
switch (carBrand.toLowerCase()) {
  case "BMW":
    console.log("Almaniya");
    break;
    case "Toyota":
    console.log("Yaponiya");
    break;
    default:    
    console.log("Naməlum ölkə");
    break;
}

4. for dövrü ilə 1-dən 100-ə qədər cüt ədədləri çap et.

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

5. ?

6. funksiya yaz: string qəbul edib həmin stringin tərsini qaytarsın.

const reverseString = (str) => {
  return str("").reverseString();
};
console.log(reverseString("salam"));

7. funksiya yaz: bir obyekt qəbul etsin və onun bütün key:value cütlərini konsola çıxarsın.

const printObject = (obj) => {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
};
printObject({name: "Amil", age: 22, city: "Şamaxı"});

8.?
*/
