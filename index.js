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
    /* function fun (){
        let n = 1000;
        let result = n;
        while(result>50){
            result /= 2
        }
     console.log(result);
    }
    fun(); */

    //debugger
}


{//Math
    //1
    /* function fun (a,b) {
      if(a%b == 0) alert(`Делится без Остатка! ${a/b}`);
      else alert(`Делится с остатком! Остаток ${a%b}`);
    }  
    fun(10,3); */

    //2
    /* function sqrtFromPowSum(arr){
      let pow =[];
      for(let n of arr) {
          pow.push(n**2);
      }
      let sum = 0;
      for(let num of pow){
          sum += num
      }
      console.log(Math.sqrt(sum))
    }
    
    sqrtFromPowSum([4, 2, 5, 19, 13, 0, 10]); */

    //3
    /* function difRound(n){
        let num = Math.sqrt(n);
        console.log(Math.round(num));
        console.log(Math.floor(num*10)/10);
        console.log(num.toFixed(1));
        console.log(Math.floor(num*100)/100);
        console.log(num.toFixed(2));
    }
    difRound(379) */

    //4
    /* function fun (n) {
       let num = Math.sqrt(n);
       let obj = {};
       obj.floor = Math.floor(num);
       obj.ceil = Math.ceil(num);
       obj.num = num;
       console.log(obj);
    }
    fun(587); */

    //5
    /* function foundMinMax(arr,minOrMax){
        if(minOrMax == "min"){
            alert(Math.min(...arr))
            return
        }
        if(minOrMax == "max"){
            alert(Math.max(...arr))
            return
        }
    }
    foundMinMax([4, -2, 5, 19, -130, 0, 10],"min");
    foundMinMax([4, -2, 5, 19, -130, 0, 10],"max"); */

    //6
    /* function randomBetween(a,b){
        console.log(Math.floor(a+Math.random()*(b-a+1)))
    }
    randomBetween(1,100); */

    //7
    /* function randomArray(length){
        let arr = [];
        while(arr.length < length){
            let item = Math.random()*101;
            arr.push(Math.floor(item));
        }
        console.log(arr)
    }
    randomArray(10); */

    //8 
    /* function average(arr){
      let sum = arr.reduce((s,item)=>s+item,0);
       console.log(sum/arr.length)
    }
    
    average([1,2,3,4]); */

    //9
    /* function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        console.log(result);
    }
    factorial(4); */


    //debugger
}

{//String
    //1
    /* function cutString(str,length){
      let result = str;
        if(str.length > length){
            result = str.substr(0,length)+"...";
        }
     console.log(result)
    }
    
    cutString("я учу javascript!",5); */


    //2
    /* function replaceSymbol(str,from,to){
     let reg = new RegExp(`${from}`,"g")
      console.log(str.replace(reg,to))
    }
    replaceSymbol('я учу javascript!'," ","-"); */

    //3
    /* function splitByWord(str){
      console.log(str.split(" "));
    }
    splitByWord('я учу javascript!'); */

    //4
    /* function changeDateFormat(str){
      let arr = str.split('-');
      console.log(`${arr[2]}.${arr[1]}.${arr[0]}`)
    }
    
    
    changeDateFormat('2025-12-31'); */

    //4
    /* function fun (arr) {
       
        console.log( arr.join("+"));
    }
    
    fun(['я', 'учу', 'javascript', '!']) */


    //5
    /* function everyFirstToUpperCase (str) {
        let arr = str.split("");
        for(let i=0; i < arr.length;i++){
            if(i == 0 || arr[i-1] == " "){
              arr[i] = arr[i].toUpperCase();
            }
        }
        console.log(arr.join(""));
    }
    
    everyFirstToUpperCase('я учу javascript!'); */


    //6
    /* function toCamelCase(str){
      let arr = str.split("");
      let st = "";
      for(let i=0;i< arr.length;i++){
          if(arr[i] == "_") {
              st += arr[i+1].toUpperCase()
          } else if(arr[i-1] == "_") {
              continue
          } else st += arr[i];
      }
      console.log(st)
    }
    
    toCamelCase('var_test_text'); */

}

