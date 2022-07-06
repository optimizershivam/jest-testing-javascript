function sum(...args) {

    if(args.length===0) 
    {
        return "sum invoked without arguments"
    }
    if(args.length===1) 
    {
        return "sum function needs atleast two arguments"
    }
//  a = +a;
//  b= +b;
//   let result = Number((a + b).toFixed(1))
//   return result 
const sumValue = [...args].reduce((a,c)=> a + Number(c),0)
return Number(sumValue.toFixed(1))
}

module.exports = sum