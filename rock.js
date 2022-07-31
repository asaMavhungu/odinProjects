function random_item(items){
	return items[ Math.floor(Math.random()*items.length) ];    
}

function getComputerChoice(){
	let items = ["rock", "paper", "scissors"];
	return random_item(items);
}

function playRound(playerSelection, computerSelection) {
	//console.log(computerSelection+ playerSelection)
	let winner = "computer";
	if (playerSelection  === computerSelection  ){
		winner = "draw";
	}
	else if (playerSelection  === "rock" && computerSelection  === "scissors"){
		winner = "player";
	}
	else if (playerSelection  === "paper" && computerSelection  === "rock"){
		winner = "player";
	}
	else if (playerSelection  === "scissors" && computerSelection  === "paper"){
		winner = "player";
	}

	if (winner === "computer"){
		return "You Lose! " + computerSelection + " beats " + playerSelection;
	}
	else if (winner === "player"){
		return "You Win! " +  playerSelection+ " beats " + computerSelection;
	}
	else if (winner==="draw") {
		return "Draw";
	}

}

function game(){
	const playerSelection = "rock";
	const computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i <5; i++){
	game();
}
   
