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
        alert(" Kindly Select the length ");
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
                    select = (select)%4+1;
                    if(select==0)
                    select = (select)%4+1;
                }
                if(lower==0 && select == 2){
                    select = (select)%4 +1;
                    if(select==0)
                    select = (select)%4 +1;
                }
                if(digit==0 && select == 3){
                    select = (select)%4+1;
                    if(select==0)
                    select = (select)%4+1;
                }
                if(special==0 && select == 4){
                    select = (select)%4+1;
                    if(select==0)
                    select = (select)%4+1;
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
        let text = document.getElementById('content').innerText;
        let u=[],l=[],d=[],s=[];
        for(let i=0;i<text.length;i++){
            if(charCodeAt(text[i])>=65 && charCodeAt(text[i])<=90)
            u.push(i);
            else if(charCodeAt(text[i])>=96 && charCodeAt(text[i])<=121)
            l.push(i);
            else if(charCodeAt(text[i])>=48 && charCodeAt(text[i])<57)
            d.push(i);
            else 
            s.push(i);
        }
         // for checking uppercase letter
        if(upper==1 && u.length==0){
            let text = document.getElementById('content').innerText;
            if(text.length!=length){
               while(text.length!=length){
                text+= getcapital();
                document.getElementById('content').innerText=text;
                let text = document.getElementById('content').innerText;
               }
            }
            else{
                let i = l.length;
                let j = d.length;
                let k = s.length;
                if(max(i,max(j,k))==i){
                    text[l[0]]=getcapital();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==j){
                    text[d[0]]=getcapital();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==k){
                    text[s[0]]=getcapital();
                    document.getElementById('content').innerText=text;
                }

            }

        }
       
        // for checking lowercase letter
         if(lower==1 && l.length==0){
            let text = document.getElementById('content').innerText;
            if(text.length!=length){
               while(text.length!=length){
                text+= getsmall();
                document.getElementById('content').innerText=text;
                let text = document.getElementById('content').innerText;
               }
            }
            else{
                let i = u.length;
                let j = d.length;
                let k = s.length;
                if(max(i,max(j,k))==i){
                    text[l[0]]=getsmall();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==j){
                    text[d[0]]=getsmall();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==k){
                    text[s[0]]=getsmall();
                    document.getElementById('content').innerText=text;
                }

            }

        }
        // for cheecking digits
         if(digit==1 && d.length==0){
            let text = document.getElementById('content').innerText;
            if(text.length!=length){
               while(text.length!=length){
                text+= getdigits();
                document.getElementById('content').innerText=text;
                let text = document.getElementById('content').innerText;
               }
            }
            else{
                let i = l.length;
                let j = u.length;
                let k = s.length;
                if(max(i,max(j,k))==i){
                    text[l[0]]=getdigits();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==j){
                    text[d[0]]=getdigits();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==k){
                    text[s[0]]=getdigits();
                    document.getElementById('content').innerText=text;
                }

            }

        }
        // for checking special letters
        if(special==1 && s.length==0){
            let text = document.getElementById('content').innerText;
            if(text.length!=length){
               while(text.length!=length){
                text+= getspecial();
                document.getElementById('content').innerText=text;
                let text = document.getElementById('content').innerText;
               }
            }
            else{
                let i = l.length;
                let j = d.length;
                let k = u.length;
                if(max(i,max(j,k))==i){
                    text[l[0]]=getspecial();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==j){
                    text[d[0]]=getspecial();
                    document.getElementById('content').innerText=text;
                }
                else if(max(i,max(j,k))==k){
                    text[s[0]]=getspecial();
                    document.getElementById('content').innerText=text;
                }

            }

        }
        

    }
}
