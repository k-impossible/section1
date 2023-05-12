/**
extend
두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.

추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둡니다.
두번째 객체는 수정하지 않아야 합니다.
 */
function extend(obj1, obj2) {
    // TODO: 여기에 코드를 작성합니다.
    for(let o2 in obj2){
      if(!obj1.hasOwnProperty(o2)){
        obj1[o2] = obj2[o2]
      }
    }
}

/**
mostFrequentCharacter
문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

띄어쓰기는 제외합니다.
가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
 */
function mostFrequentCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let obj = {}
    let max = str[0]
    let blank = true
    
    for(let i in str){
      if(str[i] !== " "){
        blank = false
        if(!obj.hasOwnProperty(str[i])){
        obj[str[i]] = 1
      }else{
        obj[str[i]] += 1
        if(obj[max] < obj[str[i]]){
          max = str[i]
        }
      }
      }
    }
  
    if(str.length === 0 || blank){
      max = ""
    }
  
    return max
  }