import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

function CheckAuth(req,res,next){

    const x=req.headers.authorization;
    
    if(!x){
        return res.status(401).json({
            message:"Authorization failed"
        });
    }
    else{
        const token=req.headers.authorization.split(" ")[1];
        
            if(!token){
                return res.status(401).json({
                    message:"Auth failed"
                })
            }
            try{
                const decoded=jwt.verify(token,process.env.JWT_KEY);
                req.userData=decoded;
                console.log(req.userData);
                next();
            }catch(err){
                return res.status(401).json({
                    message:"Auth failed"
                })
            }
    }

}

export default CheckAuth;