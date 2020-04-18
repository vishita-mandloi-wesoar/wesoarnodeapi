
const mongo = require('mongoose');
import {ConfigHelper} from "./Config.helper";

const clientOption = {
   
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
export class MongoHelper {
    //public static client: MongoClient;
    public static client:any
    public static connect(url: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err:any) => {
                if (err) {
                    console.error("someting wrong with mongo" + err);
                   
                    reject(err);
                } else {
                    mongo.connection.once('open', () => {
                        console.log('connected to database');
                    })
                    // MongoHelper.client = client;
                     //resolve(client);
                }
            });
        });
    }
  
  
    public disconnect(): void {
       // MongoHelper.client.close();
    }
}