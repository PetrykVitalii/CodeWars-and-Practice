// let myArr = [1, 2, 4, 6, 2, 3]

// function myCallbackForEach(elem) {
//     console.log(elem);
// }

// function myForEach(myCallback) {
//     for (let i = 0; i < this.length; i++) {
//         myCallback(this[i])
//     }
// }
// Array.prototype.myForEach = myForEach
// myArr.myForEach(myCallbackForEach)

// function myCallbackMap(elem) {
//     return elem + 5
// }

// function myMap(myCallback) {
//     let newArr = []
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(myCallback(this[i]))
//     }
//     console.log(newArr);
//     return newArr
// }

// Array.prototype.myMap = myMap
// myArr.myMap(myCallbackMap)

// function myCallbackFilter(elem) {
//     return elem === 2
// }

// function myFilter(myCallback) {
//     let newArr = []
//     for (let i = 0; i < this.length; i++) {
//         if (myCallback(this[i])) {
//             newArr.push(this[i])
//         }
//     }
//     console.log(newArr);
//     return newArr
// }

// Array.prototype.myFilter = myFilter
// myArr.myFilter(myCallbackFilter)

// function myCallbackReduce(acc, elem) {
//     return acc + elem
// }

// function myReduce(initialValue, myCallback) {
//     let acc = initialValue
//     for (let i = 0; i < this.length; i++) {
//         acc = myCallback(acc, this[i])
//     }
//     console.log(acc);
//     return acc
// }

// Array.prototype.myReduce = myReduce
// myArr.myReduce(0,myCallbackReduce)

// let newArr = [3, 3, 3, 2, 2]
// newArr.myForEach((e) => {
//     console.log(e);
// })
// newArr.myMap((e) => {
//     return e * 3
// })
// newArr.myFilter((e) => {
//     return e === 3
// })
// newArr.myReduce(0, (acc, e) => {
//     return acc + e
// })

// let a = {
//     a:1,
//     b:2
// }

// for (const b in a) {
//     console.log(b);
//     console.log(a[b]);
// }
// a = [1,2,3]
// for ( const b of a){
//     console.log(b);
// }

// function closer (){
//     let a = 52
//     return () => {
//         a++
//         return a
//     }
// }
// let b = closer()
// let c = closer()

// console.log(b());
// console.log(b());
// console.log(b());
// console.log(c());
// console.log(c());
// console.log(c());

// function recursion (a){
//     if(a === 10){
//         return a
//     }
//     a++
//     return recursion(a)
// }
// console.log(recursion(3));

// function myPromise(data,time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data)
//             console.log(data);
//         }, time)
//     })
// }
// myPromise(32,2000)
//     .then(data => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(data + 25)
//                 console.log(data + 25);
//             }, 1000)
//         })
//     })
//     .then((data) => {
//         return data + 78
//     })
//     .then((data) => {
//         console.log(data);
//     })

// Promise.all([myPromise(32,3000),myPromise(48,1000)]).then(()=>{
//     console.log('all Promise');
// })
// Promise.race([myPromise(32,3000),myPromise(48,1000)]).then(()=>{
//     console.log('race Promise');
// })

// const delay = (ms, inf = "") => {
//   return new Promise((r) => setTimeout(() => r(inf), ms));
// };

// const url = "https://jsonplaceholder.typicode.com/todos";

// async function takeData() {
//   try {
//     await delay(2000);
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.error(e);
//   } finally {
//     console.log("finaly");
//   }
// }
// takeData()
//   .then((data) => {
//     return delay(3000, data);
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const person = {
//     age:22,
//     name:'Vitalik',
//     greet: function (n){console.log(`hello ${this.name} ${n}`);}
// }
// const anotherPerson = {
//     age:33,
//     name:'Vasyl'
// }

// person.greet(22)
// person.greet.call(anotherPerson,3)
// person.greet.apply(anotherPerson,[6])
// let newFunc = person.greet.bind(anotherPerson)
// newFunc(2)

// const person = {
//     age:22,
//     name:'Vitalii'
// }
// function bindFunc(str){
//     console.log(`${str} ${this.name}`);
// }
// function myBind(context,fn){
//     return function(...arg){
//         fn.apply(context,arg)
//     }
// }
// bindFunc.bind()
// Function.prototype.myBind = myBind(person,bindFunc)
// bindFunc.myBind('hello')

// class Rectangle {
//   constructor(height, width) {
//     this.name = "Прямокутник";
//     this.height = height;
//     this.width = width;
//   }
//   sayName() {
//     console.log("Привіт, я ", this.name + ".");
//   }
//   area() {
//     return this.height * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length)
//     this.name = 'square'
//   }
// }

// const square = new Square(10)
// console.log(square);

// let a = Object.create({}, {
//     p: {
//         value: 42,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     b: {
//         get() {
//             return this.p + 3
//         },
//         set(value) {
//             console.log(value, this.p);
//         }
//     }
// })
// console.log(a);

// Optimization
// const IndexedArray = new Proxy(Array, {
//   construct(target, [args]) {
//     let indexArr = {};
//     args.forEach((element) => (indexArr[element.id] = element));
//     return new Proxy(indexArr, {
//         get(arr,prop) {
//             console.log(arr[prop]);
//             return arr[prop]
//         }
//     });
//   }, 
// });

// const users = new IndexedArray([
//   { id: 11, name: "Vladilen", job: "Fullstack", age: 25 },
//   { id: 22, name: "Elena", job: "Student", age: 22 },
//   { id: 33, name: "Victor", job: "Backend", age: 23 },
//   { id: 44, name: "Vasilisa", job: "Teacher", age: 24 },
// ]);

// const person = {
//   name: "Vitalii",
//   age: 22,
//   _id: 12211,
// };

// function personProxy(target) {
//   return new Proxy(target, {
//     get: (target, key) => {
//       if (key.startsWith("_")) {
//         return "hidden";
//       } else if (!(key in target)) {
//         return "nema";
//       } else {
//         return target[key];
//       }
//     },
//     set: (target, key, value) => {
//       if (!key.startsWith("_")) {
//         target[key] = value;
//       }
//     },
//   });
// }
// let a = personProxy(person);