{//Array

    //1
    /* function newArrFromArrs (arr1,arr2) {
        console.log(arr1.concat(arr2))
    }
    
    newArrFromArrs(['a', 'b', 'c'],[1, 2, 3]) */


    //2
    /* function unitArrays(arr1,arr2) {
        for(let item of arr2){
            arr1.push(item)
        }
        
        console.log(arr1)
    }
    
    unitArrays(['a', 'b', 'c'],[1, 2, 3]) */

    //3
    /* function fun (array,n) {
        let arr = array.slice(0,n);
        console.log(arr)
    }
    fun([1,2,3,4,5,6,7],3); */

    //4
    /* function fun (array,n) {
        let arr = array.slice(-n);
        console.log(arr);
    }
    fun([1,2,3,4,5,6,7],3);
     */

    //5
    /* function fun (arr) {
      arr.splice(1,2);
      console.log(arr);
    }
    fun([1,2,3,4,5,6,7]) */


    //6
    /*  function fun (array) {
       let arr = array.splice(1,3);
       console.log(arr);
     }
     fun([1,2,3,4,5,6,7]) */


    //7
    /*  function fun (arr) {
        arr.splice(2,0,"a","b","c");
        console.log(arr);
      }
      fun([1,2,3,4,5,6,7])  */

    //8
    /*  function fun (arr) {
      arr.splice(1,0,"a","b");
      arr.splice(5,0,"c");
      arr.splice(7,0,"d");
       console.log(arr);
     }
     fun([1,2,3,4,5,6,7])  */


    //9
    /* function fun (arr) {
        arr.splice(1,2,"two","three");
        arr.splice(5,2,"six","seven");
         console.log(arr);
       }
       fun([1,2,3,4,5,6,7]) */

    //10
    /* function fun(arr) {
        arr.sort((a,b)=> a-b);
        console.log(arr)
    }
    
    fun([3, 4, 1, 2, 7]); */

    //11
    /* function arrFromObjKeys (obj) {
        let arr = [];
        for(let key of Object.keys(obj)){
            arr.push(key)
        }
        console.log(arr);
    }
    
    arrFromObjKeys({js:'test', jq: 'hello', css: 'world'}); */

}

{ //some

    //1
    /* function fun (str) {
     let up = str[0].toUpperCase() + str.slice(1,(str.length-1))
     console.log(up)
    }
    fun("abcde"); */


    /* function fun (str) {
        let arr = str.split('');
       arr[0] = arr[0].toUpperCase();
        console.log(arr.join(''));
       }
       fun("abcde"); */

    //2
    /* function fun (str) {
      let arr = str.split("");
      console.log(arr.reverse().join(''))
    }
    fun('123456'); */


    //3
    /* function startStr(str,start) {
        console.log(str.startsWith(start))
    }
    startStr("http://old.code.mu/","http://");
    
    function endStr(str,end) {
        console.log(str.endsWith(end))
    }
    
    endStr("index.html",".html"); */

    //4
    /* function numPiramide() {
        str = "1";
    for(let i = 1; i<10;i++) {
    str = ""+i;
    console.log(str.repeat(i))}
    }
     numPiramide(); */


    //5 
    /*  function numPiramide2(){
        str = "";
        for(let i = 1; i<10;i++) {
         str = ""+i;
           for(let l = 1; l < i; l++){
            str+=i;}
        console.log(str)}
     }
     numPiramide2(); */


    //6 
    /* function piramide (){
        let str = "xx";
        for(let i = 0; i<5; i++){
            console.log(str);
            str += "xx";
        }
    }
   
   piramide(); */


    //7
    /* function count(){
        let couter = 0;
       return function() {
         return  ++couter;}
    }
    let first = count();
    first();
    first(); */


    //8 
    /* function counter(){
        counter.count = 0;
        return function() {
            return ++counter.count;
        }
    }
    
    let second = counter(); */
}

{//Timeout

    //1
/*     function printNumbers(from, to) {

        let timerId = setInterval(function f() {
            if (from > to - 1) clearInterval(timerId);
            console.log(from);
            from++
        }, 100)
    }
    printNumbers(1, 15); */


    //2
 /*    function printNumbers(from,to){
       setTimeout(function f(){
            if (from < to) setTimeout(f,100);
            console.log(from);
            from++;
            
        },100)
    }

    printNumbers(1, 15); */
   
}

{//call,apply

 //1
/*  function work(a, b) {
    alert( a + b ); 
  }

  function spy(fun){
     
     function f (...args){
          f.calls.push(args);
          fun.apply(this,arguments);
      }
      f.calls = [];
      return f
  }

work = spy(work);

work(1,2);

  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  } */



  //2

/* function some (x){
    alert(x)
}

function delay(fun,ms) {
    return function f() {
        return setTimeout(()=>fun.apply(this,arguments),ms)
    }
}

let some100 = delay(some,100);
let some1000 = delay(some,10000);

some100('test1');
some1000('test2'); */




//3
/* function some(x) {
    alert(x)
}

function debounce(func,ms) {
    let time = 0;
   return function wrapper() {
       let t = Date.now() - time;
       if( t > ms) {
           func.apply(this,arguments)
       }
       time = Date.now();
   }
   
}

let fun = debounce(some,1000);

fun(2);
fun(5);

setTimeout( () => fun(4), 1100) */


//3(2)

/* function some(x) {
    alert(x);
}


function debounce2(func,ms) {
   let notReady = false;

   return function wrapper() {
       if(notReady) return;
       func.apply(this,arguments);
       notReady = true;
       setTimeout(() => notReady = false, ms)
   }
}


let fun = debounce2(some,1000);

fun(1);
fun(2);
setTimeout(()=>fun(4),1500); */

//4

function some(x) {
    console.log(x);
}


function throttle(func,ms) {
    let notReady = false;
    let args,isThis;
    
    return function wrapper() {
     if(notReady) {
         args = arguments;
         isThis = this;
         return;
     }

     func.apply(this,arguments);
     notReady = true;
     setTimeout(function() {
          notReady = false;
          if(args) {
              wrapper.apply(isThis,args);
         args = null;
         isThis = null;
          }
     }, ms)
    }
 }

let f1000 = throttle(some, 1000);


f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3);
}