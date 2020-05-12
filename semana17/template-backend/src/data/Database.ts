import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class Database {
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
      
      private static userTableName = "UserList";
      
      public createTable = async() =>{
          await this.connection.raw(
              `CREATE TABLE UserList (
                  user_id VARCHAR(255) PRIMARY KEY NOT NULL,
                  user_email VARCHAR(255) NOT NULL,
                  user_password VARCHAR(255) NOT NULL
              );`
          )
      }
      
      public createUser = async (user_id: string, user_email: string, user_password: string) => {
        await this.connection
          .insert({
            user_id,
            user_email,
            user_password,
          })
          .into(Database.userTableName);
      };

      public async getUser (user_email: string) : Promise<any> {
         const result = await this.connection
          .select(
            "*"
          )
          .from(Database.userTableName)
          .where({user_email})

          return result[0];
      }

      public async getUserID (user_id: string) : Promise<any> {
        const result = await this.connection
         .select(
           "*"
         )
         .from(Database.userTableName)
         .where({user_id})

         return result[0];
     }
}