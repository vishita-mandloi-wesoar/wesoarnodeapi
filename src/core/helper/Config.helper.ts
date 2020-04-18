import dotEnv from "dotenv";
dotEnv.config();
export class ConfigHelper {
    public static DATABASE = {
        URL: process.env.DATABASE_URL,
        NAME: process.env.DATABASE_NAME
    };
    public static SERVER = {
        API_URL: process.env.API_URL,
        PORT: process.env.PORT
    }
}