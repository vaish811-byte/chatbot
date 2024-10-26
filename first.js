async function call(prompt,context)
{
    let promise=await fetch(`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=2046c535afeb092fo82f1d306d8a2b2t`);
    document.getElementById('h3').innerHTML="fetching......";
    let str=await promise.json();
    console.log(str.answer);
    document.getElementById('h3').innerHTML=str.answer;
   
    
}
function get()
{
let str=document.getElementById('ipt').value;
console.log(str);
call(str,"explain in brief");

}

