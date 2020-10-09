// function digital_root(n) {
//     let arr = String(n).split("")
//     let result = arr.reduce((acc,value) => acc + +value,0)
//     if(result < 10 & result >= 0){
//         return result
//     }
//     else{
//         return digital_root(result)
//     }
// }
// digital_root(132189);

// function descendingOrder(n) {
//     return +String(n)
//         .split('')
//         .sort((a, b) => b - a)
//         .reduce((acc,value) => acc + value,"")
// }
// descendingOrder(324532)

// function duplicateEncode(word){
//     return word.toLowerCase().split('').map(letter => {
//         if(word.toLowerCase().split('').filter(value => value === letter).length > 1){
//             return letter = ')'
//         }
//         else{
//             return letter = '('
//         }
//     }).join("")
// }
// duplicateEncode("RereRe")

// function solution(str) {
//     let arr = []
//     for (let i = 0; i < str.length; i += 2) {
//         if (str[i]) {
//             if (str[i + 1]){
//                 arr.push(str[i]+str[i+1])
//             }
//             else{
//                 arr.push(str[i]+'_')
//                 break
//             }
//         }
//         else{
//             break
//         }
//     }
//     return arr
// }

// function expandedForm(num) {
//     let arrNum = String(num).split('')
//     let result = ''
//     arrNum.forEach((value,index) => {
//         if(value != 0){
//             result += value + '0'.repeat(arrNum.length - index - 1) + ' + '
//         }
//     })
//     return result.slice(0,-3)
// }

// function foo(a){
//     return function(b){
//         return function (c){
//             return a * b * c
//         }
//     }
// }
// console.log(foo(3)(4)(5));

// function persistence(num) {
//     let count = 0
//     while(10 <= num){
//         count++
//         let arr = String(num).split("")
//         num = arr.reduce((acc,value) => acc * +value,1)
//     }
//     return count
// }
// console.log(persistence(39));

// function orderWeight(strng) {
//     let newOrder = []
//     strng
//         .split(" ")
//         .forEach(value => {
//             let newWeight = value
//                 .split("")
//                 .reduce((acc, value) => {
//                     return acc + +value
//                 }, 0)
//             const WEIGHT = {
//                 oldWeight: value,
//                 newWeight: newWeight
//             }
//             newOrder.push(WEIGHT)
//         })
//     return newOrder
//         .sort((a, b) => {
//             if (a.newWeight === b.newWeight) {
//                 let count = 0
//                 for (let i = 0;(a.oldWeight[i] === b.oldWeight[i]) && (a.oldWeight[i] && b.oldWeight[i]); i++) {
//                     count = i + 1
//                 }
//                 return a.oldWeight.slice(count, count + 1) - b.oldWeight.slice(count, count + 1)
//             }
//             return a.newWeight - b.newWeight
//         })
//         .reduce((acc, value) => {
//             return acc + value.oldWeight + " "
//         }, "").slice(0, -1)
// }
// console.log(orderWeight('2 20 20'));

// function zero(strAction = false) {
//     return num(strAction, 0)
// }

// function one(strAction = false) {
//     return num(strAction, 1)
// }

// function two(strAction = false) {
//     return num(strAction, 2)
// }

// function three(strAction = false) {
//     return num(strAction, 3)
// }

// function four(strAction = false) {
//     return num(strAction, 4)
// }

// function five(strAction = false) {
//     return num(strAction, 5)
// }

// function six(strAction = false) {
//     return num(strAction, 6)
// }

// function seven(strAction = false) {
//     return num(strAction, 7)
// }

// function eight(strAction = false) {
//     return num(strAction, 8)
// }

// function nine(strAction = false) {
//     return num(strAction, 9)
// }

// function plus(number) {
//     return `plus ${number}`
// }

// function minus(number) {
//     return `minus ${number}`
// }

// function times(number) {
//     return `times ${number}`
// }

// function dividedBy(number) {
//     return `dividedBy ${number}`
// }

// function action(action, num1, num2) {
//     let result
//     if (action === 'plus') {
//         result = num1 + +num2
//     } else if (action === 'times') {
//         result = num1 * +num2
//     } else if (action === 'minus') {
//         result = num1 - +num2
//     } else if (action === 'dividedBy') {
//         result = num1 / +num2
//     }
//     return Math.floor(result)
// }

// function num(strAction, number) {
//     if (strAction) {
//         let arr = strAction.split(" ")
//         return action(arr[0], number, arr[1])
//     } else {
//         return number
//     }
// }

// function bigN(n, k) {
//     let sqr
//     for (let i = 1000000; i > 1; i--) {
//         if (n % i === 0) {
//             sqr = i
//             break
//         }
//     }
//     let result = String(n).slice(-k)
//     for (let i = 1; i < n / sqr; i++) {
//         result *= String(n).slice(-k)
//         result = String(result).slice(-k)
//         if (result.length < k) {
//             for (let i = result.length; i < k; i++) {
//                 result = '0' + result
//             }
//         }
//     }
//     let newResult = result
//     for (let i = 1; i < sqr; i++) {
//         result *= newResult
//         result = String(result).slice(-k)
//         if (result.length < k) {
//             for (let i = result.length; i < k; i++) {
//                 result = '0' + result
//             }
//         }
//     }
//     return result
// }

