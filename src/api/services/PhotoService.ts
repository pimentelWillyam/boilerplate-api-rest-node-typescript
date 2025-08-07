import {Response} from "express"

class PhotoService{
    addPhoto(res: Response){
        res.status(200).json({
            message: "Foto adicionada com sucesso",
            status: "success"
        })
    }
}

export default PhotoService