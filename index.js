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

    /* function some(x) {
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
    f1000(3); */
}

{//prototype

    //1
    /* let head = {
        glasses: 1
      };
      
      let table = {
        pen: 3,
        __proto__: head,
      };
      
      let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table,
      };
      
      let pockets = {
        money: 2000,
        __proto__: bed,
      };
    
    console.log(pockets.pen);
    console.log(bed.glasses); */


    //2
    /* function some(fun){
    return function wrap (ms) {
        return function(...args) {
          setTimeout(() => fun.apply(this, args), ms);
        }
      };
      
    }
    
    function f(a, b) {
        alert( a + b );
      }
    
    let defer = some(f);
    
      defer(1000)(1, 2); */

    //3
    /* let head = {
        glasses: 1
      };
      
    
      let table = Object.create(head, {
          pen: {
              value: 3,
          }
      });
      
      let bed = Object.create(table,{
          sheet: {
              value:1,
          },
          pillow: {
              value: 2,
          }
      });
      
      
      let pockets = Object.create(bed, {
          money: {
              value:2000,
          }
      });
    
    console.log(pockets.pen);
    console.log(bed.glasses); */

    //4

    /* let dictionary = Object.create(null);
    
    dictionary.toString = function () {
        return Object.keys(this).join(',')
    }
     
    Object.defineProperty(dictionary,"toString",{
        enumerable: false
    })
    
    
    
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test";
    
    let result = dictionary.toString();
    for(let key in dictionary) {
        alert(key); // "apple", затем "__proto__"
      }
     */

}

{//Class

    //1

    /* class Clock {
        constructor (template) {
           this.template = template;
        }
    
        render() {
            let date = new Date();
        
            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
        
            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
        
            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
        
            let output = this.template
              .replace('h', hours)
              .replace('m', mins)
              .replace('s', secs);
        
            console.log(output);
          }
    
        stop() {
            clearInterval(this.timer);
        }
        
        start() {
            this.render();
            this.timer = setInterval(() => this.render(), 1000);
        }
    }
    
    
    let clock = new Clock('h:m:s');
    //clock.start();
    
    //2
    class ExtendedClock extends Clock {
        constructor (template,precision=1000) {
            super(template);
            this.precision = precision;
        }
        start() {
            super.render();
            this.timer = setInterval(() => super.render(),this.precision)
        }
    }
    
    let clock2 = new ExtendedClock('h:m:s',3000);
    clock2.start(); */

    //3.1

    /* class Worker {
        constructor(name,surname,rate,days) {
            this.name = name;
            this.surname = surname;
            this.rate = rate;
            this.days = days;
        }
    
        getSalary() {
            return this.rate * this.days
        }
    }
    
    let worker1 = new Worker('Иван', 'Иванов', 10, 31);
    console.log(worker1.name);
    console.log(worker1.surname);
    console.log(worker1.getSalary());
     */


    //3.2
    /* class Worker {
       constructor(name,surname,rate,days) {
           this.name = name;
           this.surname = surname;
           this.rate = rate;
           this.days = days;
       }
   
       get salary() {
           this._salary =  this.rate * this.days
           return this._salary
       }
   }
   
   let worker1 = new Worker('Иван', 'Иванов', 10, 31);
   console.log(worker1.name);
   console.log(worker1.surname);
   console.log(worker1.salary);
    */

    /* //3.3
    class Worker {
        #name;
        #surname;
        #rate;
        #days;
        constructor(name,surname,rate,days) {
            this.#name = name;
            this.#surname = surname;
            this.#rate = rate;
            this.#days = days;
        }
    
        getName() {
            return  this.#name
           
        }
        getSurname() {
            return  this.#surname
           
        }
        getSalary() {
            return  this.#rate * this.#days
           
        }
        setRate(value) {
            return this.#rate = value
        }
        setDays(value) {
            return this.#days = value
        }
    }
    
    let worker1 = new Worker('Иван', 'Иванов', 10, 31);
    console.log(worker1.getName());
    console.log(worker1.getSurname());
    console.log(worker1.getSalary());
    worker1.setDays(28);
    worker1.setRate(15);
    console.log(worker1.getSalary());
    console.log(worker1); */


    //4

    /* class MyString {
        reverse(str) {
            let reversed = "";
            for(let i= str.length-1; i > -1;i--){
                reversed += str[i]
            }
            return reversed
        } 
    
        ucFirst(str) {
           let first = str[0].toUpperCase();
          return first + str.slice(1)
        }
    
        ucWords(str) {
            let arr = str.split(" ");
            arr.forEach((elem,index) => {
               arr[index] =  this.ucFirst(elem)
            });
           return arr.join(' ')
        }
    
    
    }
    
    let str = new MyString();
    console.log(str.reverse("abcd"));
    console.log(str.ucFirst("abcd"));
    console.log(str.ucWords("abcd abcd abcd")); */


    /*     //5
    
        class Validator {
            isEmail(str) {
                return str.match(/[-.\w]+@([-\w]+\.)+\w+/) !== null
            }
    
            isDomain(str) {
                return str.match(/([-\w]+\.)+\w+/) !== null
            }
    
            isDate(str) {
                return str.match(/(\d\d.){2}\d{2,4}/) !== null
            }
    
            isPhone(str) {
                return str.match(/^(\+38)?[ -]?\(?0\d{2}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/) !== null
            }
    
        }
    
        let validator = new Validator();
    
        
    
    console.log(validator.isEmail('phphtml@mail.ru'));
    console.log(validator.isDomain('phphtml.net'));
    console.log(validator.isDate('12.05.2020'));
    console.log(validator.isPhone('+38 (029) 817-68-92')); */

    //6

    /* class User{
        constructor(name,surname) {
            this.name = name;
            this.surname = surname;
        }
    
        getFullName() {
            return this.name + " " + this.surname
        }
    }
    
    class Student extends User {
        constructor(name,surname,year){
            super(name,surname);
            this.year = year;
        }
    
        getCourse() {
            return new Date().getFullYear() - this.year
        }
    }
    
    let student = new Student('Иван', 'Иванов', 2017);
    
    console.log(student.name); 
    console.log(student.surname); 
    console.log(student.getFullName()); 
    console.log(student.year); 
    console.log(student.getCourse())
     */
}

