// 타입 단언(type assertion)
// var a;
// a = 20;
// a= 'a';
// var b = a as string;

// DOM API 조작
var div = document.querySelector('div') as HTMLElement;
// 타입단언하지 않았을때 div의 타입은 (HTMLElement| null)
// 때문에 null에 대한 처리를 하지 않으면 오류 발생
// 위 코드에서 HTMLElement로 타입단언하여서 오류 발생 사라짐
div.innerText; 

