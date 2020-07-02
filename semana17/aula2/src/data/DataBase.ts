import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class DataBase {
    private static TABLE_NAME = "UserList";
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
        },
    });

    public async createUser(
        user_id: string,
        user_email: string,
        user_password: string
    ): Promise<void> {
        await this.connection
            .insert({
                user_id,
                user_email,
                user_password,
            })
            .into(DataBase.TABLE_NAME);
    }
    public async getUserByEmail (
        user_email: string
    ): Promise<any>{
       const result = await this.connection
            .select("*")
            .from(DataBase.TABLE_NAME)
            .where({user_email});
            console.log(result)
        return result[0]
    }
    public async getUserById (
        user_id: string
    ): Promise<any>{
        const result = await this.connection
            .select("*")
            .from(DataBase.TABLE_NAME)
            .where({user_id});
        return result[0]
    }
}