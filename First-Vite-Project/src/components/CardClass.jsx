class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    console.log(`${this.name} "attacks" ${target.name}`);
  }
}

// Unit Cards
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

//Effect Cards
const hardAlgorithm = new Effect(
  "Hard Algorithm",
  2,
  "	increase target's resilience by 3",
  "resilience",
  3
);
const unhandledPromiseRejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  "reduce target's resilience by 2",
  "resilience",
  -2
);
const pairProgramming = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);

hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
