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


function sumArray (arr) {
    let div = document.createElement('div');
    document.body.append(div);
    let sum = 0; 
    for(let value of arr){
     sum+= value;
    }
    div.innerHTML = sum;
}
sumArray([1, 2, 3, 4, 5])

 //debugger
}