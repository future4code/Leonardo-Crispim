import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing getallusers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Test success", async () => {
        const getAllUsers = jest.fn( () => [ new User("001", "Wilson", "wilsonmail", "12345", UserRole.ADMIN ) ] )
        userDatabase = { getAllUsers }

        const verify = jest.fn( (token: string) => ({id: "001", role: "ADMIN"}) )
        tokenGenerator = { verify }

        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        const result = await userBusiness.getAllUsers("tokenstring");

        expect(result).toEqual([{id: "001", name: "Wilson", email: "wilsonmail", role: "ADMIN" }]);
    });

    test("Test Failed, user not ADMIN", async () => {
        const verify = jest.fn( (token: string) => ({id: "001", role: "NORMAL"}) )
        tokenGenerator = { verify }

        expect.assertions(2)
        //Line above serves to check number of tests inside the catch

        try{
            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
              );
        
              const result = await userBusiness.getAllUsers("tokenstring");
        }
        catch(error){
            expect(error.message).toBe("User not an ADMIN.")
            expect(error.errorCode).toBe(401)
        }
    });

})