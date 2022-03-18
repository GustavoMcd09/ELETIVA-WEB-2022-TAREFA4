var loop = 0;
function turnonturnoff(){
    if(loop %2 == 0){
        document.getElementById("lampout").src="./assets/yellowlamp.png";
        document.body.style.background = '#ffff8c';
    }
    else{
        document.getElementById("lampout").src="./assets/graylamp.png";
        document.body.style.background = '#d4d4d4';
    }
    loop++;
}

function turnon(){
    document.getElementById("lampout").src="./assets/yellowlamp.png";
    document.body.style.background = '#ffff8c';
}

function turnoff(){
    document.getElementById("lampout").src="./assets/graylamp.png";
    document.body.style.background = '#d4d4d4';
}