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
    test("Should return 'Missing input' for empty email", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.login("", "123456");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Missing input");
        }
    }));
    test("Should return 'Missing input' for empty password", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.login("astrodev@gmail.com", "");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Missing input");
        }
    }));
    test("Should return 'User not found' when there is no user with the provided email", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const getUserByEmail = jest.fn((user) => { });
        userDatabase = { getUserByEmail };
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.login("no-user@gmail.com", "123456");
        }
        catch (err) {
            expect(getUserByEmail).toHaveBeenCalledWith("no-user@gmail.com");
            expect(err.errorCode).toBe(404);
            expect(err.message).toBe("User not found");
        }
    }));
    test("Should return 'Invalid password' for invalid password", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(4);
        const getUserByEmail = jest.fn((user) => {
            return new User_1.User("id", "Astrodev", "astrodev@gmail.com", "hash", User_1.UserRole.ADMIN);
        });
        userDatabase = { getUserByEmail };
        const compareHash = jest.fn(() => false);
        hashGenerator = { compareHash };
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.login("astrodev@gmail.com", "123456");
        }
        catch (err) {
            expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
            expect(compareHash).toHaveBeenCalledWith("123456", "hash");
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Invalid password");
        }
    }));
    test("Should return the accessToken in success", () => __awaiter(void 0, void 0, void 0, function* () {
        const getUserByEmail = jest.fn((user) => {
            return new User_1.User("id", "Astrodev", "astrodev@gmail.com", "hash", User_1.UserRole.ADMIN);
        });
        userDatabase = { getUserByEmail };
        const compareHash = jest.fn(() => true);
        hashGenerator = { compareHash };
        const generateToken = jest.fn(() => "token");
        tokenGenerator = { generate: generateToken };
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
        const result = yield userBusiness.login("astrodev@gmail.com", "123456");
        expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
        expect(compareHash).toHaveBeenCalledWith("123456", "hash");
        expect(generateToken).toHaveBeenCalled();
        expect(result.accessToken).toBe("token");
    }));
});
