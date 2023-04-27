function greetVar(firstName){
    var time = 'night';
    if(time === 'night'){
        var greeting = 'Good Night';
    }
    return greeting + ' ' + firstName
}

greetVar("Kim");

function greetLet(firstName){
    let time = 'night';
    if(time === 'night'){
        let greeting = 'Good Night';
    }
    return greeting + ' ' + firstName
}

greetLet("Kim");