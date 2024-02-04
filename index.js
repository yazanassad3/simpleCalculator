const buttonEl= document.querySelectorAll("button");
const inputField=document.getElementById("result");


for(let i=0;i<buttonEl.length;i++){
    buttonEl[i].addEventListener("click",()=>{
    const buttonValue=buttonEl[i].textContent;
    if(buttonValue==="c"){
        clearResult();
    }else if(buttonValue==="="){
        calculateResult();
    }else{
        appendValue(buttonValue);
    }

    });
}

function clearResult(){

    inputField.value="";

}

function calculateResult(){
    try {
        inputField.value=eval(inputField.value);
    } catch (error) {
        inputField.value="Error";        
    }

}

function appendValue(buttonValue){
    
    inputField.value +=buttonValue;
    

}