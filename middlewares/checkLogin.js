const fs=require('fs/promises');
const jwt= require('jsonwebtoken');

const checkLogin=async (req,res,next)=>{
    const {authorization} = req.headers;

    try{
        const token= authorization.split(' ')[1];
        const secretKey= await fs.readFile(__dirname+'/../jwt/private.key');
        const decoded= jwt.verify(token,secretKey);
        //Attach userName and userId to the req object for farther processing
        req= {...req, ...decoded}; 
        next();
    }
    catch(err)
    {
        console.log(err);
        res.json({msg:"You are not allowed to do this!"});
    }
}

module.exports=checkLogin;