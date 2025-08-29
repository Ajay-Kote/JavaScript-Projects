const btn = document.querySelector("#btn");
const gen = document.querySelector("#gen");
let output = document.getElementById('out');
let password = "no password";

gen.addEventListener('click',()=>{
    const val = document.getElementById('len').value;
    const n = Number(val);
    if(n>20){
        alert("length is too long");
        return;
    }
    let len = 8;
    if(Number.isInteger(n) && n>0){
        len = n;
    }else{
        len = 8;
    }
    let genpass="";
    let totalString="";
    const cap = document.getElementById('cap').checked;
    const small = document.getElementById('small').checked;
    const num = document.getElementById('num').checked;
    const sym = document.getElementById('sym').checked;

    const smallString = "asdfghjklqwertyuiopzxcvbnm";
    const capString = "ASDFRGTHJKLQWERTYUIOPZXCVBNM";
    const numString = "1234567890";
    const symString = "~!@#$%^&*()_+<>?,./\][{}";
    if(!small && !cap && !num && !sym){
        alert("select atleast one character type");
        return;
    }
    if(small){
        genpass += smallString[Math.floor(Math.random()*smallString.length)];
        totalString+=smallString;
        len--;
    }
    if(cap){
        genpass += capString[Math.floor(Math.random()*capString.length)];
        totalString+=capString;
        len--;
    }
    if(num){
        genpass += numString[Math.floor(Math.random()*numString.length)];
        totalString+=numString;
        len--;
    }
    if(sym){
        genpass += symString[Math.floor(Math.random()*symString.length)];
        totalString+=symString;
        len--;
    }

    for(let i=0;i<len;i++){
        genpass+=totalString[Math.floor(Math.random()*totalString.length)];
    }
    
    password = genpass;
    output.innerText = password;
})


btn.addEventListener('click',()=>{
    if(password === "no password" || password === "Please check uppercase option"){
        alert("Generate a password first!");
        return;
    }
    navigator.clipboard.writeText(password)
    .then(()=>{
        alert("Copied");
    })
    .catch(()=>{
        alert("Failed!!!");
    })
})