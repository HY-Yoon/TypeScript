// 타입 추론 기본 1
// 선언된 변수의 타입에 따라 ts가 추론한 타입이 할당된다.
var a = 'abc';

function getB(b = 10) {
  var c = 'hello';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value : T;
//   title: string;
// }
// var shoppinItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value : T;
  title: string;
}

interface DetailDropDown<K> extends Dropdown<K>{
  description: string;
  tag: K;
}

var detailItem: DetailDropDown<string> = {
  title: 'hello',
  description: 'abc',
  value: 'a',
  tag: 'a',
}

// Best Common Type
// 가장 근접한 타입을 추론한다/ 유니온으로 묶어나간다
var arr = [1, 2, 3, true, 'a'];
