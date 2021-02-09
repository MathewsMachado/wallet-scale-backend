class Mockup {
  constructor() {
    this.data = [
      {
        category: 'Recreation',
        descriptions: [
          'Went to watch Deno release',
          'Lunch at restaurant',
          'Travel to the beach',
        ],
      },
      {
        category: 'Shopping',
        descriptions: [
          'Bought a sausage clothe for my dog',
          'Grocery shopping',
          'Bought a gift for my mommy',
        ],
      },
      {
        category: 'Income',
        descriptions: [
          'Monthly income of freelance',
          'Extra income with pumpkin sales',
          'Made extra money with Foo at the Bar',
        ],
      },
      {
        category: 'Health',
        descriptions: [
          'Went to emergency after spend 24h studing JavaScript',
          'Got injured cutting onions',
          'Hit my eye on the door of fridge',
        ],
      },
      {
        category: 'Transport',
        descriptions: [
          'Took a bus',
          'Got an Uber to the work',
          'Got an Taxi to the airport',
        ],
      },
    ];
  }
}

module.exports = new Mockup();
