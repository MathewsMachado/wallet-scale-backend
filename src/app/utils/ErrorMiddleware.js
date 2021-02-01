class ErrorMiddleware {
  handle(error, request, response, next) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
}

module.exports = new ErrorMiddleware().handle;
