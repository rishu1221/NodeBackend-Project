//For throwing custom errors
class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.explaintation = message;
    }

}

module.exports = AppError