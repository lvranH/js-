const exchange=(currency,amount) =>{
    let CNY;
    switch(currency){
        case "USD":
        CNY= amount *6.33;
        break;
        case"JPY":
        CNY= amount *0.06;
        break;      
        case"EUR":
        CNY= amount *7.74;
        break;     
        case"RUB":
        CNY= amount *0.1;
        break;
        case"FRF":
        CNY= amount *6.61;
        break;       
        default:
        return "erro";
        break;
    }
    return CNY;
};
console.log(exchange("JPY",50));