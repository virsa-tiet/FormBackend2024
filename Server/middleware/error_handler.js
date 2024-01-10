const errHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Server Error";
    const extraDetails = err.extraDetails || "Server not responding";
    
    console.error(`[${req.method}]  ${req.path} >> StatusCode:: ${status}, Message:: ${extraDetails} `);    

    return res.status(status).json({ message, extraDetails });
};

module.exports = errHandler;