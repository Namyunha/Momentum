// parseInt는 datatype을 숫자로 바꿔준다.
// parseInt한 후에 datatype이 int가 아니면 type은 NaN가 뜬다.
// 숫자인지 확인할 때 쓸 수 있다. (조건문)
// isNaN은 boolean 값을 나타낸다

const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));
// >> true (age는 숫자가 아니여서 true가 뜬다.)

if (isNaN(age) || age < 0) {
  console.log("please writer a real positive number");
} else {
  if (age <= 19) {
    console.log("Cannot drink");
  } else if (age > 19 && age <= 80) {
    console.log("You can drink");
  } else {
    console.log("You can do  everything");
  }
}
