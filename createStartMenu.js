export function createStartMenu () {
	let startMenu = document.createElement('div');
	startMenu.classList.add(`startMenu`);
	startMenu.insertAdjacentHTML(`afterbegin`,  
	`
	<h1 class="h1">Добро пожаловать в игру Memories!</h1>
	<div class="menuText">Выберите количество игроков:</div>
	<div class ="flexContainer">
		<div class="number one">Один</div>
		<div class="number two">Два</div>
		<div class="number three">Три</div>
		<div class="number four">Четыре</div>
		<div class="number five">Пять</div>
	</div>
	`);

	document.body.prepend(startMenu);
}