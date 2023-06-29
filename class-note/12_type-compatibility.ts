// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;
//구조적으로 더 큰 인터페이스는 더 작은 인터페이스를 포함할 수 없다.
// developer = person;  // 'skill' 속성이 'Person' 형식에 없지만 'Developer' 형식에서 필수입니다.


// 함수
var add = function(a: number) {
  // ...
}
var sum = function(a: number, b: number) {
  // ...
}
sum = add;
// add = sum; // Target signature provides too few arguments. Expected 2 or more, but got 1.


// 제네릭
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
// 둘다 동일한 것으로 간주하여 타입에러 발생 X

interface NotEmpty<T> {
  data: T,
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;