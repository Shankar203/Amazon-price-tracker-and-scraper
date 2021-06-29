var a=document.getElementById('nam');
var b=document.getElementById('greet');
a.addEventListener('keyup',function(){
    b.innerHTML="hello" + a.value;
})