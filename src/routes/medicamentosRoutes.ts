import { Router } from 'express';

import medicamentosController from '../controllers/medicamentosController'; 


class MedicamentosRoutes{
    public router: Router = Router();

    constructor (){
        this.config();
    }
    config(): void{
        this.router.get('/',medicamentosController.index);
    }
}

const medicamentosRoutes = new MedicamentosRoutes();
export default medicamentosRoutes.router;