var list = [];

for (var i = 1; i <= 45; i++) {
  list.push(i); //list라는 변수에 i의 값을 하나씩 '추가'한다.
}


var result = [];

    for (var i = 0; i < 6; i++) {
      var index = Math.floor(Math.random() * list.length); //list의 length(지금껏 글자수라고 알고 있었지만 여기서는 총 개수)에서 임의로 뽑는다.

      var num = list[index]; //list의 요소들 중 index에서 추출한 6개의 값을 num이라는 변수에 저장
      list.splice(index, 1); //list의 요소들 중 num 변수로 선택된 인덱스 값 1개를 제거

      result.push(num); //result라는 변수명을 가진 배열에 임의로 뽑아낸 6개의 숫자를 저장한다.
      //이 자리에 있던 기존 코드 : console.log(num, list); //console 창에 num변수와 list를 표기할 것.
    }



/* 간단한 오름차순 비교함수. 내림차순은 a와 b의 위치를 바꿔주면 된다.

function compare(a,b) {
  return a-b;

/* 이건 위에걸 풀어서 쓴 비교함수.

  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;

}
*/

result.sort(function(a,b) {
  return a-b;
})

for (var i = 0; i < 6; i++) {
document.write('<span class="ball">' + result[i] + '</span>');
}
