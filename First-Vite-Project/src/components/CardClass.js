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
    console.log(`${this.name} attacks ${target.name}`);
    target.resilience -= this.power;
    target.resilience > 0
      ? console.log(`${target.name} resilience is now ${target.resilience} \n`)
      : console.log(`${target.name} is defeated! \n`);
    //* The \n means "new line" for javascript strings
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      if (this.stat == "resilience") {
        console.log(
          `${this.name} effected ${this.name}. Resilience ${
            this.magnitude > 0 ? "increased" : "decreased"
          } by ${this.magnitude}`
        );
        target.resilience += this.magnitude;
        console.log(`Resilience is now ${target.resilience}. \n`);
      } else {
        console.log(
          `${this.name} effected ${target.name}. Power ${
            this.magnitude > 0 ? "increased" : "decreased"
          } by ${Math.abs(this.magnitude)}.`
        );
        target.power += this.magnitude;
        console.log(`Power is now ${target.power}.\n`);
      }
    } else {
      throw new Error("Target must be a unit!");
    }
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
