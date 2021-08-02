console.log(document)


///selectors 
console.log(document.getElementById('total'))
console.log(document.getElementsByClassName('plus'))
console.log(document.getElementsByTagName('div'))
console.log(document.querySelectorAll('.plus'));
console.log(document.querySelectorAll('#total'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelector('.plus'));


///code

var plusbuttons = document.querySelectorAll('.plus');
// console.log('this is our buttons table', plusbuttons);


function increment(event){
    // console.log('this is where we clicked ',event.target);
    var plusbutton = event.target;
    // console.log(plusbutton);
    var parent = plusbutton.parentElement;
    // console.log(parent);
    var quantitytag = parent.querySelector('p');
    // console.log(quantitytag);
    var quantitytag = Number(quantitytag.innerHTML);
    console.log(quantity);
    quantity++;
    quantitytag.innerHTML = quantity;
}





for (let i = 0; i < array.length; i++) {
    plusbuttons[i].addEventListener('click',increment)
}


var heart = document.querySelectorAll('.like');

function togglecolor(event){
    var chosenheart = event.target;
    console.log(chosenheart);  
    chosenheart.style.color = 'red'; 
}

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener('click', togglecolor);
    
}



