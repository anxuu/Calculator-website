let string ="";
let buttons = document.querySelectorAll(".container");
let result="";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            document.querySelector('.answer').innerHTML=string+"=";
                string = string.replaceAll("×", "*");
                string = string.replaceAll("÷", "/");
                string=eval(string);
            document.querySelector('.query').innerHTML=string;
            
        }else  if(e.target.innerHTML == "AC"){
            string="";
            document.querySelector('.query').innerHTML=string;
            document.querySelector('.answer').innerHTML=string;
        }else  if(e.target.innerHTML == "⌫"){
            if(string != ""){
                // let last = string.charAt(string.length-1);
                string =string.substring(0,string.length-1);
                document.querySelector('.query').innerHTML=string;
                document.querySelector('.answer').innerHTML=string;
            }
        }
        else{
            console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('.query').innerHTML=string; 
        document.querySelector('.answer').innerHTML=string; 
        }
       
    })
})