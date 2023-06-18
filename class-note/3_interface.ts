interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var hiyoon: User = {
    age: 28,
    name: '혜인'
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
    console.log(user);
}
const yoon = {
    name: '윤',
    age: 28
}
getUser(yoon);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c']
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 객체의 인덱스(키)에 접근할 때 정의해둔 인터페이스에 어긋났는지 확인할 수 있다.
// obj['cssFile'] = 'a'; //Type 'string' is not assignable to type 'RegExp'.

Object.keys(obj).forEach((value)=>{});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var hi: Developer = {
    language: 'ts',
    age: 10,
    name: '혜인'
}
