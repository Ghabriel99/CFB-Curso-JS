const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2

let num=['1','2','3','4','5'].map(converterInt)


let el=document.getElementsByTagName("div")
const val=Array.prototype.map.call(el, ({innerHTML})=>innerHTML)

//Spread do elemento 
el= [...el]

el.map((e,)=>{
    e.innerHTML="CFB"
})

