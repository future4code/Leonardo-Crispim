"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
// import { UserController } from "../controller/examplecontroller";
//linha responsável por criar um módulo de rotas no express
exports.userRouter = express_1.default.Router();
// userRouter.post("/signup", new UserController().signup);
// userRouter.post("/login", new UserController().login);
// userRouter.post("/profile/:id", new UserController().getUserById);
