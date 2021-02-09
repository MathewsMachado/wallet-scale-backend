const { v4 } = require('uuid');

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

  getRandomDescription(descriptions) {
    const max = descriptions.length;
    const randomIndex = Math.floor(Math.random() * max);

    return descriptions[randomIndex];
  }

  generateRandomValue() {
    const randomValue = new Date().getMilliseconds() * Math.random();
    return randomValue.toFixed(2);
  }

  isTransactionValid() {
    const randomBoolean = Boolean(
      Math.round(Math.random()),
    );

    return randomBoolean && randomBoolean;
  }

  fillDateChunk(dateChunk) {
    return dateChunk.toString().padStart(2, '0');
  }

  formatDate(year, month, day) {
    return `${year}/${this.fillDateChunk(month)}/${this.fillDateChunk(day)}`;
  }

  generateTransactions() {
    const currentYear = new Date().getFullYear();
    const years = [currentYear - 1, currentYear, currentYear + 1];
    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    const daysInAMonth = 30;
    const transactions = [];

    this.data.forEach(({ category, descriptions }) => (
      years.forEach((year) => (
        months.forEach((month) => {
          for (let day = 1; day < daysInAMonth; day += 1) {
            if (month === 2 && day > 28) return;

            if (this.isTransactionValid()) {
              transactions.push({
                category,
                id: v4(),
                description: this.getRandomDescription(descriptions),
                type: category === 'Income' ? '+' : '-',
                value: this.generateRandomValue(),
                date: this.formatDate(year, month, day),
              });
            }
          }
        })
      ))
    ));

    return transactions;
  }
}

module.exports = new Mockup();
