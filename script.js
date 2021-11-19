const rawTxt=document.querySelector("textarea[name=txtarea]")
const finTxt=document.querySelector("textarea[name=output]")
const btnTxt=document.querySelector("button")
const counter = document.querySelector('.counter')
btnTxt.addEventListener("click",function() {
    let temp =rawTxt.value;
    let exp =/([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    let emailData=temp.match(exp);
    let holder=[];
    for(let x=0;x<emailData.length;x++){
        if(holder.indexOf(emailData[x])==-1){
            holder.push(emailData[x]);
        }
    }
    let tempHolder = holder.join("\n")
    counter.innerHTML ="Emails Found: "+holder.length;
   
    finTxt.innerHTML = tempHolder
})
 
