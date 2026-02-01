const btns= document.querySelectorAll(".btn");
const resultDisplay= document.querySelector(".result");

let operationResult="";


const handleCalculation=(btn)=>{
  if(btn=="AC"){
    operationResult="";
  }else if (btn=="+/-" && operationResult!=""){
    operationResult=operationResult*-1;
  }else if (btn=="=" && operationResult!=""){
    operationResult=eval(operationResult.replace("%","/100"));
  }else{
    const lastChar=resultDisplay.value.charAt(resultDisplay.value.length -1);
    if (isNaN(lastChar) && isNaN(+btn)) return; 
    operationResult+=btn;
  }

    resultDisplay.value=operationResult;
};



btns.forEach(btn=>{
    btn.addEventListener("click",btn=>{
        handleCalculation(btn.target.dataset.operation);
    });
});


