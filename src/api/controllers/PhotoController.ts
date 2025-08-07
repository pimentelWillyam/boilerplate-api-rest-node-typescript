import {Request,Response} from "express"

import PhotoService from "../services/PhotoService"
import PhotoValidator from "../validators/PhotoValidator"

const photoValidator = new PhotoValidator()

const photoService = new PhotoService()

class PhotoController{
    postaPhoto(req: Request, res: Response){
        if (photoValidator.isSalute(req)){
            photoService.salute(res)
        }
        else{
            photoService.farewell(res)
        }
    }

    addPhoto(req: Request, res: Response){
        photoService.
    }

    comparePhotoWithDatabase(req: Request, res: Response){

    }

}

export default PhotoController