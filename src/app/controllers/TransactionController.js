class TransactionController {
  index(request, response) {
    response.status(200).json({ FromController: true });
  }
}

module.exports = new TransactionController();
