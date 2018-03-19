const exchange=(currency,amount) =>{
    let CNY;
    if(currency==="USD"){
        CNY= amount *6.33;
    }else if(currency==="JPY"){
        CNY= amount *0.06;
    }else if(currency==="EUR"){
        CNY= amount *7.74;
    }else if(currency==="RUB"){
        CNY= amount *0.1;
    }else if(currency==="FRF"){
        CNY= amount *6.61;
    }else {return "erro";
    }
    return CNY;
};
console.log(exchange("dak",50));
