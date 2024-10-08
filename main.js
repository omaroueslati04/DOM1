var cbox= document.getElementById('color-box');
var cbtn=document.getElementById('change-color-btn');
var dark=document.getElementById('moon');
var body=document.getElementById('body')
function getRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, '0');
}

cbtn.addEventListener("click", function() {
   var newColor = getRandomColor(); 
    cbox.style.backgroundColor = newColor;
});
dark.addEventListener('click',function(){
    
    if  (body.style.backgroundColor=='white')
        body.style.backgroundColor='#1A1A1A';
    else
    body.style.backgroundColor="white";
    
})
