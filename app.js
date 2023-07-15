let num=(document.getElementById("display"));
function calculate(){
    if(!(num.value=="")){
            result=eval(num.value);
            num.value=result;
    }
}
function square(){
    n=Number(num.value);
     num.value*=n;
}