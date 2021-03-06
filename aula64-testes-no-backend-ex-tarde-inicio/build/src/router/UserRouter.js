"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
//linha responsável por criar um módulo de rotas no express
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/signup", new UserController_1.UserController().signup);
exports.userRouter.post("/login", new UserController_1.UserController().login);
exports.userRouter.post("/profile/:id", new UserController_1.UserController().getUserById);
