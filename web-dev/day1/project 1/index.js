const button = document.getElementById('btn1');
const orc = 'white';
const ccr = 'red';
let isOrc = true;
button.addEventListener('click', function() { 
    if(isOrc){
    document.body.style.backgroundColor = ccr;
    }
    else{
        document.body.style.backgroundColor = orc;
    }
    isOrc = !isOrc; 


});
