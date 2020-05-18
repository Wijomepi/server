"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicamentosController_1 = __importDefault(require("../controllers/medicamentosController"));
class MedicamentosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', medicamentosController_1.default.index);
    }
}
const medicamentosRoutes = new MedicamentosRoutes();
exports.default = medicamentosRoutes.router;
