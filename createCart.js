function generateArrayNumbers() {
	let arr = [];

	for (let i = 1; arr.length < 32; i++) {
		arr.push(i);
	}

	return arr.sort(() => Math.random() - 0.5);
}

function createCards() {
	let arrPictureNumber = generateArrayNumbers();
	let arrayCards = [];
	for (let i = 0; i < arrPictureNumber.length; i++) {

		let newDiv = document.createElement('div');
		newDiv.classList.add('basicCart', 'notOpen');   /// 'notOpen'

		let numberCart = arrPictureNumber[i] > 16 ? arrPictureNumber[i] - 16 : arrPictureNumber[i];
		newDiv.style.backgroundImage = `url('images/${numberCart}.png')`;

		newDiv.id = arrPictureNumber[i];
		arrayCards.push(newDiv);
	}

	return arrayCards;
}

export function addCardsAndModel(domNodes, dataModel) {
	const cards = createCards();
	const defaltCardValue = {   checked: false,
								guessed: false
	};
	cards.forEach((item) => {
		domNodes.mainContainer.append(item);

		const modelElem = {
			...defaltCardValue,
			id: +item.id,
			numberCart: +item.id > 16 ? item.id - 16 : +item.id,
		}

		dataModel.cards.push(modelElem);
	})
}
