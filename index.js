/*//ສະເເດງຂໍ້ຄວາມໃນຫນ້າເວັບ
document.write("soutsanouk");

alert("Hello");
console.log("Hello javascript")
console.error("ເຫັນໄວຣັດ");
console.warn("ເຫັນຂໍ້ຜິດພາດ");//0ຂໍ້ຜິດພາດເປັນສີເຫຼືອງ

//ການສ້າງຕົວເເປ
let name;//ສ້າງຕົວເເປເເຕ່ບໍ່ໄດ້ກຳນົດຄ່າ
name = "ສຸດສະໜຸກ";//ກຳນົດຂໍ້ຄວາມລົງໄປໃນຕົວເເປ name
let age = 20;

console.log(name);//ສະເເດງໃນ comsole
document.write(name);//ມັນມັນຈະສະເເດງໃນຫນ້າເວັບ
console.log("ອາຍຸ =",age);

const vat = 0.07; //ຄ່າຄົງທີ
console.log("Before",vat)
let money = 500+500;//number (integer)
let price = 99.99; //number (float)
let message ='soutsanouk';
let name = "ທ້າວກະປິ";

console.log(typeof(money));//typeof ຄຳສັງເເຊັກຊະນິດຂໍ້ມູນ
console.log(price);
console.log(message);
console.log(name);

let age = +"20.15";//parseInt,parseFloat,+ ເເມ່ນປ່ຽນຈາກ sing ເປັນ number
console.log(age);
console.log(typeof(age));
let price = 99.99.toString();//toString()ເເມ່ນປ່ຽນຈາກ number ເປັນ sting
console.log(price);
console.log(typeof(price));

//Array 1
let number = Array(100,200,300,400,500,600);
//index ເລີ່ມຕົ້ນທີ່ເລກ 0,1,2,3,4,5,6
console.log(number);
console.log(number[0]);
console.log(number[1]);

//Array 2
let colors = ["ເເດງ","ຂຽວ","ເຫຼືອງ","ສົ້ມ","ບົວ"];
colors[1] = "ຂາວ";//ວີທີປ່ຽນຄ່າ ຈາກ ຂຽວເປັນ ຂາວ
console.log(colors);
console.log(colors[0]);

//ຕົວດໍາເນີນທາງຄະນິດສາດ
console.log("ຜົນບວກ = ",20+10);
console.log("ຜົນລົບ = ",20-10);
console.log("ຜົນຄູນ = ",20*10);
console.log("ຜົນຫານ = ",20/10);
console.log("ຜົນເສດ = ",20%3);
console.log("ຍົກກຳລັງ = ",5**2);

//
let a=5 , b=10 ;
let check = false;

console.log("ເທົ່າກັນຫລືບໍ່ =",a == b);
console.log("ບໍ່ເທົ່າກັນ ຫລື ບໍ່ =",a != b);
console.log("ຫລາຍກວ່າ ຫລື ບໍ່ =",a > b);
console.log("ນ້ອຍກວ່າ ຫລື ບໍ່ =",a < b);
console.log("ຫລາຍກວ່າ ຫລື ເທົ່າກັບ =",a >= b);
console.log("ນ້ອຍກວ່າ ຫລື ເທົ່າກັບ =",a <= b);
console.log(!check);

//ຕົວດຳເນີນທາງຄະນິດສາດ
//ຕັດເກດຄະະເເນນ
//and (true) => ຊ້າຍ && ຊວາ ເປັນຈິງທັງຄູ່ 
//or (true) =>  ຊ້າຍ || ຊວາ ເປັນຈິງ
let  score = 80;
console.log(score >= 90 && score <= 100,"A");
console.log(score >= 70 && score <= 80,"B");
console.log(score >= 50 && score <= 60,"C");
console.log(score >= 30 && score <= 40,"D");
console.log(score >= 10 && score <= 20,"F");

//ຕົວດຳເນີນການເພີ່ມຄ່າ ເລະ ລົດຄ່າ
let a= 5, b = 10;
//ເພີ່ມຄ່າໃຫ້ A ກ່ອນ 1 ຄ່າເເລ້ວນໍາໄປໃຊ້ (prefix)
console.log ("ຄ່າເລີ່ມຕົ້ນ =",a);
console.log ("ເເບບ prefix =",++a);
console.log ("ຄ່າປະຈູບັດ =",a);
a= 5;
// ນໍາຄ່າປະຈູບັນໃນ a ໄປໃຊ້ກ່ອນເເລ້ວຄ່ອຍເພີ່ມຄ່າ (posfix)
console.log ("ຄ່າເລີ່ມຕົ້ນ =",a);
console.log ("ເເບບ posfix =",a++);
console.log ("ຄ່າປະຈູບັດ =",a);


//ຕົວດຳເນີນການເພີ່ມຄ່າ ເລະ ລົດຄ່າ
let a= 5, b = 10;
//ລົດຄ່າໃຫ້ b ກ່ອນ 1 ຄ່າເເລ້ວນໍາໄປໃຊ້ (prefix)
console.log ("ຄ່າເລີ່ມຕົ້ນ =",b);
console.log ("ເເບບ prefix =",--b);
console.log ("ຄ່າປະຈູບັດ =",b);
b= 10;
// ນໍາຄ່າປະຈູບັນໃນ b ໄປໃຊ້ກ່ອນເເລ້ວຄ່ອຍລົດຄ່າ (posfix)
console.log ("ຄ່າເລີ່ມຕົ້ນ =",b);
console.log ("ເເບບ posfix =",b--);
console.log ("ຄ່າປະຈູບັດ =",b);

//Comound Assignment
let x= 10,y=20;
console.log("ກ່ອນ = ",x);
x+=y;// x =x + y; ບວກ
//x-=y => x =x-y; ລົບ
//x*=y => x =x*y; ຄູນ
//x/=y => x =x/y; ຫານ
//x%=y => x =x%y; ຫານເອົາເສດ
console.log("ຫລັງ = ",x);

//ລຳດັບຄວາມສຳຄັນຂອງຕົວດຳເນີນການ
//1. 5+8*9 = 77
console.log(5+8*9)
//2. 10-4+2 = 8
console.log(10-4+2)
//3. 10-(2+1)= 7
console.log(10-(2+1))
//4. 5*2-40/5=2
console.log(5*2-40/5)
//5. 7+8/2+25=36
console.log(7+8/2+25)

//ໂຄ້ງສ້າງຄອບຄຸມ (control Structure)
//ຮູບຄຳສັງເງື່ອນໄຂດຽວ if
age = 15;
if(age >= 15 && age <= 25){
    //ຄຳສັງໃຫ້ເຮັດຫຍັງ
    console.log("ຄຳນຳຫນ້າ ນາຍ / ນາງສາວ");
}

//ການຖອນເງີນ if
let balance = 5000;
let withDraw = 2000;
if(withDraw<= balance){
    console.log("ດຳເນີນການຖອນເງີນ = ",withDraw);
    balance-=withDraw;
    console.log("ຍອດຄົງເຫຼືອ",balance);
}

//ຮູບຄໍາສັງເເບບ 2 ເງື່ອນໄຂ (if else)
//ການຖອນເງີນ
let balance = 5000;
let withDraw = 2000;

if(withDraw<= balance){
    //ເມື່ອເງື່ອນເປັນຈິງ
    console.log("ດຳເນີນການຖອນເງີນ = ",withDraw);
    balance-=withDraw;
    console.log("ຍອດຄົງເຫຼືອ",balance);
}else{
    //ເມື່ອເງື່ອນໄຂເປັນເທດ
    console.log("ຍອດເງີນຂອງເຈົ້າບໍ່ພໍ");
}

//if ຫລາຍເງື່ອນໄຂ (ຂໍ້ຄວນລະຫວັງ if ຈະເຊັກຫລາຍເງື່ອນໄຂເມື່ອເປັນຈິງ)
let score = 80;

if(score>70){
    console.log("A");
}
else if(score>60){
    console.log("B");
}
else if(score>50){
    console.log("C");
}
else if(score>40){
    console.log("D");
}else if(score>30){
    console.log("F")
}

//if ຮູບເເບບຫລາຍເງື່ອນໄຂທຸກໆເງື່ອນໄຂ
if(ເງື່ອນໄຂ 1){
    ຄຳສັງເມື່ອເງື່ອນໄຂທີ່ 1 ເປັນຈິງ;
}else(ເງື່ອນໄຂ 2){
    ຄຳສັງເມື່ອເງື່ອນໄຂທີ່ 2 ເປັນຈິງ;
}else(ເງື່ອນໄຂ 3){
    ຄຳສັງເມື່ອເງື່ອນໄຂທີ່ 3 ເປັນຈິງ;
}else(ເງື່ອນໄຂ 4){
    ຄຳສັງເມື່ອເງື່ອນໄຂທີ່ 4 ເປັນຈິງ;
}else(ເງື່ອນໄຂ 5){
    ຄຳສັງເມື່ອເງື່ອນໄຂທີ່ 5 ເປັນຈິງ;
}

//Ternary Operator
//if else ເເບບລົດຮູບ
let score = 30 ; //100 ຄະເເນນ
let pass;
//pass = score > 50? "ຜ່ານເກດ" : "ບໍ່ຜ່ານເກດ" ;
if(score>50){
    pass = "ຜ່ານເກດ";
}else{
    pass = "ບໍ່ຜ່ານເກດ";
}
console.log(pass);

//ການຂຽນ if ຊ້ອນ if
//ເຊັກອາຍຸ
let age = 16 ;
if(age <= 15){ // ເມື່ອເງື່ອນໄຂທຳອິດເປັນຈິງຈຶງເຊັກບັນທັດຕໍ່ໄປ
    if(age == 15){
        console.log("ມ 3");
    }else if(age == 14){
        console.log("ມ2");
    }else if(age == 13){
        console.log("ມ1");
    }else {
        console.log("ປະຖົມສຶກສາ");
    }
}else{
    console.log("ມ ປາຍ / ປະລິນຍາ");
}*

//switch case
let status = 0; // 0 //1
let light;
switch(status){
    case 0  : light="ປິດໄຟ";
        break;
    case 1 : light="ເປີດໄຟ";
        break;
    default : light="ບໍ່ພົບຂໍ້ມູນ";
}   
console.log(light);

//switch case
let month=10;
let name;
switch(month){
    case 1 : name="ມັງກອນ";
        break;
    case 2 : name="ກຸ່ມພາ";
        break;
    case 3 : name="ມີນາ";
        break;
    case 4 : name="ເມສາ";
        break;
    case 5 : name="ພຶດສະພາ";
        break;
    case 6 : name="ມີຖູນາ";
        break;
    case 7 : name="ກໍລະກົດ";
        break;
    case 8 : name="ສິງຫາ";
        break;
    case 9 : name="ກັນຍາ";
        break;
    case 10 : name="ຕຸລາ";
        break;
    case 11 : name="ພາຈິກ";
        break;
    case 12 : name="ທັນວາ";
        break;
    default : name="ບໍ່ພົບຂໍ້ມູນ";
}
console.log(name);

//ໂປເກຣມຄຳນວນເລກຄູ່ ຫາ ເລກຄີກ
let x=45;
if(x%2 == 0){
    console.log("ເລກຄູ່");
}else {
    console.log("ເລກຄີກ");
}

//ໂປເກຣມປຽບທຽບຕົວເລກ
let x=100,y=100;
if(x>y){
    console.log("x ໃຫ່ຍຫວ່າ");
}else if(x<y){
    console.log("y ໃຫ່ຍກວ່າ");
}else{
    console.log("ມີຄ່າເທົ່າກັນ")
}

//ເເບບເຮັດຊໍ້າໆ(LOOp)
//break ສັງໃຫ້ຍຸດການທຳງານ / continue ໃຫ້ກະໂດດຂ້າມ
//while Loop ຈະທຳງານຕາມຄຳສັ່ງພາຍໃນ while ໄປເລື່ອຍໆເມື່ອເງື່ອນໄຂທີ່ກຳນົດເປັນຈິງ
let cont = 1;//ຈຳນວນນັບຮອບ
while(cont<=5){
    console.log("ຜະລິດສິນຄ້າ = ",cont);// 1.2.3
    if(cont == 3 ){//ເງືອນໄຂຄຳສັ່ງເເບັກ
        break;
    }
    cont++;// 1=>2=>3
}

//for LOOp ຈະທຳງານຕາມຄຳສັ່ງໄປເລື່ອຍໆເມື່ອເງື່ອນໄຂທີ່ກຳນົດເປັນຈິງ
for(let i = 1;i<=10;i++){
    console.log("hello word = ",i);
}

//Do while ໂປຮເເກຣມທຳງານກ່ອນຢ່າງນ້ອຍ 1 ຮອບເເລ້ວຈາກນັ້ນຈຶ່ງມາກວດສອບເງື່ອນໄຂ
let count = 1;
do{
    console.log("Hello",count);
    count++;
}while(count<=5);


//ຂໍ້ເເຈກຕ່າງເເລະການໃຊ້ງານ Loop
//for ໃຊ້ງານໃນກໍລະນີ ຮູ້ຈໍານວນຮອບ ທີ່ຊັດເຈນ
//while ໃຊ້ໃນກໍລະນີທີ່ ບໍ່ຮູ້ຈຳນວນຮອບ
//Do while ໃຊ້ໃນກໍລະນີທີ່ຍາກໃຫ້ ລອງທຳກ່ອນ 1 ຮອບ ເເລ້ວທຳຂໍ້າໄປເລື່ອຍໆເທົ່າທີ່ເງື່ອນໄຂເປັນຈະງ

//ການໃຊ້ຄຳສັ່ງ Break ໃຫ້ຢຸດທຳຊໍ້າເມື່ອເງື່ອນໄຂເປັນຈິງ
for(let count = 1; count <=10;count++){
    if(count==5)break;//ການໃຊ້ຄຳສັ່ງ Break
    console.log(count);
}
console.log("ຈົບໂປຣເເກຣມ")

//ການໃຊ້ຄຳສັ່ງ continue ໃຫ້ຢຸດທຳຊໍ້າເມື່ອເງື່ອນໄຂເປັນຈິງ
for(let count = 1; count <=10;count++){
    if(count==5)continue;//ການໃຊ້ຄຳສັ່ງ continue ກໍຄືການກະໂດດຂ້າມຮອບນັ້ນເເລ້ວໄປທຳຊໍ້າໃນຮອບໃຫ່ມ
    console.log(count);
}
console.log("ຈົບໂປຣເເກຣມ")

//ຄ່າ null ບໍ່ມີຕ່າອີຫຍັງເລີຍ ເເຕ່ຖ້າຫາກນໍາໄປປຽບທຽບດ້ວຍເງື່ອນໄຂຈະມີຄ່າ false
let a=null;//ຄ່າ false
if(!a){
    console.log("a ເເມ່ນ null");
}else{
    console.log("a ບໍ່ເເມ່ນ null")
}*/
//ຄ່າ undefined ຄືຕົວເເປທີ່ປະກາດເອົາໄວ້ເຕ່ບໍ່ໄດ່ກຳນົດຄ່າໃດໆ ຍົກຕົວຢ່າງlet a; alert(a);
//ຄ່າ NaN (Not a number )ການນໍາຕົວເເປທີ່ບໍ່ເເມ່ນຕົວເລກໄປຄຳນວນທາງຄະນິດສາດ


