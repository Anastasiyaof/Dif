{ //switch-case
    //1
    /* function fun (n) {
        switch(n){
            case 1: n = "first"
            break;
            case 2: n = "second"
            break;
            default: n = "No such value"
        }
        alert(n)
    }
    fun (1);
    fun (2);
    fun (3); */

   //2
   /*  const number = +prompt('Введите число между 0 и 3', '');
switch(number){
    case 0: alert('Вы ввели число 0')
    break;
    case 1: alert('Вы ввели число 1')
    break;
    case 2:
    case 3: 
    alert('Вы ввели число 2, а может и 3');
} */

//3
/* function decade (day) {
    if(day <= 0 || day > 31) return alert("Incorrect day");
    if(day <11) alert("first month decade");
    else if(day<21 ) alert("second month decade");
    else alert("third month decade");
} */


//4
/* function firstLetterA (str) {
    switch(str[0]){
        case "a": alert('Yes')
        break;
        default: alert('No');
    }
}
firstLetterA ("abcd");
firstLetterA ("bcd");
 */

//5
/* function sumFromStr (str) {
    let sum = 0;
    for(let i = 0;i<str.length;i++){
      sum+= +str[i]
    }
    return sum
} */


//debugger
}


{//loops
 //1
 /* function fun () {
    let div = document.createElement('div');
     document.body.append(div);
     for(let i = 1; i< 51; i++) {
      div.insertAdjacentHTML("beforeend",`<p>${i}</p>`)
     }
 }
 */


 //2
/*  function fun (){
   let n = 11;
   let div = document.createElement('div');
     document.body.append(div);
     while(n<34) {
         div.insertAdjacentHTML('beforeend',`${n}<br/>`)
         n++
     }
 } */

//3
/* function writeEvens () {
   let n = 0;
   let div = document.createElement('div');
     document.body.append(div);
     while(n < 101) {
         if (n%2 == 0){
        div.insertAdjacentHTML('beforeend',`${n}<br/>`)}
        n++
     }
} 

writeEvens ();
*/

//4
/* function writeArray(arr) {
    let div = document.createElement('div');
     document.body.append(div);
for(let value of arr){
    div.insertAdjacentHTML('beforeend',`${value}<br/>`)
}

}
 writeArray([1, 2, 3, 4, 5])
 */

//5
/* function sumArray (arr) {
    let div = document.createElement('div');
    document.body.append(div);
    let sum = 0; 
    for(let value of arr){
     sum+= value;
    }
    div.innerHTML = sum;
}
sumArray([1, 2, 3, 4, 5]); */

//6
/* function objKeys () {
    let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
    for (let key in obj) { 
        console.log(key+":"+ obj[key])
    }
}
objKeys(); */


//7
/* function salary () {
    let obj = {
        Петя: 2000,
        Вася: 1000,
        Коля: 1500,
    }

    let div = document.createElement('div');
    document.body.append(div);
    for(let key in obj) {
        div.insertAdjacentHTML('beforeend',`${key} - зарплата ${obj[key]}; <br/>`)
    }
}
salary(); */

//8
/* function fun () {
    let arr = [2,5,9,15,0,4];
  for(let value of arr) {
      if(value >3 && value <10) console.log(value)
  }
} */


//9
/* function fun () {
    let arr = [1,-2,3,5,2,-8,-1,0];
    let sum = 0;
    for(let value of arr) {
        if(value>0) sum+= value
    }
    console.log(sum);
} */

//10
/* function arrInclude(arr,n) {
    for(let value of arr) {
        if(value == n) {
            alert(`Array include ${n}`);
        break;}
    }
}

arrInclude([1, 2, 5, 9, 4, 13, 4, 10],4); */

//11
/* function beginFrom (arr,...args) {
    for(let value of arr){
        for(let arg of args){
            if(value.toString()[0] == arg) console.log(value);
        }
    }
}

beginFrom([10, 20, 30, 50, 235, 3000],1,2,5); */

//12
/* function strFromArray (arr) {
    let str = "";
    for (let value of arr) {
        str += (value +"-");
    }
    str.slice(-1,1);
    console.log(str.slice(0,str.length-1));
}

strFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]); */

//13
/* function fun() {
 let arr = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"];
 let div = document.createElement('div');
 document.body.append(div);
  for(let day of arr){
      if(day == "СБ" || day == "ВС") {
        div.insertAdjacentHTML('beforeend',`<i>${day}</i><br/>`)
      }
     else div.insertAdjacentHTML('beforeend',`${day}<br/>`);
  }
}
fun(); */


//14
/* function currentDay(){
    let days = ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"];
    let div = document.createElement('div');
 document.body.append(div);
 let today = new Date().getDay();
  for(let i=0; i< days.length;i++){
      if(i == today) {
        div.insertAdjacentHTML('beforeend',`<b>${days[i]}</b><br/>`)
      }
     else div.insertAdjacentHTML('beforeend',`${days[i]}<br/>`);
  }
}
currentDay(); */


//15
function fun (){
    let n = 1000;
    let result = n;
    while(result>50){
        result /= 2
    }
 console.log(result);
}
fun();

 //debugger
}