// function n2n(n, k) {
//     if (n >= 100000) {
//         return bigN(n, k)
//     }
//     let result = String(n).slice(-k)
//     for (let i = 1; i < n; i++) {
//         result *= String(n).slice(-k)
//         result = String(result).slice(-k)
//         if (result.length < k) {
//             for (let i = result.length; i < k; i++) {
//                 result = '0' + result
//             }
//         }
//     }
//     return result
// }
// console.log(n2n(111111111, 5));
// console.log(Math.pow(111111111,2))

// function createPhoneNumber(numbers) {
//     return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// function humanReadable(seconds) {
//     return `${plusZero(Math.floor(seconds/3600))}:${plusZero(Math.floor(seconds/60)%60)}:${plusZero(seconds%60)}`
// }
// function plusZero(time){
//     if(time < 10){
//         return '0' + time
//     }
//     return time
// }



// function firstNonRepeatingLetter(s) {
//     let arrString = s.split("")
//     let notRepeated = ''
//     arrString.reverse().forEach(letter =>{
//         if(arrString.filter(value => value.toLowerCase() === letter.toLowerCase() ).length === 1){
//             notRepeated = letter
//         }
//     })
//     return notRepeated
// }


// function comp(array1, array2) {
//     if (array1 === null || array2 === null) {
//         return false
//     }
//     let sameArr = array1.map(value => value * value).sort((a, b) => a - b)
//     array2.sort((a, b) => a - b)
//     return sameArr.every((value, index) => value === array2[index])
// }

// function pigIt(str) {
//     return str
//         .split(" ")
//         .map(value => {
//             if (!/^[\?,\!]$/.test(value)) {
//                 return `${value.slice(1)}${value[0]}ay`
//             } else {
//                 return value
//             }
//         })
//         .join(" ")
// }


// function validSolution(board) {
//     let valid = true
//     board.forEach(value => {
//         if (checkLine(value).length != 9) {
//             valid = false
//         }
//     });
//     if (checkRow(board).length != 9) {
//         valid = false
//     }
//     if (check3x3(board).length != 9) {
//         valid = false
//     }
//     console.log(valid);
//     return valid
// }

// function check3x3(board) {
//     let new3x3 = []
//     for (let i = 0; i < board.length; i += 3) {
//         for (let j = 0; j < board.length; j += 3) {
//             new3x3 = [
//                 board[i][j],
//                 board[i][j + 1],
//                 board[i][j + 2],
//                 board[i + 1][j],
//                 board[i + 1][j + 1],
//                 board[i + 1][j + 2],
//                 board[i + 2][j],
//                 board[i + 2][j + 1],
//                 board[i + 2][j + 2],
//             ]
//         }
//     }
//     return checkLine(new3x3)
// }

// function checkLine(line) {
//     const example = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     return line.filter(value => {
//         for (let i = 0; i < example.length; i++) {
//             if (value === example[i]) {
//                 example.splice(i, 1)
//                 return value
//             }
//         }
//     })
// }

// function checkRow(board) {
//     const example = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     for (let i = 0; i < example.length; i++) {
//         let row = []
//         board.forEach((value) => {
//             row.push(value[i])
//         })
//         return checkLine(row)
//     }
// }


// function whoIsNext(names, r) {
// if (names.length >= r) {
//     return names[r - 1]
// }
// r--
// names.push(names[0])
// names.push(names[0])
// names.splice(0, 1)
// return whoIsNext(names, r)
// bn = b1 · qn - 1

// if (names.length >= r) {
//     return names[r - 1]
// }
// let newNames = names.reduce((acc, value) => {
//     acc.push(value,value)
//     return acc
// }, [])
// r -= names.length
// return whoIsNext(newNames, r)

// for (r; r > 0; r--) {
//     if (names.length >= r) {
//         break
//     }
//     names.push(names[0])
//     names.push(names[0])
//     names.splice(0, 1)
// }
// return names[r - 1]
// }


// function productFib(prod) {
//     let a = 0
//     let b = 1
//     while (a * b < prod) {
//         b = a + b;
//         a = b - a;
//     }
//     if (a * b === prod) {
//         return [a, b, true]
//     } else {
//         return [a, b, false]
//     }
// }
// productFib(4895)


// function digPow(n, p) {
//     let result = String(n).split("").reduce((acc, num, i) => num ** (i + p) + acc, 0)
//     return result % n === 0 ? result / n : -1
// }
// console.log(digPow(89, 1));


// function willFit(present, box){
//     return present.reduce((acc,value) => acc + value ,0) >= box.reduce((acc,value) => acc + value ,0)
//         ? false
//         : true
// }
// console.log(willFit([ 10, 10, 10 ], [ 50, 50, 4 ]));