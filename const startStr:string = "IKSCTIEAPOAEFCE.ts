const startStr:string = "IKSCTIEAPOAEFCE";
// const startStr:string = "123456789";
// const startStr:string = "абвгдеёжзийклмн";

const str = "1234";
let arr =  str.split("")
let a =  startStr.split("");
const b = startStr.split("").slice(9,100);
const c = [...a,...b];
let d;
for(let i = 0; i<=11321;i++){
    const firstHalf = a.slice(1,10);
    const secondHalf = a.slice(10,100);
    a = [...firstHalf,a[0],...secondHalf];
    d=a
}
console.log(a)


// console.log(a)