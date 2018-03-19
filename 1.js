const exchangeRmb =(dollar) =>{
    const rmb=dollar * 6.33;
    return rmb;
};
const exchangeDollar =(rmb) =>{
    const dollar=rmb/ 6.33;
    return dollar;
};
console.log(exchangeRmb(2));
console.log(exchangeDollar(50));






