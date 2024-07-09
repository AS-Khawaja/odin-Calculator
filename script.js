const buttons = document.querySelectorAll('button');

let op1='';
let op2='';
let operator='';
let result=0;

function evaluate(num1,num2,operator){
    console.log({num1});
    console.log({num2});
    let op1=parseInt(num1);
    let op2=parseInt(num2);

    if(operator=='+'){
        return op1+op2;
    }
    else if(operator=='-'){
        return op1-op2;
    }
    else if(operator=='*'){
        return op1*op2;
    }
    else if(operator=='/'){
        return op1/op2;
    }
    else if(operator=='%'){
        return op1%op2;
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let value = buttons[i].textContent;
        let numval=parseInt(value);

        if((numval>=0&&numval<=9)&&operator==='')
        {
            
            op1+=value;
        }

        if(value=='+'|| value=='-' || value=='*' || value=='/' || value=='%')
        {
            operator=value;

        }

        if(operator!=''&&(numval>=0&&numval<=9)){
            op2+=value;
        }

        if(value=='C'){
            op1='';
            op2='';
            operator='';
            result=0;
            document.getElementById('display').innerHTML=0;
        }
        if(value=='=' && op1!='' && op2!='' && operator!=''){
            result=evaluate(op1,op2,operator);
            document.getElementById('display').textContent=result;
            console.log({result});
            op1='';
            op2='';
            operator='';
        }
        
    });
}

