/**
 * pipe
 * 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.
 * 
 * [예시]
 * function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

let output = pipe(add5, square);
console.log(output(4)); // --> 81
 */

function pipe(...func) {
    return function(num){
    let result = num
    for(let i=0; i < func.length; i++){
        result = func[i](result)
    }
    return result
    }
}

/**
 * getElementsLessThan100AtProperty
 * 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.
 * 
 * [예시]
 * const obj = {
  key: [1000, 20, 50, 500],
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
 */

function lessThan100(number) {
    return number < 100;
}
  
function getElementsLessThan100AtProperty(obj, property) {
    if(Array.isArray(obj[property])){
        return obj[property].filter((el)=>{
        if(typeof el === "number"){
            return lessThan100(el)
        }
        })
    }else{
        return []
    }
}

/**
 * studentReports
 * 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.
남학생들의 정보는 리턴하는 배열에서 제외합니다.
'grades' 속성값은 평균값(number 타입)으로 바꿉니다.

[예시]
let studentList = [
  {
    name: 'Anna',
    gender: 'female',
    grades: [4.5, 3.5, 4],
  },
  {
    name: 'Dennis',
    gender: 'male',
    country: 'Germany',
    grades: [5, 1.5, 4],
  },
  {
    name: 'Martha',
    gender: 'female',
    grades: [5, 4, 4, 3],
  },
  {
    name: 'Brock',
    gender: 'male',
    grades: [4, 3, 2],
  },
];

let output = studentReports(studentList);

console.log(output); // -->
[
  { name: 'Anna', gender: 'female', grades: 4 },
  { name: 'Martha', gender: 'female', grades: 4 },
];
 */

function studentReports(students) {
    const notMale = (obj) => {
      return obj.gender !== 'male'
    }
  
    return students.filter(notMale).map((el)=>{    
       let sum = el.grades.reduce((acc,cur)=>{
        let result = acc + cur
        return result
      });
  
      let avg = sum / el.grades.length
      el.grades = avg
  
      return el
    });
}

/**
 * sumOfArraysInArray
 * 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.

[예시]
let output = sumOfArraysInArray([
  [1, 2],
  [undefined, 4, '5'],
  [9, 'hello'],
]);
console.log(output); // --> 16
 */
function sumOfArraysInArray(arr) {
    const onlyNumber = val => {
      return typeof val === "number"
    }
  
    return arr
      .reduce(function(acc, cur) {
        return acc.concat(cur)
      },[])
      .filter(onlyNumber)
      .reduce((acc,cur)=>{
        let result = acc + cur
        return result
      },0)
}
  