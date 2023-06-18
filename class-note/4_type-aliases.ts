// 인터페이스: 확장 가능 / 타입별칭: 확장 불가능
// 가능한 인터페이스 활용을 권장
interface Person {
    name: string;
    age: number;
}

// 타입을 호출한 곳에서 상세를 확인할 수 있음
// type Person = {
//     name: string;
//     age: number;
// }`

var hye: Person = {
    name: '혜인',
    age: 28
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo) {

}