/*
//ຮູບເເບບຂອງຟັງຊັ້ນ
//ຟັງຊັນທີ່ບໍ່ມີການຮັບຄ່າ ເເລະ ສົ່ງຄ່າ
 function print(){
    console.log("Hello");
 }

 function message(){
    alert("ເເຈ້ງເຕື່ອນໂອນເງີນ")
 }

//function ເບິ່ງລາຍຊື່
 function displayName(){
    document.write("soutsanouk");
 }

 //function ທີ່ມີການຮັບຄ່າເຂົ້າມາທຳງານ
 function plusNumber(x){
    console.log("ເລກທີ່ສົ່ງມາ",x);
 }
plusNumber(5);
plusNumber(10);
let number = 200;
plusNumber(number)

//
function fullname(fname,lname,city){
    console.log("ຊື່ = ",fname , "ນາມສະກຸນ = ",lname,"ເມື່ອງ",city)
}
fullname("ກະປີ","ບຸດຄຳມ່ວນ","ລະມາມ");
fullname("ສັນຕີສຸກ","ວິໄລມ່ວນ","ລະມາມ");

//
function sumation(x,y){
    let total = x+y;
    console.log("ຜົນລວມ",total)
}
sumation(10,50);
sumation(20,50);


//ຟັງຊັນທີ່ມີການສົ່ງຄ່າອອກມາ
function getip(){
    return "192.168.1.1";
}
function getmyAddress(){
    let city = "ລະມາມ";
    return city;
}
let myip = getip();
console.log("ໄອພີ",myip);
console.log("ທີ່ຢູ່",getmyAddress());

//ຟັງຊັນທີ່ມີການຮັບຄ່າເຂົ້າມາ ເເລະ ສົ່ງຄ່າອອກໄປ
//ຜົນລວມຂອງຕົວເລກ
function setsalary(salary){
    let bonus = 1000;
    return salary+bonus;
}
//ເງີນເດືອນລວມຂອງ ເອ
let a = setsalary(15000);
a-=500;//ສົມມຸດຢາກລົບອອກ
console.log("ເງີນເດືອນລວມ",a);
//ເງີນເດືອນລວມຂອງ ບີ
let b = setsalary(20000);
console.log("ເງີນເດືອນລວມ",b);

function summation(x,y){
    return x+y;
}
let sum = summation(100,200);
console.log("ຜົນບວກ",sum);


function summation(name,city){
    return name+city;
}
let sum = summation("ໃຈດີ","ລະມາມ");
console.log("ຜົນບວກ",sum);

//ຟັງຊັນເເບບຄາເລີ່ມຕົ້ນ
function full(fname,lname,city="ນະຄອນຫຼວງວຽງຈັນ"){
    console.log("ຊື່",fname,"ນານສະກຸນ",lname,"ທີ່ຢູ່",city);

}
full("ສີ","ນາມນາາສັກ","ໂນນມີໄຊ");
full("ອຳ","ໂປເເລນ","ວຽງຈະເລີນ");
full("ດຳ","ສີພາພອນ");

//ຂອບເຊດຈົວເເປ local variable,Global variable
let a = 100;//Global

function display(){//local
    let b = 200;
    console.log("ຕົວເເປ",a);
    console.log("ຕົວເເປອື່ນ",b);
}

console.log('Global',a);
display();

//Array Properties 
//ຫາຈຳນວນສະມາຊິກ ເເລະ ລຽນລຳດັບ
let color = ["ເເດງ","ຂາວ","ເຫລືອງ","ຟ້າ"];
let cont = color.length;
console.log("ກ່ອນ",color);
let result = color.sort();
console.log("ຫລັງ",result);

//
let foods = ["ເເອັບເປີ້ນ","ຖົ່ວລຽນ","ສີດາ","ກ້ຽງ"];
console.log(foods.sort());//ລຽນພະຍັນຊະນະໃຊ້ໄດ້ສະເພາະ String
console.log(foods.reverse());//ລຽນສະຫຼະ

//ສະມາຊິກ ຕົວວເເລກ ເເລະ ຕົວສຸດທ້າຍ
let color = ["ເເດງ","ຂາວ","ເຫລືອງ","ຟ້າ"];
console.log(color[0]);//ຫາສີເລີ່ມຕົ້ນ
console.log(color[color.length-1]);//ຫາສີສູດທ້າຍ

//ການເພີ່ມສະມາຊິກ
let colors = ["ເເດງ","ບົວ","ສົ້ມ","ຂາວ"];
console.log("ກ່ອນ",colors);

colors.push("ດຳ");//ເພີ່ມວີດຳເຂົ້າ
colors.push("ເຫລືອງ");
console.log("ຫລັງ",colors);

//ການເຂົ້າເຖິງສະມາຊີກດ້ວຍ ForLoop
let color = ["ເເດງ","ນໍ້າເງີນ","ເຫລື່ອງ","ຂຽວ","ນໍ້າຕານ","ທະເລ","ຟ້າ","ບົວ","ມົວະ"];

console.log(color.length);
for(let a = 0 ;a<color.length;a++){
    console.log("ລະດັບທີ = ",a ,"ມີຄ່າ =",color[a]);//(a+1) ເລີ່ມຈາກ 1 
}

//ການເຂົ້າເຖິງສະມາຊີກດ້ວຍ ForEach
let color = ["ເເດງ","ນໍ້າເງີນ","ເຫລື່ອງ","ຂຽວ","ນໍ້າຕານ","ທະເລ","ຟ້າ","ບົວ","ມົວະ"];
color.forEach(myData);

function myData(item){
    console.log(item);
}

//ເເປງ Array ເປັນ String 
let color = ["ເເດງ","ນໍ້າເງີນ","ເຫລື່ອງ","ຂຽວ","ນໍ້າຕານ","ທະເລ","ຟ້າ","ບົວ","ມົວະ"];
let x = color.toString();//ຄຳສັ້ງ totring
console.log(x);

//ເເປງ Array ເປັນ String 
let color = ["ເເດງ","ນໍ້າເງີນ","ເຫລື່ອງ","ຂຽວ","ນໍ້າຕານ","ທະເລ","ຟ້າ","ບົວ","ມົວະ"];
let x = color.join("*");//ຄຳສັ້ງ join ໝາຍເຖິງປ່ຽນ , ເປັນ *
console.log(x);

//ການໃຊ້ຄຳສັ່ງ pop
let color = ["ເເດງ","ນໍ້າເງີນ","ເຫລື່ອງ","ຂຽວ","ນໍ້າຕານ","ທະເລ","ຟ້າ","ບົວ","ມົວະ"];
console.log(color);
let x = color.pop();//ເກັບຈຳນວນ pop ມາຢູ່ທີ່ x
color.pop();// ການລົບຕົວສຸດທ້າຍອອກ
color.pop();
console.log(x);

//ການລວມ Array (concat)
let a=["ຜັກກາດ","ຜັກບົວ"];
let b= ["ສົ້ມ","ທຸລຽນ","ລຳໄຍ"];
let c= ["ຈານ","ຊາມ"];

 a=a.concat(b,c);
console.log(a);

//ການລຽນລຳດັບໃນ Array 
let p = [20,-5,-2,40,,100,-500,150];
console.log(p);
//ຈາກນ້ອຍໄປຫາຫຼາຍ aເປັນຄ່າ- bເປັນຄ່າ+
p.sort(function(a,b){
    return a-b;//b-a ຈາກຫລາຍໄປຫານ້ອຍ
});
console.log(p);

//javascript Object
let product = {
    name : "ເມົາສ",
    price : 50000,
    color : "black",
    category :"computer",
    size :"M"
};
console.log("ຊື່ສິນຄ້າ",product.name);
console.log("ລາຄາສິນຄ້າ",product.price);

//javascript Object(Method)
let product = {
    name : "ເມົາສ",
    price : 50000,
    color : "black",
    category :"computer",
    size :"M",
    displayProduct:function(){//ໃຊ້ສະເເດງຜົນຂໍ້ມູນສີນຄ້າ
        return "ຊື່ສິນຄ້າ = "+ this.name +"ລາຄາ = "+this.price +"ສີ = " + this.color + "ໝວດໝູ່ = "+this.category +"ຂະໜາດ = "+this.size;
    },
    discount : function(){//ຟັງຊັນສ່ວນລຸດ
        return this.price - 10000;
    },
    getcolor : function(){
        return this.color;
    }

};
//ການເອີ້ນໃຊ້ methot
console.log(product.displayProduct());
console.log("ຫລຸດເຫລືອ = "+product.discount());
console.log(product.getcolor());

//ການຍືນຢັ້ນ confirm(ຂໍ້ຄວາມ)
function deleteData(){
    let result = confirm("ເຈົ້າຕ້ອງການລົບຂໍ້ມູນ ຫລືບໍ່")
    console.log(result);
    if(result){
        console.log("ລົບຂໍ້ມູນຮຽບຮ້ອຍ");
    }else{
        console.log("ຍົກເລີກການລົບຂໍ້ມູນ");
        
    }
}

//HTML DOM (Document Object Model)
const a = document.querySelector('#demo');//ການອ້າງອິງ id
const b = document.querySelector('.myjs');//ການອ້ງອິງ class
const C = document.querySelectorAll('p');//ການອ້ງອິງ Tag ທັງໝົດ
//const ເເມ່ນຄ່າຄົງທີ

//console.log(a);
//console.log(b);
console.log(C);

//HTML DOM (Document Object Model)
const a = document.querySelector('#demo');//ການອ້າງອິງ id
const b = document.querySelector('.myjs');//ການອ້ງອິງ class
const C = document.querySelectorAll('p');//ການອ້ງອິງ Tag ທັງໝົດ

const box = document.querySelector('.light');


//const ເເມ່ນຄ່າຄົງທີ
function displayText(){
   // a.style.color="red";
   // a.style.backgroundColor="yellow";
   // a.style.fontSize="60px";
   box.setAttribute('class','dark');
   light.setAttribute('class','light');
}

 //darkmode\lightmode \box.setAttribute('class','light');

 const box = document.querySelector('.light');

 function darkmode(){
    box.setAttribute('class','dark');
 }
 function lightmode(){
    box.setAttribute('class','light');
 }

    //ການສ້າງ Element li /ນໍາ element ໄປຕໍ່ໃນ node ເເມ່່
const menu = document.getElementById('menu');
let count = 1;
function addItem(){
    const item = document.createElement('li');
    item.innerText = "Item"+(count++);
    menu.appendChild(item);
}

//ການລົບ node ລູກ
const menu = document.getElementById('menu');
const item = document.getElementById('item-3');

function deleteitem(){
    menu.removeChild(item);
}

//ການເເທນທີ element\ menu.removeChild(item);
const menu = document.getElementById('menu');
const item = document.getElementById('item-3');
const itemB = document.getElementById("item-2");
const newItem =document.createElement("li");
newItem.innerText = "x";


function replaceItem(){
    menu.replaceChild(newItem,itemB);
}
function deleteitem(){
    menu.removeChild(item);
}

//Dom css Add \ Remove class
const box= document.getElementById('BOX'); 
let status;

function addDarkMode(){
    box.classList.add("darkMode")//ເພີ່ມ style
}

function removeDarkMode(){
    box.classList.remove("darkMode")//ລົບ style
}

function switchMode(){
    box.classList.toggle("darkMode")//ສະຫຼັບ style
    
    if(box.classList.contains("darkMode")){
        box.style.color="yellow;"
    }else{
        box.style.color="red";
    }
}

//Dom Event
function welcom(){
    alert("ຍິນດີຕອນຮັບເຂົ້າສູ່ຫນ້າເວັບ");
}

function hightlight(obj){
    obj.style.background = "yellow";
}
function unhightlight(obj){
    obj.style.background = "black";
}
function getMenu(){
    const menu =document.getElementById('menu');
    const display = document.getElementById('display');
    console.log(menu.Value.toUpperCase());
    display.innerText = menu.Value;
}

function highlight(obj){
    obj.style.background = 'yellow';
}

function unhighlight(obj){
    obj.style.background='red';
}*/

//EventListenerອ
//ອ້າງອີງ
const menu = document.getElementById('menu');
const display = document.getElementById('display');
const btn = document.getElementById('btn');



//event
menu.addEventListener('change',getMenu);
btn.addEventListener('click',showwelcom);
function getMenu(){
    display.innerText=menu.value;
}

function showwelcom(){
    alert("ຍິນດີເຂົ້າສູ່ໜ້າເວັບ")
}

