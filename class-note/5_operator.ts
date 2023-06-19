// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

//  유니온타입: 파라미터 또는 변수에 하나 이상의 타입을 사용
var hiyoon: string | number | boolean;
function logMessage(value: string | number) {
    if(typeof value === 'number') { //타입 가드
        // 타입이 지정되면 해당 타입에 맞는 API또는 속성을 바로 사용할 수 있다.
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
// function askSomeone(someone: Developer | Person) {
//     // 타입 검증이 없을 때 공통 속성인 name만 제공한다.
//     // 여러개의 인터페이스를 사용할때는 보증된 속성만 제공
//     someone.name
// }
// askSomeone({name: '디벨로퍼', skill: '웹 개발'})
// askSomeone({name: '루나', age: 5})

// 인터섹션 타입 : 두가지 인터페이스 속성을 모두 가지는 새로운 타입을 만든것이라고 할 수 있다.
function askSomeone(someone: Developer & Person) {
    // 타입가드 필요없이 모든 속성에 접근이 가능하다.
    someone.name
    someone.skill
    someone.age
}
askSomeone({name: '디벨로퍼', skill: '웹 개발', age: 5})