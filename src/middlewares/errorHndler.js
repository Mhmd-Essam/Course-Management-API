
const notfound = async (req, res, next) => {
    const error = new Error(`Not found: ${req.originalUrl}`);
    res.status(404);
    next(error);
  };

const errorHandler = async(err,req,res,next)=>{ 
    const statuscode = res.statusCode === 200 ? 500 :res.statusCode ; 
    res.status(statuscode).json({ 
        message:err.message
    })
}

module.exports = {errorHandler,notfound}; 
