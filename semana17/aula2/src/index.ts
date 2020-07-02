import express, {Request, Response} from "express";
import dotenv from "dotenv";
import {AddressInfo} from "net";
import {CreateId} from "./services/CreateId";
import {DataBase} from "./data/DataBase";
import {Authenticator} from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { stringify } from "querystring";
import { userInfo } from "os";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

async function main(): Promise<void> {
    app.post("/signup", async (req: Request, res: Response) => {

        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
            }
            const data = {
                email: req.body.email,
                password: req.body.password,
            }

            const createId = new CreateId();
            const id = createId.create();

            const db = new DataBase();
            await db.createUser(id, data.email, await new HashManager().hash(data.password))
            const user = await db.getUserByEmail(data.email);
            const authenticator = new Authenticator();
            const token = authenticator.generateToken({id, role: user.role})
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
    /*app.get("/user/:email", async (req: Request, res: Response) => {

        try {

            const email = req.params.email;
            const db = new DataBase();
            const user = await db.getUserByEmail(email);

            res.status(200).send(user)
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });*/

    app.post("/login", async (req: Request, res: Response) => {
        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            const data = {
                email: req.body.email,
                password: req.body.password,
            }
            const db = new DataBase();
            const user2 = await db.getUserByEmail(data.email).then(res => {
                return res
            });
            const hashCheck = new HashManager().compare(data.password, user2.user_password)

            const user = {
                email: user2.user_email,
                id: user2.user_id,
                password: user2.user_password,
                role: user2.role
            }

            if (!hashCheck) {
                throw new Error("Invalid password");
            }

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id: user.id,
                role: user.role
            });
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
    app.get("/user/profile", async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            if(authenticationData.role !== "normal"){
                throw new Error("Unauthorized ");
            }

            const userDb = new DataBase();
            const user = await userDb.getUserById(authenticationData.id);

            res.status(200).send({
                id: user.user_id,
                email: user.user_email,
            });
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
}

main();