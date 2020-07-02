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
describe("Testing UserBusiness.signup", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("Should return 'Missing input' for empty name", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.signup("", "astrodev@gmail.com", "123456", "ADMIN");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Missing input");
        }
    }));
    test("Should return 'Missing input' for empty email", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.signup("Astrodev", "", "123456", "ADMIN");
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
            yield userBusiness.signup("Astrodev", "astrodev@gmail.com", "", "ADMIN");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Missing input");
        }
    }));
    test("Should return 'Missing input' for empty role", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.signup("Astrodev", "astrodev@gmail.com", "123456", "");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Missing input");
        }
    }));
    test("Should return 'Invalid email' for invalid email", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.signup("Astrodev", "astrodevgmail.com", "123456", "ADMIN");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Invalid email");
        }
    }));
    test("Should return 'Invalid password' for invalid password", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.signup("Astrodev", "astrodev@gmail.com", "12345", "superadmin");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Invalid password");
        }
    }));
    test("Should return 'Invalid role' for invalid role", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const generate = jest.fn(() => "id");
            idGenerator = { generate };
            const hash = jest.fn(() => "hash");
            hashGenerator = { hash };
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.signup("Astrodev", "astrodev@gmail.com", "123456", "superadmin");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Invalid user role");
        }
    }));
    test("Should return the accessToken in success", () => __awaiter(void 0, void 0, void 0, function* () {
        const generateId = jest.fn(() => "id");
        idGenerator = { generate: generateId };
        const hash = jest.fn(() => "hash");
        hashGenerator = { hash };
        const generateToken = jest.fn(() => "token");
        tokenGenerator = { generate: generateToken };
        const createUser = jest.fn((user) => { });
        userDatabase = { createUser };
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
        const result = yield userBusiness.signup("Astrodev", "astrodev@gmail.com", "123456", "ADMIN");
        expect(result.accessToken).toBe("token");
        expect(hash).toHaveBeenCalledWith("123456");
        expect(generateId).toHaveBeenCalledTimes(1);
        expect(generateToken).toHaveBeenCalledWith({ id: "id", role: "ADMIN" });
        expect(createUser).toHaveBeenCalledWith(new User_1.User("id", "Astrodev", "astrodev@gmail.com", "hash", User_1.stringToUserRole("ADMIN")));
    }));
});
