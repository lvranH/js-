const  sel =(n) =>{
    let answer;
    switch(n){
        case 1:
        answer="D";
        break;
        case 2:
        answer="C";
        break;
        case 3:
        answer="D";
        break;
        case 4:
        answer="C";
        break;
        case 5:
        answer="B";
        break;
        case 6:
        answer="B";
        break;
        case 7:
        answer="C";
        break;
        case 8:
        answer="B";
        break;
        case 9:
        answer="B";
        break;
        case 10:
        answer="D";
        break;
        case 11:
        answer="B";
        break;
        case 12:
        answer="A";
        break;
        default:
        return "erro";
        break;
    }
    return answer;
};
console.log(sel(5));