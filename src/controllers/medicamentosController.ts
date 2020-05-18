import {Request, Response} from 'express';

import pool from '../database'; 


class MedicamentosController{
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE medicamento');
        res.json('medicamentos');
    }
}

const medicamentosController = new MedicamentosController();
export default medicamentosController;