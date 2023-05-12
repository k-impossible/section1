const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  if(operator === "+"){
    result = parseFloat(n1) + parseFloat(n2)
  }else if(operator === "-"){
    result = parseFloat(n1) - parseFloat(n2)
  }else if(operator === "*"){
    result = parseFloat(n1) * parseFloat(n2)
  }else if(operator === "/"){
    result = parseFloat(n1) / parseFloat(n2)
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      if(firstOperend.textContent === "0"){
        firstOperend.textContent = buttonContent
      }else{
        secondOperend.textContent = buttonContent
      }
    }

    if (action === 'operator') {
      operator.textContent = buttonContent
    }

    if (action === 'decimal') {
    }

    if (action === 'clear') {
    firstOperend.textContent = "0"
    secondOperend.textContent = "0"
    operator.textContent = "+"
    calculatedResult.textContent = "0"
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(Number(firstOperend.textContent),operator.textContent,Number(secondOperend.textContent))
    }
  }
});

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

// isPressed클래스를 없애기 위해 연산자 버튼들을 querySelectorAll로 전부 가져온다.
const opBtn = document.querySelectorAll('.operator');

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {

    //가져온 연산자 버튼들을 반복해서 isPressed클래스를 제거한다.
    for(let i=0; i<opBtn.length; i++){
        opBtn[i].classList.remove("isPressed")
    }

    if (action === 'number') {
      if(display.textContent === "0" || previousKey === 'operator'){
        display.textContent = "" //첫 계산이거나 이전 입력한게 연산자 일 때 display 초기화
      }
      
      display.textContent = display.textContent.concat(buttonContent) //concat으로 숫자 이어주기

      // 첫 계산이거나 이전 입력한게 첫번째 숫자 일 때 or 아닐때
      // Num변수에 숫자, previousKey에 구분자 할당하는 조건문
      if(firstNum === undefined || previousKey === "firstNum"){
        firstNum = display.textContent
        previousKey = "firstNum"
      }else{
        previousNum = display.textContent
        previousKey = "previousNum"
      }
    }
    if (action === 'operator') {
      target.classList.add("isPressed") // 연산자 버튼 클릭 시 isPressed 클래스 추가

      if(previousKey === "previousNum"){ // 숫자,연산자,숫자 입력 후 enter가 아닌 연산자 입력 시
        firstNum = calculate(firstNum,operatorForAdvanced,previousNum) // firstNum에 이전 계산값을 넣어준다
      }
      operatorForAdvanced = buttonContent
      previousKey = "operator"
    }

    if (action === 'decimal') {
      if(previousKey !== "operator" && !display.textContent.includes(".")){
        // 이전 입력이 연산자가 아니고 화면에 .문자가 없을 때 . 문자 연결
        display.textContent = display.textContent.concat(".")
      }

      if(previousKey === "operator" && previousNum === undefined) {
        // 이전 입력이 연산자 이고 previousNum이 존재하지 않을 때 화면 초기화 하면서 0. 문자 연결
        display.textContent = ""
        display.textContent = display.textContent.concat("0.")
        previousKey = "decimal" //firstNum, previousNum 차례를 구분하기 위한 구분자
      }
    }

    if (action === 'clear') {
      firstNum = undefined
      operatorForAdvanced = undefined
      previousNum = undefined
      display.textContent = "0"
    }

    if (action === 'calculate') {
      
      if(operatorForAdvanced !== undefined){//연산자가 입력되있을 때 만 계산되기 위한것

        if(previousKey === "calculate"){//enter 입력 후 연속으로 enter를 입력 시 이전 계산값과 이어서 계산되기 위한것  
          firstNum = display.textContent
        }
        
        if(previousNum === undefined){//다음 숫자가 없는데 enter입력 시 첫번째 숫자 끼리 계산되기 위한것
          previousNum = firstNum
        }
  
        display.textContent = calculate(firstNum,operatorForAdvanced,previousNum)
        previousKey = "calculate"
      }
    }
  }

});
