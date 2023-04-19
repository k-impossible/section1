/*
convertScoreToGradeWithPlusAndMinus
점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
90 이상 --> 'A'
80 이상 --> 'B'
70 이상 --> 'C'
60 이상 --> 'D'
60 미만 --> 'F'
만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다. (단, 93점의 경우에는 A를 리턴해야 합니다.)
각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
F+ 와 F- 는 존재하지 않습니다.
*/

function plusOrMinus(score) {
    const extra = score % 10;
    if (extra <= 2) {
      return '-';
    } else if (extra >= 8) {
      return '+';
    } else {
      return '';
    }
  }
  
  function convertScoreToGradeWithPlusAndMinus(score) {
    let grade;
    if (score > 100 || score < 0) {
      return 'INVALID SCORE';
    }
    if (score === 100) {
      return 'A+';
    }
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else if (score >= 0) {
      grade = 'F';
    }
  
    if (grade !== 'F') {
      grade = grade + plusOrMinus(score);
    }
    return grade;
  }

  
  