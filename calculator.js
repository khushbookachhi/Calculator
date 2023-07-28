var buttons =document.getElementsByClassName("button");
var display=document.getElementById("display");

var operand1=0;
var operand2=null;
var operator=null;
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
   var value=this.getAttribute('data-value');
   if(value=='+' || value=='-' || value=='*'||value=='/'||value=='AC'){
   operator=value;
   operand1=parseFloat(display.textContent);
   display.innerText="";
   }else if(value=="%"){
    operator=value;
   operand1=parseFloat(display.textContent);
   display.innerText="";
   var result=eval(operand1+'*1/100');
   display.innerText+= result;
   }else if(value=='+/-'){
    operand1=parseFloat(display.textContent);
    display.innerText="";
     var result=eval(operand1+'* -1');
     display.innerText+= result;
   }else if(value=='C'){
    var str=display.innerText;
    display.innerText = str.substring(0, str.length - 1);
   }else if(value=='='){
    operand2=parseFloat(display.textContent);
    
    var result=eval(operand1+" "+operator+" "+operand2);
    display.innerText="";
    if(result=='Infinity'){
        display.innerText+='Error';  
    }else
    display.innerText+= result;
    operand1=0;
    operand2=null;
    operator=null;
   }else{
    display.innerText+= value;
   }
    });
}



document.addEventListener('keydown',function(event){
if(event.key=='1'|| event.key=='2'|| event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9'||event.key=='0'){
    display.innerText+=event.key;
}else if(event.key=='+'||event.key=='*'||event.key=='/'||event.key=='-'){
    operator=event.key;
 operand1=parseFloat(display.textContent);
 
 display.innerText='';
}else if(event.key=='Backspace'){
    var str=display.innerText;
    display.innerText=str = str.substring(0, str.length - 1);  
}
else if(event.key=='='|| event.key=='Enter'){
    operand2=parseFloat(display.textContent);
    var result=eval(operand1+" "+operator+" "+operand2);
    display.innerText="";
    if(result=='Infinity'){
        display.innerText+='Error';  
    }else
    display.innerText+= result;
    operand1=0;
    operand2=null;
    operator=null;
   
}
});

   