{ //Promise

    //1
    /*  function delay(ms) {
       return new Promise(function(resolve,reject){
          let start = Date.now();
          let count = Date.now();
          while(count - start != ms){
              count = Date.now();
          }
          resolve();
       })
     }
 
 delay(3000).then(() => alert('выполнилось через 3 секунды')); */

    //1.1
    /* function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    delay(3000).then(() => alert('выполнилось через 3 секунды')); */


    //2
    /* 
    function randomResult () {
        return new Promise(function(resolve,reject){
            setTimeout( function () { try {
                let num =Math.round(Math.random()*10);
                if(num < 5) {
                  throw  new ReferenceError("Ошбка! Значение больше допустимого")
                }
            resolve("Greate")
             } catch (err) {
                 reject(err.message);
             }
        },5000)
    })}
    
    randomResult().then(alert,alert); */

    //3
    /*const wring_out_time = 500;
    const SQUATING_TIME = 200;

    function wringOut(count) {
        return new Promise((resolve, reject) => {
            if (count > 100) {
                reject(new Error("Слтишком много отжиманий"));
            }
            setTimeout(() => resolve(count), count * wring_out_time)
        })
    }

    function squating(count) {
        return new Promise((resolve, reject) => {
            if (count > 100) {
                reject(new Error("Слтишком много приседаний"));
            }
            setTimeout(() => resolve(count), count * SQUATING_TIME);
        })
    }

    console.log("начать тренировку");

    wringOut(101)
         .then((count) => {
             console.log(`Отжался ${count} раз`);
             return squating(5)
         })
         .then((count) =>
             console.log(`Присел ${count} раз`))
         .catch((err)=>{
         console.log(err.toString());
         console.log("Устал")}
         ); */

    //3.1 

    /* const wring_out_time = 500;
    const SQUATING_TIME = 200;

    function wringOut(count) {
        return new Promise((resolve, reject) => {
            if (count > 100) {
                reject(new Error("Слтишком много отжиманий"));
            }
            setTimeout(() => resolve(count), count * wring_out_time)
        })
    }

    function squating(count) {
        return new Promise((resolve, reject) => {
            if (count > 100) {
                reject(new Error("Слтишком много приседаний"));
            }
            setTimeout(() => resolve(count), count * SQUATING_TIME);
        })
    }

    console.log("начать тренировку");
    async function myTraining() {
        try {
            await wringOut(10);
            console.log(`Отжался 10 раз`);
            await squating(5);
            console.log(`Присел 5 раз`);
            return true;
        }
        catch (err) {
            console.log(err.toString());
            console.log("Устал");
            return false;
        }
    }

    myTraining().then(result => console.log(result));
 */


    //4
    /*  async function loadJson(url){
           let response = await fetch(url);
                   if (response.status == 200) {
                      let json = await response.json();
                      return json;
                   } 
                       throw new Error(response.status);
        }
       
        loadJson('https://learn.javascript.ru/no-such-user.json') 
        .catch(alert); */

    //5
 /*    class HttpError extends Error {
        constructor(response) {
            super(`${response.status} for ${response.url}`);
            this.name = "HttpError";
            this.response = response;
        }
    }


    async function loadJson(url) {
        let response = await fetch(url);
        if (response.status == 200) {
            return response.json()
        }
        throw new HttpErrror(response)
    }

    async function demoGithubUser() {
        let user;

        while (true) {
            let name = prompt("N?", "iliakan");

            try {
                user = await loadJson(`https://api.github.com/users/${name}`)
            }
            catch (err) {
                if (err instanceof HttpError && err.response.status == 404) {
                    alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                }
                else {
                    throw err;
                }
            }

            alert(`Полное имя: ${user.name}.`);
            return user;

        }
    }

    demoGithubUser(); */
}


{ // diferent

    //1
    /* function fillArray (length) {
       let arr = [];
    for(let i=0; i < length; i++) {
        arr.push("x".repeat(i+1))
    }
    return arr;
    }

    console.log(fullArray(5));
 */

 //2

/*  let arr = [1,2,3,4,5];
 function reverse(arr) {
     let copy = arr.concat([]);
     let index = 0;
     for(let i = copy.length-1; i>-1; i--){
         arr[index] = copy[i];
         index++;
     }
     return arr;
 }

 console.log(reverse(arr)); */

 //3
  /* function sumAllArrays(arr) {
      let sum = 0;
     arr.forEach(item => {
        sum += item.reduce((result,item)=>result+item,0)
     })
     return sum
  }

console.log(sumAllArrays([[1, 2, 3], [4, 5], [6]]));
 */

//3.1
function sumAllArrays(arr) {
    let sum = 0;
    for(let i=0; i<arr.length;i++) {
        let item = arr[i];
        for(let j = 0; j< item.length; j++){
            sum += item[j]
        }
    }
    return sum
}

console.log(sumAllArrays([[1, 2, 3], [4, 5], [6]]));

}