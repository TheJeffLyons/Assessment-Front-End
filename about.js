console.log("hello world");

let form = document.querySelector('form#contact');


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function catAlert(){

alert('Thanks for being wonderful!');

}


form.addEventListener('submit', handleSubmit);

document.getElementById('catPic').addEventListener('mouseover', catAlert)
