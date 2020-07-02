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
describe("Testing getallusers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("Test success", () => __awaiter(void 0, void 0, void 0, function* () {
        const getAllUsers = jest.fn(() => [new User_1.User("001", "Wilson", "wilsonmail", "12345", User_1.UserRole.ADMIN)]);
        userDatabase = { getAllUsers };
        const verify = jest.fn((token) => ({ id: "001", role: "ADMIN" }));
        tokenGenerator = { verify };
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
        const result = yield userBusiness.getAllUsers("tokenstring");
        expect(result).toEqual([{ id: "001", name: "Wilson", email: "wilsonmail", role: "ADMIN" }]);
    }));
    test("Test Failed, user not ADMIN", () => __awaiter(void 0, void 0, void 0, function* () {
        const verify = jest.fn((token) => ({ id: "001", role: "NORMAL" }));
        tokenGenerator = { verify };
        expect.assertions(2);
        //Line above serves to check number of tests inside the catch
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            const result = yield userBusiness.getAllUsers("tokenstring");
        }
        catch (error) {
            expect(error.message).toBe("User not an ADMIN.");
            expect(error.errorCode).toBe(401);
        }
    }));
});
