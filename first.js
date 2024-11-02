let btn=document.querySelector("button");

//let prompt="explain in brief in 3 to 4 lines";
async function get()
{
    let str=document.getElementById('ipt').value;
    let prompt="explain in brief in 8 lines";
   let promise=await fetch(`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${str}&key=2046c535afeb092fo82f1d306d8a2b2t`);
   let result=await promise.json();
   document.getElementById('h2').innerText=result.answer;
   console.log(result.answer);

}
btn.addEventListener("click",get);
