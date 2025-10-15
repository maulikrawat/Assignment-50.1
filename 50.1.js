 let numbers =[3,23,7,17,42,9,22,4,33,88,13,27,10,64];
let reset = document.getElementById('result');
function evenNo(){
  reset.innerHTML=" ";
  let no= numbers.filter((no)=>(no%2===0));
   for(let i of no){
    reset.innerHTML+=`<span> ${i}</span>`;
  }
}
function oddNo(){
  reset.innerHTML=" ";
  let no= numbers.filter((no)=>(no%2!==0));
  for(let i of no){
    reset.innerHTML+=`<span> ${i}</span>`;
  }
} 