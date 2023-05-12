/*
isPythagorean
삼각형의 세 변을 입력받아 직각삼각형(pythagorean)인지 여부를 리턴해야 합니다.
직각삼각형은 가장 큰 변(빗변)의 제곱이 나머지 두 변 각각의 제곱의 합과 동일합니다. (피타고라스의 정리)
자바스크립트에서 x의 제곱(x squared)을 구하는 방법은 3가지 입니다. 세 가지 방법을 모두 사용해야 합니다.
 */
function isPythagorean(side1, side2, side3) {
    // TODO: 여기에 코드를 작성합니다.
    let sqr1 = side1 * side1
    let sqr2 = side2 ** 2
    let sqr3 = Math.pow(side3,2)
  return sqr1 === (sqr2+sqr3) || sqr2 === (sqr1+sqr3) || sqr3 === (sqr2+sqr1)
  }