function createPlayers (numberPlayers) {		
	let arrNickName = [`гном`, `монстр`, `Валерчик`, `гений`, `бог`];
	let arrayPlayers = [];

	for(let b = 0; b <= numberPlayers; b++) {
		let newPlayer = document.createElement('div');
		newPlayer.classList.add('basicPlayer');                           
		newPlayer.id = `player` + b;
		newPlayer.textContent = `определяем...`;
		newPlayer.nick = arrNickName[b];                     
		arrayPlayers.push(newPlayer);
	}
	return arrayPlayers;
}

export function addPlayers (domNodes, data, numberPlayers) {
	let players = createPlayers(numberPlayers - 1); 										
	players.forEach((player) => {
		domNodes.footer.append(player);
		let modelPlayers = {				
			id: player.id,
			points: 0,
			passedRound: false,
			nick: player.nick
		}
		data.players.push(modelPlayers);
	})
}

