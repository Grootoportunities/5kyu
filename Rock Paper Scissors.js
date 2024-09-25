// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples(Input1, Input2 --> Output):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  const pWon = (n) => `Player ${n} won!`;

  switch (p1) {
    case "scissors": {
      if (p2 === "paper") return pWon(1);
      else return pWon(2);
    }
    case "paper": {
      if (p2 === "scissors") return pWon(2);
      else return pWon(1);
    }
    default: {
      if (p2 === "paper") return pWon(2);
      else return pWon(1);
    }
  }
};

console.log(rps("paper", "scissors"));
