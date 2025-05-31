const {StatusCodes} = require('http-status-codes')


const info = (req,res)=>{
    return res.status(StatusCodes.OK).json({
        success : true,
        status : "I am alive",
        data : {},
        error : {},
    });
}

module.exports = {
    info
}