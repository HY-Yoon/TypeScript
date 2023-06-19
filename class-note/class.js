// 생성자 함수 === class
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var luna = new Person('루나', 5);

// ES2015(ES6)
// class Person {
//     // 클래스 로직
//     constructor(name, age) {
//         console.log('생성 되었습니다.');
//         this.name = name;
//         this.age = age;
//     }
// }

var luna = new Person('루나', 5); // 생성 되었습니다.
console.log(luna);

// 프로토타입 (*크롬 콘솔창 입력시 문법 적용한 예시)
var user = {name: 'luna', age: 5};
var admin = {};
admin._proto_ = user;
admin.name // 'luna'
admin.age // 5
admin // {}
admin.role = 'cat';
admin // {role: 'cat'}

