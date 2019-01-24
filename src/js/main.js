const testTranspile = () => console.log('ES6 Config Funcionando!');

testTranspile();

(function(){

	var btnMenu = document.querySelector('.menu h1'),
		menuShow = document.querySelector('.menu .active > ul');

	btnMenu.addEventListener('click',function(){
		this.classList.toggle("active");
	});

}());