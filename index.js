console.log("inside js file");
function getsmall(){
    return String.fromCharCode(Math.floor(Math.random()*26 + 96));
}
console.log(getsmall());

function getcapital(){
    return String.fromCharCode(Math.floor(Math.random()*26 + 65));
}
console.log(getcapital());

function getdigits(){
    return String.fromCharCode(Math.floor(Math.random()*10 + 48));
}
console.log(getdigits());

function getspecial(){
    const spchars = ['@','#','$','&','*','!','(',')','{','}','[',']','?','/','|'];
    let char = Math.floor(Math.random()*15);
    return spchars[char];
}
console.log(getspecial());


function generatepswd(){
    document.getElementById('content').innerText="";
    let length  = document.getElementById('p-length').value;
    if(length=="" ){
        alert(" Kindly Select the   length ");
    }
    if(length<1){
        alert("invalid length ");
        document.getElementById('p-length').value="";
    }
    else{
        // let checked =document.querySelectorAll('input[type="checkbox"]:checked');
        let upperletter = document.getElementById('upperletter').checked;
        let lowerletter = document.getElementById('lowerletter').checked;
        let digits = document.getElementById('digitletter').checked;
        let specialletter = document.getElementById('specialletter').checked;

        let distinct = 0,upper=0,lower=0,digit=0,special=0;
        if(upperletter)
        {
            distinct++;
            upper=1;
        }
        if(digits)
        {
            distinct++;
            digit=1;
        }
        if(lowerletter)
        {
            distinct++;
            lower=1;
        }
        if(specialletter)
        {
            distinct++;
            special=1;
        }

        if(distinct==0){
            alert("kindly select any value");
        }
        
        for(let i=0;i<length;i++){
            let select = Math.floor(Math.random()*4 + 1);
            console.log(select);
            if(distinct!=4){
                if(upper==0 && select == 1){
                    select = (select+1)%4;
                    if(select==0)
                    select = (select+1)%4;
                }
                if(lower==0 && select == 2){
                    select = (select+1)%4;
                    if(select==0)
                    select = (select+1)%4;
                }
                if(digit==0 && select == 3){
                    select = (select+1)%4;
                    if(select==0)
                    select = (select+1)%4;
                }
                if(special==0 && select == 4){
                    select = (select+1)%4;
                    if(select==0)
                    select = (select+1)%4;
                }
                
            }
            console.log(select);
            if(select == 1 && upper==1){
                let text = document.getElementById('content').innerText;
                text+= getcapital();
                document.getElementById('content').innerText=text;

            }
            else if(select == 2 && lower==1){
                let text = document.getElementById('content').innerText;
                text+= getsmall();
                document.getElementById('content').innerText=text;

            }
            else if(select == 3 && digit==1){
                let text = document.getElementById('content').innerText;
                text+= getdigits();
                document.getElementById('content').innerText=text;

            }
            else if(select == 4 && special==1){
                let text = document.getElementById('content').innerText;
                text+= getspecial();
                document.getElementById('content').innerText=text;

            }
            
        }

    }
}