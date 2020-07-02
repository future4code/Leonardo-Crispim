import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo, createConnection } from "net";
import knex from "knex";
import { connect } from "http2";
import { Database } from "./data/database";
import { Authenticator } from "./services/Authenticator";
import {IdGenerator } from "./services/IdGenerator";

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

const connection = knex(
  {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME
    }
  }
)

const getMovie = async () : Promise<any> => {
  const result = await connection.select("*").into("Movie").where("ID" , "=" , "002")

  console.log(result)
}


async function main(): Promise<void> {
  app.post("/signup", async(req: Request, res: Response) => {
    try{
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
      const idgenerator = new IdGenerator();
      const id = idgenerator.generate();
      const db = new Database();
      await db.createUser(id, data.email, data.password)

      const auth = new Authenticator();
      const token = auth.generateToken({id})

      res.status(200).send(
        {
          token 
        }
      )
    }
    catch(error){
      res.status(400).send({
        message: error.message,
      })
    }
  })
}

app.get("/users/:email", async(req: Request, res: Response) => {
  try{
    const email = req.params.email

    const db = new Database();
    const user = await db.getUser(email)

    res.status(200).send({user})
  }
  catch(error){
    res.status(400).send({
      message: error.message,
    })
  }
})

app.post("/login", async(req: Request, res: Response) => {
  try{
    const data = {
      email: req.body.email,
      // password: req.body.password,
    }

    const db = new Database();
    const user = await db.getUser(data.email)

    const auth = new Authenticator();
    const token = auth.generateToken(user.id)

    res.status(200).send({token})
  }
  catch(error){
    res.status(400).send({
      message: error.message,
    })
  }
})

app.get("/user/profile", async(req: Request, res: Response) => {
  try{
    const token = req.headers.authorization as string;

    // const auth = new Authenticator();
    // const authData = auth.getData(token);

    const db = new Database();
    const user = await db.getUserID("43cebf0b-01c2-4e5b-9952-97e6334847ca")


    res.status(200).send({
      id: user.id,
      email: user.email
    })
  }
  catch(error){
    res.status(400).send({
      message: error.message,
    })
  }
})

main();
