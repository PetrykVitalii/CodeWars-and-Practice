// 1_let_const



// let a = 24
//
// if (true) {
//   let a = 42
//
//   console.log('a', a)
// }
//
// console.log(a)

// Hoisting
// b = 20
//
// console.log(b)
//
// let b = 10

// function hoisted() {
//   age = 26
// }
//
// let age
// hoisted()
// console.log(age)

// Const
// const COLOR = '#ffeebb'
// COLOR = '#000'

// console.log(COLOR)

// const array = [1, 2, 3, 5, 8]
//
// console.log(array)
//
// array.push(13)
//
// console.log(array)

// const obj = {a: 42}
// obj.name = 'Igor'

// console.log(obj)






// 2_arrow_functions


// function sum(a, b) {
//   return a + b
// }
//
// function cube(a) {
//   return a ** 3
// }

// const sum = (a, b) => a + b
// const cube = a => a ** 3

// console.log(sum(41, 1))
// console.log(cube(2))

// setTimeout(() => console.log('After 1 second'), 1000)

// Context
// function log() {
//   console.log(this)
// }
// log()
// const arrowLog = () => console.log(this)
// arrowLog()
// const person = {
//   name: 'Elena',
//   age: 20,
//   log: log,
//   arrowLog: arrowLog,
//   delayLog: function() {
//     // const self = this
//     global.setTimeout(() => {
//       console.log(this.name + ' ' + this.age)
//     }, 500)
//   }
// }

// console.log(global)
// person.arrowLog()

// person.delayLog()






// 3_default_params

// const defaultB = 30
// const getDefault = c => c * 2

// function compute(a = 10, b = getDefault(a)) {
//   return a + b
// }

// console.log(compute())







// 4_strings


// const title = 'Hello'
//
// const isVisible = () => Math.random() > 0.5
//
// const template = `
//   ${isVisible() ? `<p>Visible</p>` : ''}
//   <h1 id='demo' style="color: red">${title}</h1>
// `
//
// console.log(template)

// Methods
// const str = 'Hello'

// console.log(str.startsWith('He'))
// console.log(str.startsWith('e'))
// console.log(str.endsWith('lo'))
// console.log(str.startsWith('e'))

// console.log(str.includes('llo'))

// console.log(str.repeat(3))

// console.log(str.trim())
// console.log(str.trimEnd())
// console.log(str.trimStart())

// console.log(str.padStart(10, '1234'))
// console.log(str.padEnd(8, 'abc'))








// 5_rest_spread

// Rest
// function average(a, b, ...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
//   }
  // console.log(average(10, 20, 30, 40, 50))
  
  // Spread
  // const array = [1, 2, 3, 5, 8, 13]
  // console.log(...array)
  // console.log(Math.max(...array))
  // console.log(Math.min(...array))
  // console.log(Math.max.apply(null, array))
  
  // const fib = [1, ...array]
  // console.log(fib)
  
  // Destructuring
//   const array = [1, undefined, 3, 5, 8, 13]
  
  // const a = array[0]
  // const b = array[1]
  // const [a, b = 42, ...c] = array
  // console.log(a, b, c)
  
  // const [a,, c] = array
  // console.log(a, c)
  
  // Object
//   const address = {
//     country: 'Russia',
//     city: 'Moskow',
//     // street: 'Lenina',
//     concat: function() {
//       return `${this.country}, ${this.city}, ${this.street}`
//     }
//   }
  
  // const {city, country, street = 'Tverskaya', concat: addressConcat} = address
  //
  // console.log(addressConcat.call(address))
  // console.log(street)
  
//   const {city, ...rest} = address
//   console.log(city)
//   console.log(rest)
  
  
//   const newAddress = {...address, street: 'Tverskaya', code: 123}
  
//   console.log(newAddress)
  
  // console.log(address.concat())







//   6_objects

// const cityField = 'city'

// const job = 'Frontend'

// const person = {
//   age: 26,
//   name: 'Irina',
//   job,
//   [cityField]: 'Saint-Peterburg',
//   'country-live': 'Russia',
//   print: () => 'Person',
//   toString() {
//     return Object
//       .keys(this)
//       .filter(key => key !== 'toString')
//       .map(key => this[key])
//       .join(' ')
//   }
// }

// console.log(person.toString())
// console.log(person.print())
// console.log(person)

// Methods
// const first = {a: 1}
// const second = {b: 2}

// console.log(Object.is(20, 20))
// const obj = Object.assign({}, first, {
//   c: 2,
//   d: 3
// })
// console.log(obj)

// console.log(Object.entries(obj))
// console.log(Object.keys(obj))
// console.log(Object.values(obj))









// 8_classes

// class Person {
//     type = 'human'
  
//     constructor(name) {
//       this.name = name
//     }
  
//     greet() {
//       console.log(this.name + ' говорит привет!')
//     }
//   }
  
  // const max = new Person('Max')
  // max.greet()
  // console.log(max.type)
  
  // console.log(max.__proto__ === Person.prototype)
  
//   class Programmer extends Person {
//     constructor(name, job) {
//       super(name)
  
//       this._job = job
//     }
  
//     get job() {
//       return this._job.toUpperCase()
//     }
  
//     set job(job) {
//       if (job.length < 2) {
//         console.log('Validation failed')
//       } else {
//         this._job = job
//       }
//     }
  
//     greet() {
//       super.greet()
//       console.log('Rewritten')
//     }
//   }
  
//   const fronted = new Programmer('Max', 'Frontend')
  // console.log(fronted)
  // fronted.greet()
  // console.log(fronted.job)
