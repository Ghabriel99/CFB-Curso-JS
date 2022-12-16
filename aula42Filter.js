const filtroMaior18=(val)=>{
    if(val >=18)
        return val;
}

const idades=[10,13,16,17,18,20,23,33]

const maior=idades.filter((val,ind,arr)=>{
    if(val >=18)
        return val;
})
const menor=idades.filter((val,ind,arr)=>{
    if(val <=18)
        return val;
})

console.log(idades)
console.log(maior)
console.log(menor)