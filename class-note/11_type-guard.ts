interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {name: 'Tony', age: 33, skill: 'Iron Making'};
}
var tony = introduce();
// console.log(tony.skill); //tony의 타입이 Developer 거나 Person 일 수 있기 때문에 오류 발생

// 타입 단언만을 사용했을 때 문제점
// 가독성이 떨어진다.
if((tony as Developer).skill){
  var skill = (tony as Developer).skill;
  console.log(skill);
}else if((tony as Person).age){
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
  console.log(tony.skill);
}else {
  console.log(tony.age);
}