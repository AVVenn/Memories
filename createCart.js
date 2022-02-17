function generateArrayNumbers() {
	let arr = [];

	for (let i = 1; arr.length < 32; i++) {
		arr.push(i);
	}

	return arr.sort(() => Math.random() - 0.5);
}

function createCarts() {
	let arrPictureNumber = generateArrayNumbers();
	let arrayCarts = [];
	for (let i = 0; i < arrPictureNumber.length; i++) {

		let newDiv = document.createElement('div');
		newDiv.classList.add('basicCart');   /// 'notOpen'

		let numberCart = arrPictureNumber[i] > 16 ? arrPictureNumber[i] - 16 : arrPictureNumber[i];
		newDiv.style.background = `url('images/${numberCart}.png') center / cover no-repeat`;

		newDiv.id = arrPictureNumber[i];
		arrayCarts.push(newDiv);
	}

	return arrayCarts;
}

export function addCartsAndModel(domNodes, data) {
	createCarts().forEach((item) => {
		domNodes.mainContainer.append(item);

		let modelElem = {
			id: +item.id,
			numberCart: +item.id > 16 ? item.id - 16 : +item.id,
			checked: false,
			guessed: false
		}

		data.carts.push(modelElem);
		console.log(data.carts);
	})
}