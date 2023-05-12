/**
createPhoneNumber
0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 0 이상 9 이하의 정수
배열의 길이는 8 또는 11
 */

function createPhoneNumber(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let str1 = "(010)"
    let len = arr.length
    let str2 = arr.slice(len - 8 , len - 4).join('')
    let str3 = arr.slice(len - 4 , len).join('')
    
    if(len === 11){
      str1 = `(${arr.slice(0, 3).join('')})`
    }
    return `${str1}${str2}-${str3}`
}

/**
fibonacci
수(num)를 입력받아 길이가 num + 1인 피보나치 수열을 리턴해야 합니다.
0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 */

function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [0,1]
  
    if(num === 0){
      result.pop()
      return result
    }else if(num === 1){
      return result
    }
  
    for(let i=2; i<=num; i++){
      result.push(result[i - 1] + result[i - 2])
    }
    return result
  }