// # EconFiddle:

class Human extends EconFiddle.Agent {
  constructor(wage) {
    this.wage = wage;
  }

  actionSpace() {
    {
      hoursWorked: EconFiddle.floatBetween(0, 80);
    }
  }

  utility(world, action) {
    var preTaxIncome = this.wage * action.hoursWorked;
    var postTaxIncome = (1 - world.taxRate) * preTaxIncome + world.universalBasicIncome;

    return Math.log(postTaxIncome);
  }
}

class TaxWorld extends EconFiddle.World {
  agents() {
    return Array(100).map((x) => new Human(Math.random() * 80 + 40))
  }

  state(agents) {
    var gdp = agents.map(())
  }
}

