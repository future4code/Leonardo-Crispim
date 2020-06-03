import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.login", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Wrong ID, no user found", async () => {
        const getUserById = jest.fn( () => "")
        userDatabase = { getUserById }

      try {
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getUserById("9999");

      } catch (err) {
        expect(err.errorCode).toBe(404);
        expect(err.message).toBe("User not found");
      }
    });

    test("User found, success", async () => {
        const getUserById = jest.fn( () => 
        {
            return new User("001", "Wilson", "wilsonmail@gmail.com", "12345", UserRole.ADMIN)
        })
        userDatabase = { getUserById }

        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        )
  
        const result = await userBusiness.getUserById("001");

        expect(result).toEqual({id: "001",
            name: "Wilson",
            email: "wilsonmail@gmail.com",
            role: "ADMIN"
        })
    });


})