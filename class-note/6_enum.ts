enum Shoes {
    Nike,
    Adidas,
    Puma = '퓨마'
}

var myShoes = Shoes.Nike;
var myShoes2 = Shoes.Puma;
// 이넘 선언시 값을 지정하지 않으면 기본값은 0부터 1씩 증가한 값으로 지정됨
console.log(myShoes); //0 
console.log(myShoes2); //퓨마

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다.')
    }
    if(answer === Answer.No) {
        console.log('오답입니다.')
    }
}
// enum에서 제공하는 값만 전달할 수 있음
askQuestion(Answer.Yes);
// askQuestion('Y');
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');