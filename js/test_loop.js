/*
getSumOfFactors
수를 입력받아 약수(factor)의 합을 리턴해야 합니다.
*/
function getSumOfFactors(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 0

  for(let i=1; i<=num; i++){
    if(num % i === 0){
      result = result + i
    }
  }
  return result
}

/*
listPrimes
2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.
string 타입을 리턴해야 합니다.
2-3-5-7의 형식으로 리턴해야 합니다.
*/
function listPrimes(num) {
  // TODO: 여기에 코드를 작성합니다.
  let str = "2"
  for(let i=3; i<=num; i+=2){
    let flag = true

    for(let j=3; j<=Math.sqrt(i);j+=2){
      if(i%j === 0){
        flag = false
        break
      }
    }

    if(flag){
      str = str + "-" + i
    }
  }
  return str
}

/*
hasRepeatedCharacter
문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴해야 합니다.
 
*/
function hasRepeatedCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  if(str.length === 0) return false
  let result = false
  
  for(let i=0; i<str.length; i++){
    for(let j=0; j<str.length; j++){
      if(str[i]===str[j]){
        if(i!==j){
          return true
        }
      }
    }
  }
  return result
}
