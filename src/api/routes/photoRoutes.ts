// importando core da rota
import * as express from "express"
import { Request, Response } from "express"
import PhotoController from "../controllers/PhotoController"

//importando service da rota
const photoController = new PhotoController()

//criando rotas
const photoRoutes  = express.Router()

photoRoutes.post("/photo", (req: Request,res: Response) => {photoController.postaPhoto(req,res)})

export default photoRoutes