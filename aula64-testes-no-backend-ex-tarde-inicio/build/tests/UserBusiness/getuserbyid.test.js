"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../../src/business/UserBusiness");
const User_1 = require("../../src/model/User");
describe("Testing UserBusiness.login", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("Wrong ID, no user found", () => __awaiter(void 0, void 0, void 0, function* () {
        const getUserById = jest.fn(() => "");
        userDatabase = { getUserById };
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.getUserById("9999");
        }
        catch (err) {
            expect(err.errorCode).toBe(404);
            expect(err.message).toBe("User not found");
        }
    }));
    test("User found, success", () => __awaiter(void 0, void 0, void 0, function* () {
        const getUserById = jest.fn(() => {
            return new User_1.User("001", "Wilson", "wilsonmail@gmail.com", "12345", User_1.UserRole.ADMIN);
        });
        userDatabase = { getUserById };
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
        const result = yield userBusiness.getUserById("001");
        expect(result).toEqual({ id: "001",
            name: "Wilson",
            email: "wilsonmail@gmail.com",
            role: "ADMIN"
        });
    }));
});
