let valueArray = [];
function GetCurrentValue() {
    return document.getElementById("currentValue").innerText;
}
function SetCurrentValue(v) {
    document.getElementById("currentValue").innerText = v;
}

function clicked(newValue){
    let prev = GetCurrentValue();// Get prev value
    if (!prev) {
        prev = newValue;
    }
    else {
        if (newValue === '.') {
            if (!prev.includes('.')) {
                prev = "" + prev + newValue;  
            }
        } 
       else {
           prev = "" + prev + newValue;
        }
    }
    SetCurrentValue(prev); // Put back the value in HTML
    
}

function clrCurrent(){
    SetCurrentValue(""); // Put blank value in HTML
}
function clrAll(){
    clrCurrent(); // Put blank value in HTML
    document.getElementById("TotalEq").innerText = ""; // Put blank value in HTML
    valueArray.splice(0,valueArray.length);
}

function clickop(op){
    let currentValue = GetCurrentValue();
    if (currentValue || !IsOperatorLastItem()) {
        Add(currentValue);
        clrCurrent();
        if(op=='+'||op=='-'||op=='*'||op=='/'){
                        Add(op);                          
        }
    }
}
function IsOperatorLastItem() {
    return ['+','-','*','/'].includes(valueArray[valueArray.length - 1]); // true if last item = + - * /
}
function Equate() {
    let currentValue= GetCurrentValue();
    Add(currentValue);
    let result=eval(valueArray.join(''));
    clrAll()
    SetCurrentValue(result); // Put blank value in HTML
 }

 function Add(v) {
    valueArray.push(v);
    let num=valueArray.join('');
    document.getElementById("TotalEq").innerText=num;  
 }

 
   
 







    // Get the value from CurrentValue and put in a variable
    // Get the value from TotalEQ and put in a variable
    // check if CurrentValue is not blank
    // Put CurrentValue and op in TotalEQ [145, +]
    // valueArray.push({type: 'operand', value : CurrentValue});
    // valueArray.push({type: 'operator', value : op});

     // valueArray.push(CurrentValue);
    // valueArray.push(op);
 

 // let result = 0;
    // let left = valueArray[0] ;
    // let right = valueArray[2] ;
    // valueArray.forEach(v => {
    //     if (['+','-','*','/'].includes(v)) {
    //         result = clickequ(v, left, right);
    //     } 
    // });
    // 1. valueArray - from array to string
    // 2. call eval with value. let result.
    // 3. clrAll, show in result in HTML

/*function clickequ(op,n1,n2){

  switch(op){
     case '+':
         return n1+n2;
         break;
     case '-':
         return n1-n2;
         break;
    case '*':
        return n1*n2;
         break;
    case '/':
        return n1/n2;
         break;
    default: return ; 
 }
}*/




