const { v4 } = require('uuid');

class GenerateTransactions {
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

  generate(mockup) {
    const currentYear = new Date().getFullYear();
    const years = [currentYear - 1, currentYear, currentYear + 1];
    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    const daysInAMonth = 30;
    const transactions = [];

    mockup.forEach(({ category, descriptions }) => (
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

module.exports = new GenerateTransactions();