//   fronted.job = 'Backend'
  // console.log(fronted.job)
  
  // Static  
//   class Util {
//     static average(...args) {
//       return args.reduce((acc, i) => acc += i, 0) / args.length
//     }
//   }
  
//   const res = Util.average(1, 1, 2, 3, 5, 8, 13)
//   console.log(res)
  
  // const util = new Util()
  //
  // console.log(util.average(1, 1, 2, 3, 5, 8, 13))







//   9_symbols

//   const symbol = Symbol('demo')
//   const other = Symbol('demo')
  
  // console.log(symbol)
  // console.log(other)
  //
  // console.log(symbol === other)
  
//   const obj = {
//     name: 'Elena',
//     demo: 'DEMO',
//     [symbol]: 'meta'
//   }
  
//   for (let key in obj) {
//     console.log(key)
//   }
  
//   console.log(obj.demo)
//   console.log(obj[symbol])








// 10_generators
// const array = [10, 20, 30, 40]
// const str = 'Hello'

// console.log(array[Symbol.iterator])
// console.log(str[Symbol.iterator])

// const iter = str[Symbol.iterator]()
//
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// for (let item of str) {
//   console.log(item)
// }

// const country = {
//   values: ['ru', 'kz', 'ua', 'by'],
//   [Symbol.iterator]() {
//     let i = 0
//     return {
//       next: () => {
//         const value = this.values[i]
//         i++
//         return {
//           done: i > this.values.length,
//           value
//         }
//       }
//     }
//   }
// }
//
// for (let item of country) {
//   console.log(item)
// }

// Generator
// function *gen(num = 4) {
//   for (let i = 0; i < num; i++) {
//     try {
//       yield i
//     } catch (e) {
//       console.log('Error', e)
//     }
//   }
// }

// const iter = gen(3)
// console.log(iter.next())
// console.log(iter.throw('My Error'))
// console.log(iter.next())
// console.log(iter.next())

// for (let i of gen(4)) {
//   console.log(i)
// }







// 11_promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 500)
// })

// const delay = ms => new Promise(((resolve, reject) => {
//     setTimeout(() => resolve(`Done! ${ms}`), ms)
//   }))
  
  // delay(1000)
  //   .then(data => delay(500))
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  //   .finally(() => console.log('Finally'))
  
  // async function asyncDelay() {
  //   try {
  //     const data = await delay(2000)
  //     console.log(data)
  //   } catch (e) {
  //     console.log('Error', e)
  //   }
  // }
  //
  // asyncDelay()
  
//   Promise.all([
//     delay(1000),
//     delay(500),
//     delay(2000)
//   ]).then(data => console.log(data))
  
//   Promise.race([
//     delay(1000),
//     delay(500),
//     delay(2000)
//   ]).then(data => console.log(data))





// 12_map_set
// const map = new Map(
//     [ ['a', 1] ]
//   )
  
  // console.log(map.get('a'))
//   map.set('b', 2).set(NaN, 'Number').set(42, 'demo')
  // console.log(map.get(NaN))
  // map.clear()
  // console.log(map.has(42))
  // map.delete('b')
  // console.log(map.size)
  //
  // console.log(map.keys())
  // console.log(map.entries())
  // console.log(map.values())
  
  // Set
//   const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8])
//   console.log(set.size)
//   console.log(set.add(21))
  // set.clear()
//   set.delete(1)
//   console.log(set)
  
//   console.log(set.keys())
//   console.log(set.values())
//   console.log(set.entries())






// 13_reflect

// class Student {
//     constructor(name) {
//       this.name = name
//     }
  
//     greet() {
//       console.log(`Hi! My name is ${this.name}`)
//     }
//   }
  
//   class ProtoStudent {
//     university = 'Oxford'
//   }
  
//   const student = Reflect.construct(Student, ['Igor'])
  
  // console.log(student.__proto__ === ProtoStudent.prototype)
  
//   Reflect.apply(student.greet, {name: 'Tester'}, [])
//   console.log(Reflect.ownKeys(student))
  
//   Reflect.preventExtensions(student)
  
//   student.age = 25
  
//   console.log(Reflect.isExtensible(student))
  
//   console.log(student)






// 14_proxy
// const validator = {
//     get(target, prop) {
//       return prop in target ? target[prop] : `Поля ${prop} в объекте нет`
//     },
  
//     set(target, prop, value) {
//       if (value.length > 2) {
//         Reflect.set(target, prop, value)
//       } else {
//         console.log('Длинна должна быть больше 2х символов. Сейчас ' + value.length)
//       }
//     }
//   }
  
//   const form = {
//     login: 'tester',
//     password: '12345'
//   }
  
//   const formProxy = new Proxy(form, validator)
  
//   // console.log(formProxy.login)
//   // console.log(formProxy.password)
//   // console.log(formProxy['username'])
  
//   // formProxy.password = '12'
//   // console.log(formProxy.password)
  
//   function log(message) {
//     console.log('[Log]: ', message)
//   }
  
//   const proxy = new Proxy(log, {
//     apply(target, thisArg, argArray) {
//       if (argArray.length === 1) {
//         Reflect.apply(target, thisArg, argArray)
//       } else {
//         console.log('Количество аргументов не совпадает')
//       }
//     }
//   })
  
//   proxy('Custom message')
//   proxy('Message', 2)


async function getData(){
  const a = await fetch('https://dev.timeatapp.cloud/cities')
  const data = await a.json()
  return data
}
getData().then(a => console.log(a))