import { Request } from "express";

class PhotoValidator{
    isSalute(req: Request){
        if (req.body.mensagem === "bom dia"){
            return true
        }
        else{
            return false
        }
    }
}

export default PhotoValidator