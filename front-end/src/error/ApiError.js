class ApiError {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }

  static error(e) {
    const { status, message } = e;
    throw new ApiError(status, message);
  }
}

module.exports = ApiError;
