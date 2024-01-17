
var cb_lowercase=document.getElementById("low");
var cb_uppercase=document.getElementById("up");
var cb_number=document.getElementById("num");
var cb_symbol=document.getElementById("sym");
var myinp=document.getElementById("myinp");
var mybtn=document.getElementById("mybtn");
var passlengthinp=document.getElementById("passlength");

var includelowercase;
var includeuppercase;
var includenumbers;
var includesymbols;



mybtn.onclick=function generator(){

    var length=passlengthinp.value

    if(cb_lowercase.checked){
        includelowercase=true;
    }
    else{
        includelowercase=false; 
    }
    
    
    if(cb_uppercase.checked){
        includeuppercase=true;
    }
    else{
        includeuppercase=false;
    }
    
    
    if(cb_number.checked){
        includenumbers=true;
    }
    else{
        includenumbers=false;
    }
    
    
    if(cb_symbol.checked){
        includesymbols=true;
    }
    else{
        includesymbols=false;
    
    }
    

    var lowercasechars="abcdefghijklmnopqrstuvwxyz";
    var uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers="0123456789";
    var symbols="!@#$%^&*()_+-=";

    var allowedletters="";
    var password=""

    allowedletters+= includelowercase ? lowercasechars:"";
    allowedletters+= includeuppercase ? uppercasechars:"";
    allowedletters+= includenumbers ? numbers:"";
    allowedletters+= includesymbols ? symbols:"";

    if(allowedletters.length == 0)
    {
        return `include a thing`;
    }
    if(length<=0){
        return `length must be greater than 0 `;
    }
    for(let i=0;i<length;i++)
    {
        var randomindex= Math.floor(Math.random()*allowedletters.length)
        password+=allowedletters[randomindex];
    }

    myinp.value=password;

}
